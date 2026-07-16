/*
=========================================================
ThePhoenixEngine
File        : exportEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Export Engine
=========================================================
*/

"use strict";

const fs = require("fs");

const path = require("path");

/* ============================================
   Export Directory
============================================ */

const EXPORT_DIRECTORY = path.join(

    __dirname,

    "exports"

);

if(!fs.existsSync(EXPORT_DIRECTORY)){

    fs.mkdirSync(

        EXPORT_DIRECTORY,

        {

            recursive:true

        }

    );

}

/* ============================================
   TXT Export
============================================ */

function exportTXT(

    filename,

    content

){

    const file = path.join(

        EXPORT_DIRECTORY,

        filename

    );

    fs.writeFileSync(

        file,

        content,

        "utf8"

    );

    return file;

}

/* ============================================
   JSON Export
============================================ */

function exportJSON(

    filename,

    data

){

    const file = path.join(

        EXPORT_DIRECTORY,

        filename

    );

    fs.writeFileSync(

        file,

        JSON.stringify(

            data,

            null,

            4

        ),

        "utf8"

    );

    return file;

}

/* ============================================
   CSV Export
============================================ */

function exportCSV(

    filename,

    rows=[]

){

    const file = path.join(

        EXPORT_DIRECTORY,

        filename

    );

    const csv = rows

        .map(row=>row.join(","))

        .join("\n");

    fs.writeFileSync(

        file,

        csv,

        "utf8"

    );

    return file;

}

/* ============================================
   Future DOCX
============================================ */

async function exportDOCX(){

    return{

        success:true,

        message:"DOCX Engine Coming Soon."

    };

}

/* ============================================
   Future ZIP
============================================ */

async function exportZIP(){

    return{

        success:true,

        message:"ZIP Batch Engine Coming Soon."

    };

}

/* ============================================
   Export
============================================ */

module.exports={

    exportTXT,

    exportJSON,

    exportCSV,

    exportDOCX,

    exportZIP

};
