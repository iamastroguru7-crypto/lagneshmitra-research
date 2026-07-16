/*
=========================================================
ThePhoenixEngine
File        : wordEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Word Engine
=========================================================
*/

"use strict";

/* ============================================
   Word Documents
============================================ */

const WordDocuments = [];

/* ============================================
   Create
============================================ */

function create({

    wordId,

    title,

    content="",

    author="SYSTEM"

}){

    const document={

        wordId,

        title,

        content,

        author,

        format:"DOCX",

        version:"1.0.0",

        status:"READY",

        createdAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    WordDocuments.push(document);

    return document;

}

/* ============================================
   Get
============================================ */

function get(

    wordId

){

    return WordDocuments.find(

        item=>

        item.wordId===wordId

    );

}

/* ============================================
   Update
============================================ */

function update(

    wordId,

    content

){

    const document=

    get(wordId);

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
   Export
============================================ */

function exportDocx(

    wordId

){

    const document=

    get(wordId);

    if(!document){

        return null;

    }

    document.status=

    "EXPORTED";

    document.exportedAt=

    new Date().toISOString();

    return document;

}

/* ============================================
   Delete
============================================ */

function remove(

    wordId

){

    const index=

    WordDocuments.findIndex(

        item=>

        item.wordId===wordId

    );

    if(index>=0){

        WordDocuments.splice(

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

    return WordDocuments;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    get,

    update,

    exportDocx,

    remove,

    all

};
