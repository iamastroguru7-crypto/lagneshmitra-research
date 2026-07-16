/*
=========================================================
ThePhoenixEngine
File        : supportEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Phoenix Support Engine
=========================================================
*/

"use strict";

const ticketEngine = require("./ticketEngine");

const messengerEngine = require("./messengerEngine");

const notificationBridge = require("./notificationBridge");

/* ============================================
   Create Support Session
============================================ */

function createSession({

    customerToken,

    operatorId,

    module="GENERAL",

    subject="Support Request",

    priority="NORMAL"

}){

    const ticket=

    ticketEngine.create({

        customerToken,

        operatorId,

        module,

        subject,

        priority

    });

    const conversation=

    messengerEngine.create({

        conversationId:

        "CHAT-"+Date.now(),

        customerToken,

        operatorId,

        module

    });

    ticketEngine.link(

        ticket.ticketId,

        conversation.conversationId

    );

    notificationBridge.push({

        source:"SUPPORT",

        target:operatorId||

        "AVAILABLE_OPERATOR",

        type:"SUPPORT",

        title:"New Support Request",

        message:

        subject,

        priority

    });

    return{

        ticket,

        conversation

    };

}

/* ============================================
   Send Reply
============================================ */

function reply(

    conversationId,

    sender,

    message

){

    return messengerEngine.send(

        conversationId,

        sender,

        message

    );

}

/* ============================================
   Escalate
============================================ */

function escalate(

    ticketId,

    level="SUPERVISOR"

){

    notificationBridge.push({

        source:"SUPPORT",

        target:level,

        type:"ESCALATION",

        title:

        "Support Escalation",

        message:

        ticketId,

        priority:"HIGH"

    });

    return{

        success:true,

        ticketId,

        level

    };

}

/* ============================================
   Resolve
============================================ */

function resolve(

    ticketId

){

    return ticketEngine.status(

        ticketId,

        "RESOLVED"

    );

}

/* ============================================
   Close
============================================ */

function close(

    ticketId

){

    return ticketEngine.status(

        ticketId,

        "CLOSED"

    );

}

/* ============================================
   Export
============================================ */

module.exports={

    createSession,

    reply,

    escalate,

    resolve,

    close

};
