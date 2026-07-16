/*
=========================================================
ThePhoenixEngine
File        : updateEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Update Engine
=========================================================
*/

"use strict";

const versionManager = require("./versionManager");

/* ============================================
   Update Queue
============================================ */

const Updates = [];

/* ============================================
   Check Update
============================================ */

function check(clientVersion){

    return{

        current:clientVersion,

        latest:versionManager.current(),

        updateAvailable:

        clientVersion!==

        versionManager.current(),

        checkedAt:

        new Date().toISOString()

    };

}

/* ============================================
   Create Update
============================================ */

function create({

    module="CORE",

    version,

    priority="NORMAL",

    mandatory=false,

    sop=""

}){

    const update={

        updateId:

        "UPD-"+

        Date.now(),

        module,

        version,

        priority,

        mandatory,

        sop,

        status:"READY",

        createdAt:

        new Date().toISOString()

    };

    Updates.push(update);

    return update;

}

/* ============================================
   Install
============================================ */

function install(updateId){

    const item=

    Updates.find(

        u=>u.updateId===updateId

    );

    if(!item){

        return null;

    }

    item.status="INSTALLED";

    item.installedAt=

    new Date().toISOString();

    return item;

}

/* ============================================
   Schedule
============================================ */

function schedule(

    updateId,

    date

){

    const item=

    Updates.find(

        u=>u.updateId===updateId

    );

    if(!item){

        return null;

    }

    item.status="SCHEDULED";

    item.schedule=date;

    return item;

}

/* ============================================
   History
============================================ */

function history(){

    return Updates;

}

/* ============================================
   Export
============================================ */

module.exports={

    check,

    create,

    install,

    schedule,

    history

};
