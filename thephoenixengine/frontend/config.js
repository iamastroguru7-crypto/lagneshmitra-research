/*
=========================================================
ThePhoenixEngine
File        : config.js
Version     : 1.0.0
Developer   : LagneshMitra
Environment : Development
=========================================================
DO NOT MODIFY THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING.
This file contains all global application configurations.
=========================================================
*/

"use strict";

/* ============================================
   APPLICATION INFORMATION
============================================ */

const TPE_CONFIG = {

    APP_NAME: "ThePhoenixEngine",

    APP_VERSION: "1.0.0",

    BUILD: "DEV-001",

    AUTHOR: "LagneshMitra",

    COMPANY: "LagneshMitra",

    COPYRIGHT: "© 2026 LagneshMitra",

    WEBSITE: "https://lagneshmitra.in",

};



/* ============================================
   ENVIRONMENT
============================================ */

TPE_CONFIG.ENVIRONMENT = "development";

TPE_CONFIG.DEBUG = true;

TPE_CONFIG.LOG_CONSOLE = true;



/* ============================================
   SERVER CONFIGURATION
============================================ */

TPE_CONFIG.API_BASE_URL = "http://localhost:3000/api";

TPE_CONFIG.REQUEST_TIMEOUT = 120000;

TPE_CONFIG.MAX_RETRY = 2;



/* ============================================
   MODEL CONFIGURATION
============================================ */

TPE_CONFIG.DEFAULT_PROVIDER = "groq";

TPE_CONFIG.DEFAULT_MODEL = "llama-3.3-70b-versatile";

TPE_CONFIG.MAX_INPUT_WORDS = 5000;

TPE_CONFIG.MAX_OUTPUT_TOKENS = 4000;

TPE_CONFIG.TEMPERATURE = 0.40;



/* ============================================
   UI SETTINGS
============================================ */

TPE_CONFIG.DEFAULT_THEME = "dark";

TPE_CONFIG.DEFAULT_FONT = "Poppins";

TPE_CONFIG.ANIMATION = true;

TPE_CONFIG.AUTO_SAVE = true;

TPE_CONFIG.AUTO_SAVE_INTERVAL = 30000;



/* ============================================
   FEATURE FLAGS
============================================ */

TPE_CONFIG.FEATURES = {

    LOGIN: true,

    HUMANISER: true,

    ANALYZER: true,

    BULK: true,

    EXPORT: true,

    HISTORY: true,

    DARK_MODE: true,

    LIGHT_MODE: true,

    PROMPT_LIBRARY: true,

    ENTERPRISE: false,

    BILLING: false,

    API_KEYS: false

};



/* ============================================
   FILE SUPPORT
============================================ */

TPE_CONFIG.ALLOWED_EXTENSIONS = [

".txt",

".docx",

".md"

];



TPE_CONFIG.MAX_FILE_SIZE_MB = 15;



/* ============================================
   EXPORT OPTIONS
============================================ */

TPE_CONFIG.EXPORT = {

    TXT: true,

    DOCX: true,

    PDF: false,

    MARKDOWN: true

};



/* ============================================
   LOCAL STORAGE KEYS
============================================ */

TPE_CONFIG.STORAGE = {

    SESSION: "tpe_session",

    USER: "tpe_user",

    THEME: "tpe_theme",

    SETTINGS: "tpe_settings",

    HISTORY: "tpe_history"

};



/* ============================================
   STATUS COLORS
============================================ */

TPE_CONFIG.STATUS = {

    SUCCESS: "#16a34a",

    WARNING: "#f59e0b",

    ERROR: "#dc2626",

    INFO: "#2563eb"

};



/* ============================================
   FREEZE CONFIG
============================================ */

Object.freeze(TPE_CONFIG);



/* ============================================
   STARTUP LOG
============================================ */

if (TPE_CONFIG.DEBUG) {

    console.log("====================================");

    console.log(TPE_CONFIG.APP_NAME);

    console.log("Version :", TPE_CONFIG.APP_VERSION);

    console.log("Build   :", TPE_CONFIG.BUILD);

    console.log("Model   :", TPE_CONFIG.DEFAULT_MODEL);

    console.log("Environment :", TPE_CONFIG.ENVIRONMENT);

    console.log("====================================");

}
