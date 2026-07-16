/*
=========================================================
ThePhoenixEngine
File        : backupEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Backup Engine
=========================================================
*/

"use strict";

/* ============================================
   Backup Store
============================================ */

const Backups=[];

/* ============================================
   Create Backup
============================================ */

function create({

    backupId,

    module="SYSTEM",

    source="",

    destination="",

    createdBy="SYSTEM"

}){

    const backup={

        backupId,

        module,

        source,

        destination,

        createdBy,

        status:"CREATED",

        size:0,

        createdAt:

        new Date().toISOString()

    };

    Backups.push(backup);

    return backup;

}

/* ============================================
   Start
============================================ */

function start(

    backupId

){

    const backup=get(

        backupId

    );

    if(!backup){

        return null;

    }

    backup.status=

    "RUNNING";

    backup.startedAt=

    new Date().toISOString();

    return backup;

}

/* ============================================
   Complete
============================================ */

function complete(

    backupId,

    size=0

){

    const backup=get(

        backupId

    );

    if(!backup){

        return null;

    }

    backup.status=

    "COMPLETED";

    backup.size=size;

    backup.completedAt=

    new Date().toISOString();

    return backup;

}

/* ============================================
   Restore
============================================ */

function restore(

    backupId

){

    const backup=get(

        backupId

    );

    if(!backup){

        return null;

    }

    backup.status=

    "RESTORED";

    backup.restoredAt=

    new Date().toISOString();

    return backup;

}

/* ============================================
   Fail
============================================ */

function fail(

    backupId,

    reason=""

){

    const backup=get(

        backupId

    );

    if(!backup){

        return null;

    }

    backup.status=

    "FAILED";

    backup.reason=

    reason;

    backup.failedAt=

    new Date().toISOString();

    return backup;

}

/* ============================================
   Get
============================================ */

function get(

    backupId

){

    return Backups.find(

        item=>

        item.backupId===backupId

    );

}

/* ============================================
   All
============================================ */

function all(){

    return Backups;

}

/* ============================================
   Count
============================================ */

function count(){

    return Backups.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    start,

    complete,

    restore,

    fail,

    get,

    all,

    count

};
