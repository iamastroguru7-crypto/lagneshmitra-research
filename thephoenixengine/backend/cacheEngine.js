/*
=========================================================
ThePhoenixEngine
File        : cacheEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Cache Engine
=========================================================
*/

"use strict";

/* ============================================
   Cache Store
============================================ */

const Cache = new Map();

/* ============================================
   Set
============================================ */

function set({

    key,

    value,

    ttl = 300

}){

    Cache.set(

        key,

        {

            value,

            ttl,

            createdAt:

            Date.now()

        }

    );

    return true;

}

/* ============================================
   Get
============================================ */

function get(

    key

){

    const item=

    Cache.get(key);

    if(!item){

        return null;

    }

    const expired=

    Date.now()-item.createdAt>

    item.ttl*1000;

    if(expired){

        Cache.delete(key);

        return null;

    }

    return item.value;

}

/* ============================================
   Exists
============================================ */

function exists(

    key

){

    return get(key)!==null;

}

/* ============================================
   Remove
============================================ */

function remove(

    key

){

    return Cache.delete(key);

}

/* ============================================
   Clear
============================================ */

function clear(){

    Cache.clear();

    return true;

}

/* ============================================
   Keys
============================================ */

function keys(){

    return Array.from(

        Cache.keys()

    );

}

/* ============================================
   Count
============================================ */

function count(){

    return Cache.size;

}

/* ============================================
   Export
============================================ */

module.exports={

    set,

    get,

    exists,

    remove,

    clear,

    keys,

    count

};
