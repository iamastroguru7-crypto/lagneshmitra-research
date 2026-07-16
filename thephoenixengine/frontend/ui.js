/*
=========================================================
ThePhoenixEngine
File        : ui.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
UI Controller
=========================================================
*/

"use strict";

const UI = {

    loader:null,

    progress:null,

    toast:null,

    theme:"dark",

/* ============================================
   Initialize
============================================ */

init(){

    this.loader=document.getElementById("loader");

    this.progress=document.getElementById("progressBar");

    this.toast=document.getElementById("toast");

    log("UI Ready","success");

},

/* ============================================
   Loader
============================================ */

showLoader(){

    if(this.loader){

        this.loader.style.display="flex";

    }

},

hideLoader(){

    if(this.loader){

        this.loader.style.display="none";

    }

},

/* ============================================
   Progress
============================================ */

setProgress(value){

    if(!this.progress) return;

    this.progress.style.width=value+"%";

},

resetProgress(){

    this.setProgress(0);

},

/* ============================================
   Toast
============================================ */

showToast(message,type="success"){

    if(!this.toast){

        alert(message);

        return;

    }

    this.toast.innerText=message;

    this.toast.className="toast "+type;

    this.toast.style.display="block";

    setTimeout(()=>{

        this.toast.style.display="none";

    },3000);

},

/* ============================================
   Theme
============================================ */

toggleTheme(){

    if(this.theme==="dark"){

        document.body.classList.remove("dark");

        document.body.classList.add("light");

        this.theme="light";

    }

    else{

        document.body.classList.remove("light");

        document.body.classList.add("dark");

        this.theme="dark";

    }

},

/* ============================================
   Status
============================================ */

setStatus(text){

    const status=document.getElementById("status");

    if(status){

        status.innerText=text;

    }

},

/* ============================================
   Enable Button
============================================ */

enable(id){

    const btn=document.getElementById(id);

    if(btn){

        btn.disabled=false;

    }

},

/* ============================================
   Disable Button
============================================ */

disable(id){

    const btn=document.getElementById(id);

    if(btn){

        btn.disabled=true;

    }

},

/* ============================================
   Clear Output
============================================ */

clearOutput(){

    const output=document.getElementById("outputText");

    if(output){

        output.value="";

    }

},

/* ============================================
   Modal
============================================ */

openModal(id){

    const modal=document.getElementById(id);

    if(modal){

        modal.style.display="flex";

    }

},

closeModal(id){

    const modal=document.getElementById(id);

    if(modal){

        modal.style.display="none";

    }

},

/* ============================================
   Future Hooks
============================================ */

updateWordCount(){},

updateCharacterCount(){},

updateUsage(){},

updatePlan(){},

updateCredits(){}

};

document.addEventListener(

"DOMContentLoaded",

()=>{

UI.init();

});
