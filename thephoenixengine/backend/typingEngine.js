/*
=========================================================
ThePhoenixEngine
File        : typingEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Typing Engine
=========================================================
*/

"use strict";

/* ============================================
   Typing Store
============================================ */

const TypingStatus=[];

/* ============================================
   Start Typing
============================================ */

function start({

    conversationId,

    userId,

    userName,

    role="CUSTOMER"

}){

    stop(

        conversationId,

        userId

    );

    const typing={

        typingId:

        "TYP-"+

        Date.now(),

        conversationId,

        userId,

        userName,

        role,

        status:"TYPING",

        startedAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    TypingStatus.push(

        typing

    );

    return typing;

}

/* ============================================
   Update
============================================ */

function update(

    conversationId,

    userId

){

    const typing=

    TypingStatus.find(

        item=>

        item.conversationId===conversationId

        &&

        item.userId===userId

    );

    if(!typing){

        return null;

    }

    typing.updatedAt=

    new Date().toISOString();

    return typing;

}

/* ============================================
   Stop Typing
============================================ */

function stop(

    conversationId,

    userId

){

    const index=

    TypingStatus.findIndex(

        item=>

        item.conversationId===conversationId

        &&

        item.userId===userId

    );

    if(index>=0){

        TypingStatus.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Conversation Status
============================================ */

function conversation(

    conversationId

){

    return TypingStatus.filter(

        item=>

        item.conversationId===conversationId

    );

}

/* ============================================
   Is Typing
============================================ */

function isTyping(

    conversationId,

    userId

){

    return TypingStatus.some(

        item=>

        item.conversationId===conversationId

        &&

        item.userId===userId

    );

}

/* ============================================
   Export
============================================ */

module.exports={

    start,

    update,

    stop,

    conversation,

    isTyping

};
