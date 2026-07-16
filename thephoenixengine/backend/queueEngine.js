/*
=========================================================
ThePhoenixEngine
File        : queueEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Queue Engine
=========================================================
*/

"use strict";

/* ============================================
   Queue
============================================ */

const Queue = [];

/* ============================================
   Add
============================================ */

function add(batch){

    Queue.push(batch);

    return batch;

}

/* ============================================
   Get All
============================================ */

function getAll(){

    return Queue;

}

/* ============================================
   Get Batch
============================================ */

function get(batchId){

    return Queue.find(

        batch=>

        batch.batchId===batchId

    );

}

/* ============================================
   Update Status
============================================ */

function updateStatus(

    batchId,

    status

){

    const batch=

    get(batchId);

    if(!batch){

        return null;

    }

    batch.status=status;

    batch.updatedAt=

    new Date()

    .toISOString();

    return batch;

}

/* ============================================
   Remove
============================================ */

function remove(batchId){

    const index=

    Queue.findIndex(

        batch=>

        batch.batchId===batchId

    );

    if(index>=0){

        Queue.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Count
============================================ */

function count(){

    return Queue.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    add,

    get,

    getAll,

    updateStatus,

    remove,

    count

};
