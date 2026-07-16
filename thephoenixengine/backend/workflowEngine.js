/*
=========================================================
ThePhoenixEngine
File        : workflowEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Workflow Engine
=========================================================
*/

"use strict";

/* ============================================
   Workflow States
============================================ */

const STATES = {

    RECEIVED: "RECEIVED",

    QUEUED: "QUEUED",

    ASSIGNED: "ASSIGNED",

    PROCESSING: "PROCESSING",

    REVIEW: "REVIEW",

    EDITING: "EDITING",

    APPROVED: "APPROVED",

    PDF_READY: "PDF_READY",

    DISPATCHED: "DISPATCHED",

    ARCHIVED: "ARCHIVED",

    REJECTED: "REJECTED",

    PAUSED: "PAUSED",

    KILLED: "KILLED"

};

/* ============================================
   Valid Transitions
============================================ */

const FLOW = {

    RECEIVED:["QUEUED"],

    QUEUED:["ASSIGNED","KILLED"],

    ASSIGNED:["PROCESSING","PAUSED"],

    PROCESSING:[

        "REVIEW",

        "PAUSED",

        "KILLED"

    ],

    REVIEW:[

        "EDITING",

        "APPROVED",

        "REJECTED"

    ],

    EDITING:[

        "REVIEW",

        "APPROVED"

    ],

    APPROVED:[

        "PDF_READY"

    ],

    PDF_READY:[

        "DISPATCHED"

    ],

    DISPATCHED:[

        "ARCHIVED"

    ],

    ARCHIVED:[],

    REJECTED:[

        "EDITING"

    ],

    PAUSED:[

        "PROCESSING",

        "KILLED"

    ],

    KILLED:[]

};

/* ============================================
   Can Move
============================================ */

function canMove(

    current,

    next

){

    return (

        FLOW[current] ||

        []

    ).includes(next);

}

/* ============================================
   Change State
============================================ */

function move(

    object,

    next

){

    if(

        !canMove(

            object.state,

            next

        )

    ){

        return {

            success:false,

            message:

            "Invalid Workflow."

        };

    }

    object.state=next;

    object.updatedAt=

    new Date()

    .toISOString();

    return {

        success:true,

        object

    };

}

/* ============================================
   Workflow History
============================================ */

function history(

    object,

    next

){

    if(

        !object.history

    ){

        object.history=[];

    }

    object.history.push({

        state:next,

        time:

        new Date()

        .toISOString()

    });

}

/* ============================================
   Export
============================================ */

module.exports={

    STATES,

    FLOW,

    canMove,

    move,

    history

};
