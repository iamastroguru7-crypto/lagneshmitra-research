/*
=========================================================
ThePhoenixEngine
File        : validator.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Request Validator
=========================================================
*/

"use strict";

/* ============================================
   Required
============================================ */

function required(value){

    return(

        value!==undefined &&

        value!==null &&

        String(value).trim()!==""

    );

}

/* ============================================
   Validate Text
============================================ */

function validateText(text){

    if(!required(text)){

        return{

            success:false,

            message:"Input text is required."

        };

    }

    if(text.length<5){

        return{

            success:false,

            message:"Text is too short."

        };

    }

    return{

        success:true

    };

}

/* ============================================
   Validate Email
============================================ */

function validateEmail(email){

    if(!required(email)){

        return false;

    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    .test(email);

}

/* ============================================
   Validate API Key
============================================ */

function validateApiKey(key){

    if(!required(key)){

        return false;

    }

    return key.length>=20;

}

/* ============================================
   Validate License
============================================ */

function validateLicense(key){

    if(!required(key)){

        return false;

    }

    return key.startsWith("LM-");

}

/* ============================================
   Validate Batch
============================================ */

function validateBatch(batch){

    return Array.isArray(batch);

}

/* ============================================
   Validate Mode
============================================ */

function validateMode(mode){

    const modes=[

        "STANDARD",

        "PROFESSIONAL",

        "ACADEMIC",

        "BLOG",

        "SEO",

        "REDDIT",

        "TECHNICAL",

        "STORY",

        "LM_RWP"

    ];

    return modes.includes(mode);

}

/* ============================================
   Export
============================================ */

module.exports={

    required,

    validateText,

    validateEmail,

    validateApiKey,

    validateLicense,

    validateBatch,

    validateMode

};
