/*
=========================================================
ThePhoenixEngine
File        : humaniser.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Humaniser Engine
=========================================================
*/

"use strict";

/* ============================================
   Humaniser Class
============================================ */

const Humaniser = {

    isRunning: false,

    currentMode: "STANDARD",

    apiEndpoint: "/humanise",

    /* ============================================
       Humanise
    ============================================ */

    async run(text, mode = "STANDARD") {

        if (!text || text.trim() === "") {

            throw new Error("Input text is empty.");

        }

        this.currentMode = mode;

        this.isRunning = true;

        log("Starting Humaniser Engine...", "info");

        try {

            const response = await this.sendRequest(text, mode);

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

            mode: mode,

            text: text,

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

                "Server Error : " +

                response.status

            );

        }

        const data = await response.json();

        return data;

    },

    /* ============================================
       Cancel
    ============================================ */

    cancel() {

        this.isRunning = false;

        log("Humaniser Cancelled", "warning");

    }

};

/* ============================================
   Public Function
============================================ */

async function humaniseText(text, mode = "STANDARD") {

    return await Humaniser.run(text, mode);

}

/* ============================================
   Startup
============================================ */

log("Humaniser Engine Loaded", "success");
