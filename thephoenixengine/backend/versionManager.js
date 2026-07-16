/*
=========================================================
ThePhoenixEngine
File        : versionManager.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Version Manager
=========================================================
*/

"use strict";

/* ============================================
   Current Version
============================================ */

const Version = {

    major: 1,

    minor: 0,

    patch: 0,

    build: 1,

    codename: "Foundation Freeze",

    releaseDate:

    new Date().toISOString(),

    minimumClient:

    "1.0.0"

};

/* ============================================
   Release History
============================================ */

const Releases = [];

/* ============================================
   Current Version
============================================ */

function current(){

    return `${Version.major}.${Version.minor}.${Version.patch}`;

}

/* ============================================
   Build Number
============================================ */

function build(){

    return Version.build;

}

/* ============================================
   Create Release
============================================ */

function release(notes=[]){

    const item={

        version:current(),

        build:Version.build,

        codename:Version.codename,

        releaseDate:

        new Date().toISOString(),

        notes

    };

    Releases.push(item);

    return item;

}

/* ============================================
   Patch Update
============================================ */

function patch(){

    Version.patch++;

    Version.build++;

}

/* ============================================
   Minor Update
============================================ */

function minor(){

    Version.minor++;

    Version.patch=0;

    Version.build++;

}

/* ============================================
   Major Update
============================================ */

function major(){

    Version.major++;

    Version.minor=0;

    Version.patch=0;

    Version.build++;

}

/* ============================================
   Compatibility
============================================ */

function compatible(clientVersion){

    return clientVersion>=

    Version.minimumClient;

}

/* ============================================
   History
============================================ */

function history(){

    return Releases;

}

/* ============================================
   Export
============================================ */

module.exports={

    Version,

    current,

    build,

    release,

    patch,

    minor,

    major,

    compatible,

    history

};
