/*
=========================================================
ThePhoenixEngine
File        : firebase.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Firebase Foundation
=========================================================
*/

"use strict";

/* ============================================
   Firebase Admin
============================================ */

const admin = require("firebase-admin");

/* ============================================
   Initialize
============================================ */

let app = null;

function initialize() {

    if (admin.apps.length > 0) {

        app = admin.app();

        return app;

    }

    app = admin.initializeApp({

        credential: admin.credential.applicationDefault()

    });

    return app;

}

/* ============================================
   Firestore
============================================ */

function firestore() {

    if (!app) {

        initialize();

    }

    return admin.firestore();

}

/* ============================================
   Authentication
============================================ */

function auth() {

    if (!app) {

        initialize();

    }

    return admin.auth();

}

/* ============================================
   Storage
============================================ */

function storage() {

    if (!app) {

        initialize();

    }

    return admin.storage();

}

/* ============================================
   Health
============================================ */

async function health() {

    try {

        firestore();

        return {

            success: true,

            message: "Firebase Connected"

        };

    }

    catch (error) {

        return {

            success: false,

            error: error.message

        };

    }

}

/* ============================================
   Future Collections
============================================ */

const COLLECTIONS = {

    USERS: "users",

    LICENSES: "licenses",

    API_KEYS: "api_keys",

    BATCHES: "batches",

    REPORTS: "reports",

    HISTORY: "history",

    LOGS: "logs",

    BILLING: "billing",

    ANALYTICS: "analytics",

    SETTINGS: "settings"

};

/* ============================================
   Export
============================================ */

module.exports = {

    initialize,

    firestore,

    auth,

    storage,

    health,

    COLLECTIONS

};
