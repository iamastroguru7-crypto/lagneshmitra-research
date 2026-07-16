/*
=========================================================
ThePhoenixEngine
File        : watermarkEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Watermark Engine
=========================================================
*/

"use strict";

/* ============================================
   Watermark Store
============================================ */

const Watermarks = [];

/* ============================================
   Create
============================================ */

function create({

    watermarkId,

    documentId,

    text,

    position = "CENTER",

    opacity = 25,

    author = "SYSTEM"

}){

    const watermark = {

        watermarkId,

        documentId,

        text,

        position,

        opacity,

        author,

        status:"ACTIVE",

        createdAt:

        new Date().toISOString()

    };

    Watermarks.push(

        watermark

    );

    return watermark;

}

/* ============================================
   Apply
============================================ */

function apply(

    watermarkId

){

    const watermark =

    get(

        watermarkId

    );

    if(!watermark){

        return null;

    }

    watermark.status=

    "APPLIED";

    watermark.appliedAt=

    new Date().toISOString();

    return watermark;

}

/* ============================================
   Remove
============================================ */

function remove(

    watermarkId

){

    const watermark=

    get(

        watermarkId

    );

    if(!watermark){

        return null;

    }

    watermark.status=

    "REMOVED";

    watermark.removedAt=

    new Date().toISOString();

    return watermark;

}

/* ============================================
   Get
============================================ */

function get(

    watermarkId

){

    return Watermarks.find(

        item=>

        item.watermarkId===

        watermarkId

    );

}

/* ============================================
   Document Watermarks
============================================ */

function document(

    documentId

){

    return Watermarks.filter(

        item=>

        item.documentId===

        documentId

    );

}

/* ============================================
   All
============================================ */

function all(){

    return Watermarks;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    apply,

    remove,

    get,

    document,

    all

};
