/*
=========================================================
ThePhoenixEngine
File        : dispatchEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Dispatch Engine
=========================================================
*/

"use strict";

/* ============================================
   Dispatch Queue
============================================ */

const DispatchQueue = [];

/* ============================================
   Create Dispatch
============================================ */

function create({

    dispatchId,

    referenceId,

    customerToken,

    channel="EMAIL",

    fileType="PDF"

}){

    const dispatch={

        dispatchId,

        referenceId,

        customerToken,

        channel,

        fileType,

        status:"PENDING",

        createdAt:

        new Date().toISOString()

    };

    DispatchQueue.push(

        dispatch

    );

    return dispatch;

}

/* ============================================
   Process
============================================ */

function process(

    dispatchId

){

    const item=

    get(dispatchId);

    if(!item){

        return null;

    }

    item.status=

    "PROCESSING";

    item.processingAt=

    new Date().toISOString();

    return item;

}

/* ============================================
   Complete
============================================ */

function complete(

    dispatchId

){

    const item=

    get(dispatchId);

    if(!item){

        return null;

    }

    item.status=

    "COMPLETED";

    item.completedAt=

    new Date().toISOString();

    return item;

}

/* ============================================
   Fail
============================================ */

function fail(

    dispatchId,

    reason=""

){

    const item=

    get(dispatchId);

    if(!item){

        return null;

    }

    item.status=

    "FAILED";

    item.reason=

    reason;

    item.failedAt=

    new Date().toISOString();

    return item;

}

/* ============================================
   Get
============================================ */

function get(

    dispatchId

){

    return DispatchQueue.find(

        item=>

        item.dispatchId===dispatchId

    );

}

/* ============================================
   Pending
============================================ */

function pending(){

    return DispatchQueue.filter(

        item=>

        item.status==="PENDING"

    );

}

/* ============================================
   All
============================================ */

function all(){

    return DispatchQueue;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    process,

    complete,

    fail,

    get,

    pending,

    all

};
