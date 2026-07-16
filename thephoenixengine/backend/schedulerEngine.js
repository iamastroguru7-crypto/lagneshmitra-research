/*
=========================================================
ThePhoenixEngine
File        : schedulerEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Scheduler Engine
=========================================================
*/

"use strict";

/* ============================================
   Scheduler Store
============================================ */

const Schedules = [];

/* ============================================
   Create Job
============================================ */

function create({

    scheduleId,

    jobName,

    frequency = "ONCE",

    executeAt = null,

    payload = {}

}){

    const job={

        scheduleId,

        jobName,

        frequency,

        executeAt,

        payload,

        status:"SCHEDULED",

        createdAt:

        new Date().toISOString()

    };

    Schedules.push(job);

    return job;

}

/* ============================================
   Run
============================================ */

function run(

    scheduleId

){

    const job=get(scheduleId);

    if(!job){

        return null;

    }

    job.status="RUNNING";

    job.startedAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Complete
============================================ */

function complete(

    scheduleId

){

    const job=get(scheduleId);

    if(!job){

        return null;

    }

    job.status="COMPLETED";

    job.completedAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Cancel
============================================ */

function cancel(

    scheduleId

){

    const job=get(scheduleId);

    if(!job){

        return null;

    }

    job.status="CANCELLED";

    job.cancelledAt=

    new Date().toISOString();

    return job;

}

/* ============================================
   Get
============================================ */

function get(

    scheduleId

){

    return Schedules.find(

        item=>

        item.scheduleId===scheduleId

    );

}

/* ============================================
   Pending
============================================ */

function pending(){

    return Schedules.filter(

        item=>

        item.status==="SCHEDULED"

    );

}

/* ============================================
   All
============================================ */

function all(){

    return Schedules;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    run,

    complete,

    cancel,

    get,

    pending,

    all

};
