/*
=========================================================
ThePhoenixEngine
File        : printEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Print Engine
=========================================================
*/

"use strict";

/* ============================================
   Print Queue
============================================ */

const PrintQueue = [];

/* ============================================
   Add Print Job
============================================ */

function create({

    printId,

    documentId,

    title,

    copies = 1,

    printer = "DEFAULT"

}){

    const job = {

        printId,

        documentId,

        title,

        copies,

        printer,

        status:"QUEUED",

        createdAt:

        new Date().toISOString()

    };

    PrintQueue.push(job);

    return job;

}

/* ============================================
   Start Print
============================================ */

function start(

    printId

){

    const job =

    get(printId);

    if(!job){

        return null;

    }

    job.status="PRINTING";

    job.startedAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Complete Print
============================================ */

function complete(

    printId

){

    const job =

    get(printId);

    if(!job){

        return null;

    }

    job.status="COMPLETED";

    job.completedAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Cancel Print
============================================ */

function cancel(

    printId

){

    const job=

    get(printId);

    if(!job){

        return null;

    }

    job.status="CANCELLED";

    job.cancelledAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Get Job
============================================ */

function get(

    printId

){

    return PrintQueue.find(

        item=>

        item.printId===printId

    );

}

/* ============================================
   All Jobs
============================================ */

function all(){

    return PrintQueue;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    start,

    complete,

    cancel,

    get,

    all

};
