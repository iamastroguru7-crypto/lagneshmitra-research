/*
=========================================================
ThePhoenixEngine
File        : auditEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Audit Engine
=========================================================
*/

"use strict";

/* ============================================
   Audit Store
============================================ */

const AuditLogs = [];

/* ============================================
   Create Log
============================================ */

function log({

    operatorId = null,

    batchId = null,

    reportId = null,

    action = "UNKNOWN",

    module = "CORE",

    remarks = ""

}){

    const record = {

        auditId:

        "AUD-" +

        Date.now(),

        operatorId,

        batchId,

        reportId,

        module,

        action,

        remarks,

        timestamp:

        new Date().toISOString()

    };

    AuditLogs.push(record);

    return record;

}

/* ============================================
   Get All
============================================ */

function getAll(){

    return AuditLogs;

}

/* ============================================
   By Batch
============================================ */

function byBatch(batchId){

    return AuditLogs.filter(

        item =>

        item.batchId===batchId

    );

}

/* ============================================
   By Operator
============================================ */

function byOperator(operatorId){

    return AuditLogs.filter(

        item =>

        item.operatorId===operatorId

    );

}

/* ============================================
   By Report
============================================ */

function byReport(reportId){

    return AuditLogs.filter(

        item =>

        item.reportId===reportId

    );

}

/* ============================================
   Count
============================================ */

function count(){

    return AuditLogs.length;

}

/* ============================================
   Clear
============================================ */

function clear(){

    AuditLogs.length = 0;

}

/* ============================================
   Export
============================================ */

module.exports = {

    log,

    getAll,

    byBatch,

    byOperator,

    byReport,

    count,

    clear

};
