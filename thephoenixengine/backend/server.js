/*
=========================================================
ThePhoenixEngine
File        : server.js
Version     : 1.1.0
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
const routes = require("./routes");

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

app.use(express.json({
    limit: "25mb"
}));

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
        `[${now}] ${req.method} ${req.originalUrl}`
    );

    next();

});

/* ============================================
   Root
============================================ */

app.get("/", (req, res) => {

    res.json({

        success: true,

        engine: "ThePhoenixEngine",

        version: "1.1.0",

        status: "Running"

    });

});

/* ============================================
   API Routes
============================================ */

app.use(`/api/${API_VERSION}`, routes);

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

    console.log("====================================");
    console.log("ThePhoenixEngine Started");
    console.log("Port :", PORT);
    console.log("API Version :", API_VERSION);
    console.log("Environment :", process.env.NODE_ENV);
    console.log("====================================");

    console.log("");

});
