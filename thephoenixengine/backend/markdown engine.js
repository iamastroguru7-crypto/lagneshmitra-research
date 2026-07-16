/*
=========================================================
ThePhoenixEngine
File        : markdownEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Markdown Engine
=========================================================
*/

"use strict";

/* ============================================
   Markdown Store
============================================ */

const MarkdownDocuments = [];

/* ============================================
   Create
============================================ */

function create({

    markdownId,

    title,

    content = "",

    author = "SYSTEM"

}){

    const document = {

        markdownId,

        title,

        content,

        author,

        format:"MARKDOWN",

        version:"1.0.0",

        status:"READY",

        createdAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    MarkdownDocuments.push(document);

    return document;

}

/* ============================================
   Get
============================================ */

function get(

    markdownId

){

    return MarkdownDocuments.find(

        item=>

        item.markdownId===markdownId

    );

}

/* ============================================
   Update
============================================ */

function update(

    markdownId,

    content

){

    const document=

    get(markdownId);

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
   Export Markdown
============================================ */

function exportMarkdown(

    markdownId

){

    const document=

    get(markdownId);

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

    markdownId

){

    const index=

    MarkdownDocuments.findIndex(

        item=>

        item.markdownId===markdownId

    );

    if(index>=0){

        MarkdownDocuments.splice(

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

    return MarkdownDocuments;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    get,

    update,

    exportMarkdown,

    remove,

    all

};
