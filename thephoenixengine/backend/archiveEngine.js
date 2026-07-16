/*
=========================================================
ThePhoenixEngine
File        : archiveEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Archive Engine
=========================================================
*/

"use strict";

/* ============================================
   Archive Store
============================================ */

const Archives = [];

/* ============================================
   Archive Item
============================================ */

function create({

    archiveId,

    referenceId,

    type = "DOCUMENT",

    title,

    data = {},

    archivedBy = "SYSTEM"

}){

    const archive = {

        archiveId,

        referenceId,

        type,

        title,

        data,

        archivedBy,

        status:"ARCHIVED",

        archivedAt:

        new Date().toISOString()

    };

    Archives.push(

        archive

    );

    return archive;

}

/* ============================================
   Restore
============================================ */

function restore(

    archiveId

){

    const archive =

    get(

        archiveId

    );

    if(!archive){

        return null;

    }

    archive.status =

    "RESTORED";

    archive.restoredAt =

    new Date().toISOString();

    return archive;

}

/* ============================================
   Delete
============================================ */

function remove(

    archiveId

){

    const index =

    Archives.findIndex(

        item=>

        item.archiveId===archiveId

    );

    if(index>=0){

        Archives.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Get
============================================ */

function get(

    archiveId

){

    return Archives.find(

        item=>

        item.archiveId===archiveId

    );

}

/* ============================================
   By Type
============================================ */

function byType(

    type

){

    return Archives.filter(

        item=>

        item.type===type

    );

}

/* ============================================
   All
============================================ */

function all(){

    return Archives;

}

/* ============================================
   Count
============================================ */

function count(){

    return Archives.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    restore,

    remove,

    get,

    byType,

    all,

    count

};
