/*
=========================================================
ThePhoenixEngine
File        : server.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Backend Server
=========================================================
*/

"use strict";

/* ============================================
   Dependencies
============================================ */

require("dotenv").config();

const express = require("express");

const cors = require("cors");

const path = require("path");

/* ============================================
   Create App
============================================ */

const app = express();

/* ============================================
   Configuration
============================================ */

const PORT = process.env.PORT || 3000;

const API_VERSION = process.env.API_VERSION || "v1";

/* ============================================
   Middlewares
============================================ */

app.use(cors());

app.use(express.json({ limit: "25mb" }));

app.use(express.urlencoded({
    extended: true,
    limit: "25mb"
}));

/* ============================================
   Request Logger
============================================ */

app.use((req, res, next) => {

    const now = new Date().toISOString();

    console.log(
        `[${now}] ${req.method} ${req.url}`
    );

    next();

});

/* ============================================
   Health Check
============================================ */

app.get("/", (req, res) => {

    res.json({

        success: true,

        engine: "ThePhoenixEngine",

        version: "1.0.0",

        status: "Running"

    });

});

/* ============================================
   API Status
============================================ */

app.get(`/api/${API_VERSION}`, (req, res) => {

    res.json({

        success: true,

        message: "API Online",

        version: API_VERSION

    });

});

/* ============================================
   Humaniser Endpoint
============================================ */

app.post(`/api/${API_VERSION}/humanise`, async (req, res) => {

    try {

        const {

            text,

            mode,

            provider,

            model

        } = req.body;

        if (!text) {

            return res.status(400).json({

                success: false,

                error: "Input text missing."

            });

        }

        /*

        Groq Engine

        Will be connected

        in groq.js

        */

        return res.json({

            success: true,

            message: "Humaniser endpoint ready.",

            received: {

                mode,

                provider,

                model

            }

        });

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
   404
============================================ */

app.use((req, res) => {

    res.status(404).json({

        success: false,

        error: "Endpoint Not Found"

    });

});

/* ============================================
   Global Error Handler
============================================ */

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({

        success: false,

        error: "Internal Server Error"

    });

});

/* ============================================
   Start Server
============================================ */

app.listen(PORT, () => {

    console.log("");

    console.log("================================");

    console.log("ThePhoenixEngine Started");

    console.log("Port :", PORT);

    console.log("API :", API_VERSION);

    console.log("================================");

    console.log("");

});
