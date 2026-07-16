/*
=========================================================
ThePhoenixEngine
File        : routes.js
Version     : 1.1.0
Developer   : LagneshMitra
=========================================================
API Routes
=========================================================
*/

"use strict";

const express = require("express");
const router = express.Router();

const groq = require("./groq");

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

router.get("/health", async (req, res) => {

    try {

        const health = await groq.healthCheck();

        res.json({

            success: true,

            engine: "ThePhoenixEngine",

            groq: health,

            timestamp: new Date().toISOString()

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            error: error.message

        });

    }

});

/* ============================================
   Humaniser
============================================ */

router.post("/humanise", async (req, res) => {

    try {

        const {

            text,

            mode = "STANDARD",

            provider = "groq",

            model

        } = req.body;

        if (!text || text.trim() === "") {

            return res.status(400).json({

                success: false,

                error: "Input text required."

            });

        }

        const prompt =

`You are ThePhoenixEngine Humaniser.

Rewrite the supplied text naturally.

Requirements:

- Preserve meaning.
- Improve readability.
- Remove robotic wording.
- Improve sentence flow.
- Return only rewritten text.`;

        const result = await groq.generate({

            prompt,

            text,

            model

        });

        return res.json(result);

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            error: error.message

        });

    }

});

/* ============================================
   Analyzer
============================================ */

router.post("/analyze", (req, res) => {

    const { text = "" } = req.body;

    res.json({

        success: true,

        message: "Analyzer Route Ready",

        characters: text.length,

        words: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,

        paragraphs: text.trim() === "" ? 0 : text.trim().split(/\n+/).length

    });

});

/* ============================================
   Billing Placeholder
============================================ */

router.get("/billing", (req, res) => {

    res.json({

        success: true,

        message: "Billing Module Coming Soon"

    });

});

/* ============================================
   License Placeholder
============================================ */

router.get("/license", (req, res) => {

    res.json({

        success: true,

        message: "License Module Coming Soon"

    });

});

/* ============================================
   Enterprise Placeholder
============================================ */

router.get("/enterprise", (req, res) => {

    res.json({

        success: true,

        message: "Enterprise Module Coming Soon"

    });

});

/* ============================================
   Available Models
============================================ */

router.get("/models", (req, res) => {

    res.json({

        success: true,

        models: groq.availableModels()

    });

});

/* ============================================
   Export
============================================ */

module.exports = router;
