/*
=========================================================
ThePhoenixEngine
File        : constants.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Application Constants
=========================================================
*/

"use strict";

/* ============================================
   Application
============================================ */

const APP = {

    NAME: "ThePhoenixEngine",

    VERSION: "1.0.0",

    COMPANY: "LagneshMitra",

    STATUS: "Production"

};

/* ============================================
   Providers
============================================ */

const PROVIDERS = {

    GROQ: "groq",

    OPENAI: "openai",

    GEMINI: "gemini",

    OPENROUTER: "openrouter"

};

/* ============================================
   Humaniser Modes
============================================ */

const MODES = {

    STANDARD: "STANDARD",

    PROFESSIONAL: "PROFESSIONAL",

    ACADEMIC: "ACADEMIC",

    BLOG: "BLOG",

    SEO: "SEO",

    REDDIT: "REDDIT",

    TECHNICAL: "TECHNICAL",

    STORY: "STORY",

    LM_RWP: "LM_RWP"

};

/* ============================================
   Response Status
============================================ */

const STATUS = {

    SUCCESS: "success",

    FAILED: "failed",

    ERROR: "error",

    WARNING: "warning"

};

/* ============================================
   Export
============================================ */

module.exports = {

    APP,

    PROVIDERS,

    MODES,

    STATUS

};
