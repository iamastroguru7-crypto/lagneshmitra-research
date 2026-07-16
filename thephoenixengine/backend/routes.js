/*
=========================================================
ThePhoenixEngine
File        : routes.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
API Routes
=========================================================
*/

"use strict";

const express = require("express");

const router = express.Router();

/* ============================================
   Root API
============================================ */

router.get("/", (req, res) => {

    res.json({

        success: true,

        engine: "ThePhoenixEngine",

        message: "API Routes Online"

    });

});

/* ============================================
   Health Check
============================================ */

router.get("/health", (req, res) => {

    res.json({

        success: true,

        status: "healthy",

        timestamp: new Date().toISOString()

    });

});

/* ============================================
   Humaniser
============================================ */

router.post("/humanise", async (req, res) => {

    try{

        const {

            text,

            mode,

            provider,

            model

        } = req.body;

        if(!text){

            return res.status(400).json({

                success:false,

                error:"Input text required."

            });

        }

        /*

        Groq Engine

        Will connect here

        */

        return res.json({

            success:true,

            message:"Humaniser route active.",

            received:{

                mode,

                provider,

                model

            }

        });

    }

    catch(error){

        return res.status(500).json({

            success:false,

            error:error.message

        });

    }

});

/* ============================================
   Analyzer
============================================ */

router.post("/analyze",(req,res)=>{

    const {

        text

    } = req.body;

    return res.json({

        success:true,

        message:"Analyzer Route Ready",

        characters:text?text.length:0

    });

});

/* ============================================
   Billing Placeholder
============================================ */

router.get("/billing",(req,res)=>{

    res.json({

        success:true,

        message:"Billing Module Coming Soon"

    });

});

/* ============================================
   License Placeholder
============================================ */

router.get("/license",(req,res)=>{

    res.json({

        success:true,

        message:"License Module Coming Soon"

    });

});

/* ============================================
   Enterprise Placeholder
============================================ */

router.get("/enterprise",(req,res)=>{

    res.json({

        success:true,

        message:"Enterprise Module Coming Soon"

    });

});

/* ============================================
   Export
============================================ */

module.exports = router;
