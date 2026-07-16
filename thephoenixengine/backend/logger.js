/*
=========================================================
ThePhoenixEngine
File        : logger.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Production Logger
=========================================================
*/

"use strict";

const fs = require("fs");

const path = require("path");

/* ============================================
   Log Directory
============================================ */

const LOG_DIRECTORY = path.join(

    __dirname,

    "logs"

);

if(!fs.existsSync(LOG_DIRECTORY)){

    fs.mkdirSync(

        LOG_DIRECTORY,

        {

            recursive:true

        }

    );

}

/* ============================================
   Log File
============================================ */

function getLogFile(){

    const today=

    new Date()

    .toISOString()

    .split("T")[0];

    return path.join(

        LOG_DIRECTORY,

        `${today}.log`

    );

}

/* ============================================
   Write Log
============================================ */

function write(

    level,

    message,

    data={}

){

    const entry={

        time:

        new Date()

        .toISOString(),

        level,

        message,

        data

    };

    const line=

    JSON.stringify(entry)+

    "\n";

    fs.appendFileSync(

        getLogFile(),

        line

    );

}

/* ============================================
   Info
============================================ */

function info(

    message,

    data={}

){

    console.log(

        "[INFO]",

        message

    );

    write(

        "INFO",

        message,

        data

    );

}

/* ============================================
   Warning
============================================ */

function warning(

    message,

    data={}

){

    console.warn(

        "[WARNING]",

        message

    );

    write(

        "WARNING",

        message,

        data

    );

}

/* ============================================
   Error
============================================ */

function error(

    message,

    data={}

){

    console.error(

        "[ERROR]",

        message

    );

    write(

        "ERROR",

        message,

        data

    );

}

/* ============================================
   Humaniser Log
============================================ */

function humaniser(

    batchId,

    words,

    mode,

    provider,

    model

){

    write(

        "HUMANISER",

        "Humaniser Request",

        {

            batchId,

            words,

            mode,

            provider,

            model

        }

    );

}

/* ============================================
   Batch Log
============================================ */

function batch(

    batchId,

    reports,

    pages,

    status

){

    write(

        "BATCH",

        "Batch Completed",

        {

            batchId,

            reports,

            pages,

            status

        }

    );

}

/* ============================================
   Export
============================================ */

module.exports={

    info,

    warning,

    error,

    humaniser,

    batch

};
