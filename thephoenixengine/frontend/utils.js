/*
=========================================================
ThePhoenixEngine
File        : utils.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Common Utility Functions
=========================================================
*/

"use strict";

/* ============================================
   Console Logger
============================================ */

function log(message, type = "info") {

    if (!TPE_CONFIG.DEBUG) return;

    const time = new Date().toLocaleTimeString();

    console.log(`[${type.toUpperCase()}] ${time} : ${message}`);

}

/* ============================================
   Generate Random ID
============================================ */

function generateID(length = 12) {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let id = "";

    for (let i = 0; i < length; i++) {

        id += chars.charAt(Math.floor(Math.random() * chars.length));

    }

    return id;

}

/* ============================================
   Word Count
============================================ */

function wordCount(text = "") {

    text = text.trim();

    if (text.length === 0) return 0;

    return text.split(/\s+/).length;

}

/* ============================================
   Character Count
============================================ */

function characterCount(text = "") {

    return text.length;

}

/* ============================================
   Paragraph Count
============================================ */

function paragraphCount(text = "") {

    if (text.trim() === "") return 0;

    return text.trim().split(/\n+/).length;

}

/* ============================================
   Sentence Count
============================================ */

function sentenceCount(text = "") {

    if (text.trim() === "") return 0;

    const matches = text.match(/[.!?]+/g);

    return matches ? matches.length : 1;

}

/* ============================================
   Reading Time
============================================ */

function readingTime(text = "") {

    const words = wordCount(text);

    return Math.max(1, Math.ceil(words / 200));

}

/* ============================================
   Copy To Clipboard
============================================ */

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        log("Copied to clipboard", "success");

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}

/* ============================================
   Save Local Storage
============================================ */

function saveStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value));

}

/* ============================================
   Load Local Storage
============================================ */

function loadStorage(key) {

    const value = localStorage.getItem(key);

    if (!value) return null;

    return JSON.parse(value);

}

/* ============================================
   Remove Storage
============================================ */

function removeStorage(key) {

    localStorage.removeItem(key);

}

/* ============================================
   Download TXT
============================================ */

function downloadTXT(filename, content) {

    const blob = new Blob([content], {

        type: "text/plain"

    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);

}

/* ============================================
   Debounce
============================================ */

function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(() => {

            func.apply(this, arguments);

        }, delay);

    };

}

/* ============================================
   Escape HTML
============================================ */

function escapeHTML(text) {

    return text

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}

/* ============================================
   UUID
============================================ */

function uuid() {

    return crypto.randomUUID();

}

/* ============================================
   Sleep
============================================ */

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

/* ============================================
   Timestamp
============================================ */

function timestamp() {

    return new Date().toISOString();

}

/* ============================================
   Health Check
============================================ */

function engineReady() {

    log("ThePhoenixEngine Utilities Loaded", "success");

}

engineReady();
