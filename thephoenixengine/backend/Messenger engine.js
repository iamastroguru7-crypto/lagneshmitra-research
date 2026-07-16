/*
=========================================================
ThePhoenixEngine
File        : messengerEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Messenger Engine
=========================================================
*/

"use strict";

/* ============================================
   Conversations
============================================ */

const Conversations = [];

/* ============================================
   Create Conversation
============================================ */

function create({

    conversationId,

    customerToken,

    operatorId,

    module="GENERAL"

}){

    const conversation={

        conversationId,

        customerToken,

        operatorId,

        module,

        status:"OPEN",

        createdAt:

        new Date().toISOString(),

        messages:[]

    };

    Conversations.push(

        conversation

    );

    return conversation;

}

/* ============================================
   Send Message
============================================ */

function send(

    conversationId,

    sender,

    message

){

    const chat=

    Conversations.find(

        c=>c.conversationId===conversationId

    );

    if(!chat){

        return null;

    }

    chat.messages.push({

        sender,

        message,

        timestamp:

        new Date().toISOString()

    });

    return chat;

}

/* ============================================
   Close Conversation
============================================ */

function close(

    conversationId

){

    const chat=

    Conversations.find(

        c=>c.conversationId===conversationId

    );

    if(!chat){

        return null;

    }

    chat.status="CLOSED";

    chat.closedAt=

    new Date().toISOString();

    return chat;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    send,

    close,

    Conversations

};
