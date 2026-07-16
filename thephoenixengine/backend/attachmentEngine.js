/*
=========================================================
ThePhoenixEngine
File        : attachmentEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Attachment Engine
=========================================================
*/

"use strict";

/* ============================================
   Attachments
============================================ */

const Attachments = [];

/* ============================================
   Upload
============================================ */

function upload({

    conversationId,

    sender,

    fileName,

    fileType,

    fileSize,

    filePath

}){

    const attachment={

        attachmentId:

        "ATT-"+

        Date.now(),

        conversationId,

        sender,

        fileName,

        fileType,

        fileSize,

        filePath,

        uploadedAt:

        new Date().toISOString(),

        status:"UPLOADED"

    };

    Attachments.push(

        attachment

    );

    return attachment;

}

/* ============================================
   Download
============================================ */

function download(

    attachmentId

){

    const file=

    get(

        attachmentId

    );

    if(!file){

        return null;

    }

    file.status=

    "DOWNLOADED";

    file.downloadedAt=

    new Date().toISOString();

    return file;

}

/* ============================================
   Get
============================================ */

function get(

    attachmentId

){

    return Attachments.find(

        file=>

        file.attachmentId===

        attachmentId

    );

}

/* ============================================
   Conversation Files
============================================ */

function conversation(

    conversationId

){

    return Attachments.filter(

        file=>

        file.conversationId===

        conversationId

    );

}

/* ============================================
   Delete
============================================ */

function remove(

    attachmentId

){

    const index=

    Attachments.findIndex(

        file=>

        file.attachmentId===

        attachmentId

    );

    if(index>=0){

        Attachments.splice(

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

    return Attachments.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    upload,

    download,

    get,

    conversation,

    remove,

    count

};
