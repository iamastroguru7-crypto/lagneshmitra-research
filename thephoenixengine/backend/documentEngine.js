/*
=========================================================
ThePhoenixEngine
File        : documentEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Document Engine
=========================================================
*/

"use strict";

/* ============================================
   Documents
============================================ */

const Documents = [];

/* ============================================
   Create
============================================ */

function create({

    documentId,

    title,

    type = "REPORT",

    template = "",

    content = "",

    author = "SYSTEM"

}){

    const document = {

        documentId,

        title,

        type,

        template,

        content,

        author,

        version:"1.0.0",

        status:"DRAFT",

        createdAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    Documents.push(document);

    return document;

}

/* ============================================
   Get
============================================ */

function get(documentId){

    return Documents.find(

        doc=>

        doc.documentId===documentId

    );

}

/* ============================================
   Update
============================================ */

function update(

    documentId,

    content

){

    const document=

    get(documentId);

    if(!document){

        return null;

    }

    document.content=

    content;

    document.updatedAt=

    new Date().toISOString();

    return document;

}

/* ============================================
   Status
============================================ */

function status(

    documentId,

    value

){

    const document=

    get(documentId);

    if(!document){

        return null;

    }

    document.status=

    value;

    document.updatedAt=

    new Date().toISOString();

    return document;

}

/* ============================================
   Delete
============================================ */

function remove(

    documentId

){

    const index=

    Documents.findIndex(

        doc=>

        doc.documentId===documentId

    );

    if(index>=0){

        Documents.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   All
============================================ */

function all(){

    return Documents;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    get,

    update,

    status,

    remove,

    all

};
