/*
=========================================================
ThePhoenixEngine
File        : storageEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Storage Engine
=========================================================
*/

"use strict";

/* ============================================
   Storage
============================================ */

const Storage=[];

/* ============================================
   Save
============================================ */

function save({

    storageId,

    category="GENERAL",

    fileName,

    filePath,

    fileSize=0,

    uploadedBy="SYSTEM"

}){

    const file={

        storageId,

        category,

        fileName,

        filePath,

        fileSize,

        uploadedBy,

        status:"STORED",

        createdAt:

        new Date().toISOString()

    };

    Storage.push(file);

    return file;

}

/* ============================================
   Get
============================================ */

function get(

    storageId

){

    return Storage.find(

        item=>

        item.storageId===storageId

    );

}

/* ============================================
   Update
============================================ */

function update(

    storageId,

    filePath

){

    const file=get(storageId);

    if(!file){

        return null;

    }

    file.filePath=filePath;

    file.updatedAt=

    new Date().toISOString();

    return file;

}

/* ============================================
   Delete
============================================ */

function remove(

    storageId

){

    const index=

    Storage.findIndex(

        item=>

        item.storageId===storageId

    );

    if(index>=0){

        Storage.splice(index,1);

        return true;

    }

    return false;

}

/* ============================================
   All
============================================ */

function all(){

    return Storage;

}

/* ============================================
   Count
============================================ */

function count(){

    return Storage.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    save,

    get,

    update,

    remove,

    all,

    count

};
