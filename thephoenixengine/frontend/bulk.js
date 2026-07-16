/*
=========================================================
ThePhoenixEngine
File        : bulk.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Bulk Humaniser Engine
=========================================================
*/

"use strict";

/* ============================================
   Bulk Engine
============================================ */

const Bulk = {

    queue: [],

    processing: false,

    completed: 0,

    failed: 0,

    results: [],

/* ============================================
   Add File
============================================ */

add(file){

    this.queue.push(file);

},

/* ============================================
   Clear Queue
============================================ */

clear(){

    this.queue=[];

    this.results=[];

    this.completed=0;

    this.failed=0;

},

/* ============================================
   Queue Size
============================================ */

count(){

    return this.queue.length;

},

/* ============================================
   Process Queue
============================================ */

async process(mode="STANDARD"){

    if(this.processing) return;

    this.processing=true;

    UI.showLoader();

    for(const file of this.queue){

        try{

            const text=

            await this.read(file);

            const result=

            await humaniseText(

                text,

                mode

            );

            this.results.push({

                file:file.name,

                success:true,

                output:result.output

            });

            this.completed++;

        }

        catch(error){

            this.failed++;

            this.results.push({

                file:file.name,

                success:false,

                error:error.message

            });

        }

        UI.setProgress(

            Math.round(

            ((this.completed+

            this.failed)

            /

            this.queue.length)

            *100)

        );

    }

    this.processing=false;

    UI.hideLoader();

    UI.showToast(

        "Bulk Processing Completed"

    );

},

/* ============================================
   Read File
============================================ */

read(file){

    return new Promise(

        (resolve,reject)=>{

        const reader=

        new FileReader();

        reader.onload=

        e=>resolve(

        e.target.result

        );

        reader.onerror=

        reject;

        reader.readAsText(file);

    });

},

/* ============================================
   Export Results
============================================ */

export(){

    let output="";

    this.results.forEach(item=>{

        output+=

        "====================\n";

        output+=

        item.file+"\n\n";

        if(item.success){

            output+=

            item.output;

        }

        else{

            output+=

            item.error;

        }

        output+="\n\n";

    });

    downloadTXT(

        "BulkHumaniser.txt",

        output

    );

},

/* ============================================
   Statistics
============================================ */

stats(){

    return{

        queue:this.queue.length,

        completed:this.completed,

        failed:this.failed

    };

}

};

/* ============================================
   Startup
============================================ */

log(

"Bulk Engine Loaded",

"success"

);
