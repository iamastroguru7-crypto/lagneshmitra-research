/*
=========================================================
ThePhoenixEngine
File        : notificationBridge.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Phoenix Notification Bridge
=========================================================
*/

"use strict";

const notificationEngine = require("./notificationEngine");

/* ============================================
   Bridge Queue
============================================ */

const BridgeQueue = [];

/* ============================================
   Push
============================================ */

function push({

    source="SYSTEM",

    target="ALL",

    type="INFO",

    title="",

    message="",

    priority="NORMAL",

    payload={}

}){

    const event={

        bridgeId:

        "BRG-"+

        Date.now(),

        source,

        target,

        type,

        title,

        message,

        priority,

        payload,

        status:"QUEUED",

        createdAt:

        new Date().toISOString()

    };

    BridgeQueue.push(event);

    notificationEngine.create({

        type,

        title,

        message,

        target,

        priority,

        module:source

    });

    return event;

}

/* ============================================
   Dispatch
============================================ */

function dispatch(

    bridgeId

){

    const event=

    BridgeQueue.find(

        item=>

        item.bridgeId===bridgeId

    );

    if(!event){

        return null;

    }

    event.status="DISPATCHED";

    event.dispatchedAt=

    new Date().toISOString();

    return event;

}

/* ============================================
   Fail
============================================ */

function fail(

    bridgeId,

    reason=""

){

    const event=

    BridgeQueue.find(

        item=>

        item.bridgeId===bridgeId

    );

    if(!event){

        return null;

    }

    event.status="FAILED";

    event.reason=reason;

    event.failedAt=

    new Date().toISOString();

    return event;

}

/* ============================================
   Retry
============================================ */

function retry(

    bridgeId

){

    const event=

    BridgeQueue.find(

        item=>

        item.bridgeId===bridgeId

    );

    if(!event){

        return null;

    }

    event.status="QUEUED";

    event.reason=null;

    event.retriedAt=

    new Date().toISOString();

    return event;

}

/* ============================================
   Pending
============================================ */

function pending(){

    return BridgeQueue.filter(

        item=>

        item.status==="QUEUED"

    );

}

/* ============================================
   History
============================================ */

function history(){

    return BridgeQueue;

}

/* ============================================
   Export
============================================ */

module.exports={

    push,

    dispatch,

    fail,

    retry,

    pending,

    history

};
