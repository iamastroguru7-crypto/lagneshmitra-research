/*
=========================================================
ThePhoenixEngine
File        : securityEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Security Engine
=========================================================
*/

"use strict";

/* ============================================
   Security Store
============================================ */

const SecurityLogs = [];

/* ============================================
   Log Event
============================================ */

function log({

    event,

    userId = "SYSTEM",

    ipAddress = "",

    severity = "LOW",

    details = ""

}){

    const record = {

        logId:

        "SEC-" +

        Date.now(),

        event,

        userId,

        ipAddress,

        severity,

        details,

        timestamp:

        new Date().toISOString()

    };

    SecurityLogs.push(record);

    return record;

}

/* ============================================
   Validate Token
============================================ */

function validateToken(

    token

){

    return !!(

        token &&

        token.length > 10

    );

}

/* ============================================
   Validate Role
============================================ */

function validateRole(

    role

){

    const roles=[

        "ADMIN",

        "OPERATOR",

        "CUSTOMER",

        "SYSTEM"

    ];

    return roles.includes(role);

}

/* ============================================
   Get Log
============================================ */

function get(

    logId

){

    return SecurityLogs.find(

        item=>

        item.logId===logId

    );

}

/* ============================================
   All Logs
============================================ */

function all(){

    return SecurityLogs;

}

/* ============================================
   Count
============================================ */

function count(){

    return SecurityLogs.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    log,

    validateToken,

    validateRole,

    get,

  
    all,

    count

};
