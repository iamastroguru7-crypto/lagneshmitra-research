/*
=========================================================
ThePhoenixEngine
File        : middleware.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Application Middleware
=========================================================
*/

"use strict";

const validator = require("./validator");

/* ============================================
   Validate Humaniser Request
============================================ */

function validateHumaniser(req, res, next){

    const {

        text,

        mode

    } = req.body;

    const validation =

    validator.validateText(text);

    if(!validation.success){

        return res.status(400).json({

            success:false,

            error:validation.message

        });

    }

    if(

        mode &&

        !validator.validateMode(mode)

    ){

        return res.status(400).json({

            success:false,

            error:"Invalid mode."

        });

    }

    next();

}

/* ============================================
   Validate API Key
============================================ */

function validateApiKey(req,res,next){

    const key=

    req.headers["x-api-key"];

    if(!validator.validateApiKey(key)){

        return res.status(401).json({

            success:false,

            error:"Invalid API Key."

        });

    }

    next();

}

/* ============================================
   Request Timer
============================================ */

function requestTimer(req,res,next){

    req.startTime=Date.now();

    res.on("finish",()=>{

        const time=

        Date.now()-req.startTime;

        console.log(

        `${req.method} ${req.url} - ${time} ms`

        );

    });

    next();

}

/* ============================================
   Security Headers
============================================ */

function securityHeaders(req,res,next){

    res.setHeader(

        "X-Powered-By",

        "ThePhoenixEngine"

    );

    res.setHeader(

        "X-Frame-Options",

        "DENY"

    );

    res.setHeader(

        "X-Content-Type-Options",

        "nosniff"

    );

    next();

}

/* ============================================
   Export
============================================ */

module.exports={

    validateHumaniser,

    validateApiKey,

    requestTimer,

    securityHeaders

};
