/*
=========================================================
ThePhoenixEngine
File        : patchManager.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Patch Manager
=========================================================
*/

"use strict";

/* ============================================
   Patch Store
============================================ */

const Patches = [];

/* ============================================
   Create Patch
============================================ */

function create({

    version,

    module = "CORE",

    filename = "",

    checksum = "",

    priority = "NORMAL",

    mandatory = false,

    sop = "",

    releaseNotes = ""

}){

    const patch = {

        patchId:

        "PAT-" +

        Date.now(),

        version,

        module,

        filename,

        checksum,

        priority,

        mandatory,

        sop,

        releaseNotes,

        status:"READY",

        createdAt:

        new Date().toISOString()

    };

    Patches.push(patch);

    return patch;

}

/* ============================================
   Verify Patch
============================================ */

function verify(

    patchId,

    checksum

){

    const patch =

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return false;

    }

    return patch.checksum===checksum;

}

/* ============================================
   Download Patch
============================================ */

function download(

    patchId

){

    const patch=

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return null;

    }

    patch.status="DOWNLOADED";

    patch.downloadedAt=

    new Date().toISOString();

    return patch;

}

/* ============================================
   Rollback
============================================ */

function rollback(

    patchId

){

    const patch=

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return null;

    }

    patch.status="ROLLED_BACK";

    patch.rollbackAt=

    new Date().toISOString();

    return patch;

}

/* ============================================
   Approve Patch
============================================ */

function approve(

    patchId

){

    const patch=

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return null;

    }

    patch.status="APPROVED";

    patch.approvedAt=

    new Date().toISOString();

    return patch;

}

/* ============================================
   Release Patch
============================================ */

function release(

    patchId

){

    const patch=

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return null;

    }

    patch.status="RELEASED";

    patch.releasedAt=

    new Date().toISOString();

    return patch;

}

/* ============================================
   Franchise Distribution
============================================ */

function distribute(

    patchId,

    franchiseList=[]

){

    const patch=

    Patches.find(

        p=>p.patchId===patchId

    );

    if(!patch){

        return null;

    }

    patch.distribution={

        total:

        franchiseList.length,

        targets:

        franchiseList,

        distributedAt:

        new Date().toISOString()

    };

    return patch;

}

/* ============================================
   History
============================================ */

function history(){

    return Patches;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    verify,

    download,

    rollback,

    approve,

    release,

    distribute,

    history

};
