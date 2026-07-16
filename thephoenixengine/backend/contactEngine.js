/*
=========================================================
ThePhoenixEngine
File        : contactEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Contact Engine
=========================================================
*/

"use strict";

/* ============================================
   Contacts
============================================ */

const Contacts = [];

/* ============================================
   Add Contact
============================================ */

function add({

    contactId,

    name,

    type="CUSTOMER",

    status="OFFLINE",

    token="",

    avatar=""

}){

    const contact={

        contactId,

        name,

        type,

        status,

        token,

        avatar,

        favourite:false,

        lastSeen:

        new Date().toISOString()

    };

    Contacts.push(contact);

    return contact;

}

/* ============================================
   Get Contact
============================================ */

function get(contactId){

    return Contacts.find(

        c=>c.contactId===contactId

    );

}

/* ============================================
   Update Status
============================================ */

function updateStatus(

    contactId,

    status

){

    const contact=

    get(contactId);

    if(!contact){

        return null;

    }

    contact.status=status;

    contact.lastSeen=

    new Date().toISOString();

    return contact;

}

/* ============================================
   Favourite
============================================ */

function favourite(

    contactId,

    value=true

){

    const contact=

    get(contactId);

    if(!contact){

        return null;

    }

    contact.favourite=value;

    return contact;

}

/* ============================================
   Recent
============================================ */

function recent(){

    return Contacts.sort(

        (a,b)=>

        new Date(b.lastSeen)-

        new Date(a.lastSeen)

    );

}

/* ============================================
   All Contacts
============================================ */

function all(){

    return Contacts;

}

/* ============================================
   Export
============================================ */

module.exports={

    add,

    get,

    updateStatus,

    favourite,

    recent,

    all

};
