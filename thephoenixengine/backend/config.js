/*
=========================================================
ThePhoenixEngine
File        : config.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Backend Configuration
=========================================================
*/

"use strict";

require("dotenv").config();

/* ============================================
   Application
============================================ */

const CONFIG = {

    APP_NAME: "ThePhoenixEngine",

    VERSION: "1.0.0",

    COMPANY: "LagneshMitra",

    ENVIRONMENT:

        process.env.NODE_ENV ||

        "development"

};

/* ============================================
   Server
============================================ */

CONFIG.SERVER = {

    PORT:

        process.env.PORT ||

        3000,

    API_VERSION:

        process.env.API_VERSION ||

        "v1"

};

/* ============================================
   Groq
============================================ */

CONFIG.GROQ = {

    API_KEY:

        process.env.GROQ_API_KEY ||

        "",

    MODEL:

        process.env.GROQ_MODEL ||

        "llama-3.3-70b-versatile",

    TEMPERATURE: 0.40,

    MAX_TOKENS: 4096

};

/* ============================================
   JWT
============================================ */

CONFIG.JWT = {

    SECRET:

        process.env.JWT_SECRET ||

        "",

    EXPIRES_IN: "7d"

};

/* ============================================
   License
============================================ */

CONFIG.LICENSE = {

    SECRET:

        process.env.LICENSE_SECRET ||

        "",

    DEFAULT_PLAN: "FREE"

};

/* ============================================
   Limits
============================================ */

CONFIG.LIMITS = {

    MAX_INPUT_WORDS: 5000,

    MAX_OUTPUT_TOKENS: 4096,

    REQUEST_TIMEOUT: 120000

};

/* ============================================
   Features
============================================ */

CONFIG.FEATURES = {

    HUMANISER: true,

    ANALYZER: true,

    BULK: true,

    BILLING: false,

    LICENSE: true,

    LOGIN: false,

    ENTERPRISE: false

};

/* ============================================
   Providers
============================================ */

CONFIG.PROVIDERS = {

    DEFAULT: "groq",

    AVAILABLE: [

        "groq"

    ]

};

/* ============================================
   Export
============================================ */

module.exports = CONFIG;
