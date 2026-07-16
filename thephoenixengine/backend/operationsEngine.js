/*
=========================================================
ThePhoenixEngine
File        : operationsEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Operations Engine
=========================================================
*/

"use strict";

const queue = require("./queueEngine");

/* ============================================
   Create Operation
============================================ */

function create(batch){

    batch.status = "WAITING";

    batch.createdAt =

    new Date().toISOString();

    queue.add(batch);

    return batch;

}

/* ============================================
   Assign Operator
============================================ */

function assign(

    batchId,

    operatorId

){

    const batch =

    queue.get(batchId);

    if(!batch){

        return null;

    }

    batch.operatorId =

    operatorId;

    batch.status =

    "ASSIGNED";

    batch.assignedAt =

    new Date().toISOString();

    return batch;

}

/* ============================================
   Start Batch
============================================ */

function start(batchId){

    return queue.updateStatus(

        batchId,

        "PROCESSING"

    );

}

/* ============================================
   Pause Batch
============================================ */

function pause(batchId){

    return queue.updateStatus(

        batchId,

        "PAUSED"

    );

}

/* ============================================
   Resume Batch
============================================ */

function resume(batchId){

    return queue.updateStatus(

        batchId,

        "PROCESSING"

    );

}

/* ============================================
   Complete Batch
============================================ */

function complete(batchId){

    const batch =

    queue.updateStatus(

        batchId,

        "COMPLETED"

    );

    if(batch){

        batch.completedAt =

        new Date().toISOString();

    }

    return batch;

}

/* ============================================
   Kill Batch
============================================ */

function kill(batchId){

    return queue.updateStatus(

        batchId,

        "KILLED"

    );

}

/* ============================================
   Export
============================================ */

module.exports = {

    create,

    assign,

    start,

    pause,

    resume,

    complete,

    kill

};
