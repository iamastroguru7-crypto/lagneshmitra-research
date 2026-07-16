/*
=========================================================
ThePhoenixEngine
File        : humaniser.js
Version     : 1.1.0
Developer   : LagneshMitra
=========================================================
Humaniser Engine
=========================================================
*/

"use strict";

/* ============================================
   Humaniser Object
============================================ */

const Humaniser = {

    isRunning: false,

    currentMode: "STANDARD",

    apiEndpoint: "/humanise",

    history: [],

    version: "1.1.0",

    retries: 3,

    timeoutValue: TPE_CONFIG.REQUEST_TIMEOUT,

    /* ============================================
       Run
    ============================================ */

    async run(text, mode = "STANDARD") {

        if (!text || text.trim() === "") {

            throw new Error("Input text is empty.");

        }

        this.currentMode = mode;

        this.isRunning = true;

        log("Starting Humaniser Engine...", "info");

        try {

            const response = await this.execute(text, mode);

            this.isRunning = false;

            return response;

        }

        catch (error) {

            this.isRunning = false;

            console.error(error);

            throw error;

        }

    },

    /* ============================================
       API Request
    ============================================ */

    async sendRequest(text, mode) {

        const payload = {

            mode,

            text,

            provider: TPE_CONFIG.DEFAULT_PROVIDER,

            model: TPE_CONFIG.DEFAULT_MODEL

        };

        const response = await fetch(

            TPE_CONFIG.API_BASE_URL +

            this.apiEndpoint,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payload)

            }

        );

        if (!response.ok) {

            throw new Error(

                "HTTP " +

                response.status

            );

        }

        return await response.json();

    },

    /* ============================================
       Timeout
    ============================================ */

    timeout(ms = TPE_CONFIG.REQUEST_TIMEOUT){

        return new Promise((_, reject)=>{

            setTimeout(()=>{

                reject(

                    new Error(

                        "Request Timeout"

                    )

                );

            }, ms);

        });

    },

    /* ============================================
       Execute
    ============================================ */

    async execute(text, mode){

        const response =

        await Promise.race([

            this.sendRequest(text, mode),

            this.timeout()

        ]);

        return this.process(response);

    },

       /* ============================================
       Process Response
    ============================================ */

    process(response){

        if(!response){

            return{

                success:false,

                error:"Empty response."

            };

        }

        if(response.success===false){

            return response;

        }

        this.addHistory(

            response.output

        );

        return{

            success:true,

            provider:

            response.provider ||

            "Groq",

            model:

            response.model ||

            TPE_CONFIG.DEFAULT_MODEL,

            output:

            response.output ||

            "",

            usage:

            response.usage ||

            {}

        };

    },

    /* ============================================
       Retry Engine
    ============================================ */

    async retry(text, mode){

        let attempt = 0;

        while(attempt < this.retries){

            try{

                const result =

                await this.execute(

                    text,

                    mode

                );

                if(result.success){

                    return result;

                }

            }

            catch(error){

                log(

                    "Retry " +

                    (attempt + 1),

                    "warning"

                );

            }

            attempt++;

            await sleep(1000);

        }

        return{

            success:false,

            error:

            "Maximum retry limit reached."

        };

    },

    /* ============================================
       Humanise
    ============================================ */

    async humanise(text, mode){

        return await this.retry(

            text,

            mode

        );

    },

    /* ============================================
       History
    ============================================ */

    addHistory(output){

        this.history.unshift({

            id: uuid(),

            created: timestamp(),

            output

        });

        if(this.history.length > 100){

            this.history.pop();

        }

    },

    getHistory(){

        return this.history;

    },

    clearHistory(){

        this.history = [];

    },

       /* ============================================
       Copy Output
    ============================================ */

    async copy(output){

        return await copyText(output);

    },

    /* ============================================
       Download TXT
    ============================================ */

    exportTXT(filename, output){

        downloadTXT(filename, output);

    },

    /* ============================================
       Save History
    ============================================ */

    saveHistory(){

        saveStorage(

            TPE_CONFIG.STORAGE.HISTORY,

            this.history

        );

    },

    /* ============================================
       Load History
    ============================================ */

    loadHistory(){

        const history = loadStorage(

            TPE_CONFIG.STORAGE.HISTORY

        );

        if(history){

            this.history = history;

        }

    },

    /* ============================================
       Reset
    ============================================ */

    reset(){

        this.isRunning = false;

        this.currentMode = "STANDARD";

    },

    /* ============================================
       Cancel
    ============================================ */

    cancel(){

        this.isRunning = false;

        log(

            "Humaniser Cancelled",

            "warning"

        );

    }

};

/* ============================================
   Public Function
============================================ */

async function humaniseText(

    text,

    mode = "STANDARD"

){

    return await Humaniser.humanise(

        text,

        mode

    );

}

/* ============================================
   Initialize
============================================ */

Humaniser.loadHistory();

/* ============================================
   Startup
============================================ */

log(

    "ThePhoenixEngine Humaniser v1.1 Loaded",

    "success"

);
