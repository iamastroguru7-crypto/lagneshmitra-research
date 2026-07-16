/*
=========================================================
ThePhoenixEngine
File        : reportEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Report Engine
=========================================================
*/

"use strict";

const crypto = require("crypto");

/* ============================================
   Report ID
============================================ */

function createReportId(){

    return "RPT-"

    +

    Date.now()

    +

    "-"

    +

    crypto

    .randomBytes(3)

    .toString("hex")

    .toUpperCase();

}

/* ============================================
   Batch ID
============================================ */

function createBatchId(){

    return "BATCH-"

    +

    Date.now();

}

/* ============================================
   Report Object
============================================ */

function createReport(data={}){

    return{

        reportId:

        createReportId(),

        batchId:

        data.batchId ||

        createBatchId(),

        module:

        data.module ||

        "GENERAL",

        customer:

        data.customer ||

        "",

        title:

        data.title ||

        "",

        createdAt:

        new Date()

        .toISOString(),

        status:

        "Processing",

        words:

        0,

        pages:

        0,

        aiScore:

        null,

        humanScore:

        null,

        output:

        ""

    };

}

/* ============================================
   Update Output
============================================ */

function updateOutput(

    report,

    output

){

    report.output=output;

    report.words=

    output

    .trim()

    .split(/\s+/)

    .length;

    report.pages=

    Math.max(

        1,

        Math.ceil(

            report.words/

            500

        )

    );

    report.status=

    "Completed";

    return report;

}

/* ============================================
   Summary
============================================ */

function summary(report){

    return{

        reportId:

        report.reportId,

        batchId:

        report.batchId,

        module:

        report.module,

        pages:

        report.pages,

        words:

        report.words,

        status:

        report.status

    };

}

/* ============================================
   Batch Summary
============================================ */

function batchSummary(reports=[]){

    let words=0;

    let pages=0;

    reports.forEach(r=>{

        words+=

        r.words||0;

        pages+=

        r.pages||0;

    });

    return{

        reports:

        reports.length,

        totalWords:

        words,

        totalPages:

        pages,

        completed:

        reports.filter(

        r=>r.status==="Completed"

        ).length

    };

}

/* ============================================
   Export
============================================ */

module.exports={

    createReport,

    createReportId,

    createBatchId,

    updateOutput,

    summary,

    batchSummary

};
