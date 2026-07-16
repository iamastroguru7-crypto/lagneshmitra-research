/*
=========================================================
ThePhoenixEngine
File        : emailEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Email Engine
=========================================================
*/

"use strict";

/* ============================================
   Email Queue
============================================ */

const EmailQueue = [];

/* ============================================
   Queue Email
============================================ */

function create({

    emailId,

    to,

    subject,

    body,

    attachments=[]

}){

    const email={

        emailId,

        to,

        subject,

        body,

        attachments,

        status:"QUEUED",

        retryCount:0,

        createdAt:

        new Date().toISOString()

    };

    EmailQueue.push(

        email

    );

    return email;

}

/* ============================================
   Send
============================================ */

function send(

    emailId

){

    const email=

    get(

        emailId

    );

    if(!email){

        return null;

    }

    email.status=

    "SENT";

    email.sentAt=

    new Date().toISOString();

    return email;

}

/* ============================================
   Retry
============================================ */

function retry(

    emailId

){

    const email=

    get(

        emailId

    );

    if(!email){

        return null;

    }

    email.retryCount++;

    email.status=

    "RETRYING";

    email.updatedAt=

    new Date().toISOString();

    return email;

}

/* ============================================
   Fail
============================================ */

function fail(

    emailId,

    reason=""

){

    const email=

    get(

        emailId

    );

    if(!email){

        return null;

    }

    email.status=

    "FAILED";

    email.reason=

    reason;

    email.failedAt=

    new Date().toISOString();

    return email;

}

/* ============================================
   Get
============================================ */

function get(

    emailId

){

    return EmailQueue.find(

        item=>

        item.emailId===emailId

    );

}

/* ============================================
   Pending
============================================ */

function pending(){

    return EmailQueue.filter(

        item=>

        item.status==="QUEUED"

    );

}

/* ============================================
   All
============================================ */

function all(){

    return EmailQueue;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    send,

    retry,

    fail,

    get,

    pending,

    all

};
