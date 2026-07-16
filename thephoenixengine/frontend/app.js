/*
=========================================================
ThePhoenixEngine
File        : app.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Application Controller
=========================================================
*/

"use strict";

/* ============================================
   App Controller
============================================ */

const App = {

    input:null,

    output:null,

    mode:null,

    analyzeBtn:null,

    humaniseBtn:null,

    copyBtn:null,

    clearBtn:null,

    exportBtn:null,

    loading:false,

/* ============================================
   Initialize
============================================ */

init(){

    this.input=document.getElementById("inputText");

    this.output=document.getElementById("outputText");

    this.mode=document.getElementById("mode");

    this.analyzeBtn=document.getElementById("analyzeBtn");

    this.humaniseBtn=document.getElementById("humaniseBtn");

    this.copyBtn=document.getElementById("copyBtn");

    this.clearBtn=document.getElementById("clearBtn");

    this.exportBtn=document.getElementById("exportBtn");

    this.events();

    log("Application Initialized","success");

},

/* ============================================
   Events
============================================ */

events(){

    if(this.analyzeBtn){

        this.analyzeBtn.onclick=()=>{

            this.analyze();

        };

    }

    if(this.humaniseBtn){

        this.humaniseBtn.onclick=()=>{

            this.humanise();

        };

    }

    if(this.copyBtn){

        this.copyBtn.onclick=()=>{

            this.copy();

        };

    }

    if(this.clearBtn){

        this.clearBtn.onclick=()=>{

            this.clear();

        };

    }

    if(this.exportBtn){

        this.exportBtn.onclick=()=>{

            this.export();

        };

    }

},

/* ============================================
   Analyze
============================================ */

analyze(){

    const text=this.input.value;

    const result=analyseText(text);

    console.table(result);

    alert(

        "Words : "+result.words+

        "\nSentences : "+result.sentences+

        "\nScore : "+result.score

    );

},

/* ============================================
   Humanise
============================================ */

async humanise(){

    if(this.loading) return;

    this.loading=true;

    this.humaniseBtn.disabled=true;

    try{

        const result=

        await humaniseText(

            this.input.value,

            this.mode.value

        );

        if(result.success){

            this.output.value=

            result.output;

        }

        else{

            alert(result.error);

        }

    }

    catch(error){

        alert(error.message);

    }

    this.loading=false;

    this.humaniseBtn.disabled=false;

},

/* ============================================
   Copy
============================================ */

async copy(){

    if(this.output.value==="") return;

    await copyText(

        this.output.value

    );

    alert("Copied");

},

/* ============================================
   Export
============================================ */

export(){

    downloadTXT(

        "HumanisedText.txt",

        this.output.value

    );

},

/* ============================================
   Clear
============================================ */

clear(){

    this.input.value="";

    this.output.value="";

}

};

/* ============================================
   Startup
============================================ */

document.addEventListener(

"DOMContentLoaded",

()=>{

App.init();

});
