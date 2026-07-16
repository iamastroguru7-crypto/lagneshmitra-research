/*
=========================================================
ThePhoenixEngine
File        : smsEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
SMS Engine
=========================================================
*/

"use strict";

/* ============================================
   SMS Queue
============================================ */

const SMSQueue=[];

/* ============================================
   Create
============================================ */

function create({

    smsId,

    mobile,

    message,

    provider="DEFAULT"

}){

    const sms={

        smsId,

        mobile,

        message,

        provider,

        status:"QUEUED",

        retry:0,

        createdAt:

        new Date().toISOString()

    };

    SMSQueue.push(sms);

    return sms;

}

/* ============================================
   Send
============================================ */

function send(

    smsId

){

    const sms=get(smsId);

    if(!sms){

        return null;

    }

    sms.status="SENT";

    sms.sentAt=

    new Date().toISOString();

    return sms;

}

/* ============================================
   Retry
============================================ */

function retry(

    smsId

){

    const sms=get(smsId);

    if(!sms){

        return null;

    }

    sms.retry++;

    sms.status="RETRY";

    return sms;

}

/* ============================================
   Fail
============================================ */

function fail(

    smsId,

    reason=""

){

    const sms=get(smsId);

    if(!sms){

        return null;

    }

    sms.status="FAILED";

    sms.reason=reason;

    return sms;

}

/* ============================================
   Get
============================================ */

function get(

    smsId

){

    return SMSQueue.find(

        item=>

        item.smsId===smsId

    );

}

/* ============================================
   All
============================================ */

function all(){

    return SMSQueue;

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

    all

};
