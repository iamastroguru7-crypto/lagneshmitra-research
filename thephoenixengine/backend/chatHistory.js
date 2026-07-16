/*
=========================================================
ThePhoenixEngine
File        : chatHistory.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Chat History Engine
=========================================================
*/

"use strict";

/* ============================================
   History Store
============================================ */

const History = [];

/* ============================================
   Save Chat
============================================ */

function save({

    conversationId,

    sender,

    message,

    messageType="TEXT",

    attachment=null

}){

    const record={

        historyId:

        "HIS-"+

        Date.now(),

        conversationId,

        sender,

        message,

        messageType,

        attachment,

        timestamp:

        new Date().toISOString()

    };

    History.push(record);

    return record;

}

/* ============================================
   Conversation History
============================================ */

function conversation(

    conversationId

){

    return History.filter(

        item=>

        item.conversationId===conversationId

    );

}

/* ============================================
   Search
============================================ */

function search(keyword){

    return History.filter(

        item=>

        item.message

        .toLowerCase()

        .includes(

            keyword

            .toLowerCase()

        )

    );

}

/* ============================================
   Export Chat
============================================ */

function exportChat(

    conversationId

){

    return conversation(

        conversationId

    );

}

/* ============================================
   Delete Conversation
============================================ */

function remove(

    conversationId

){

    for(

        let i=

        History.length-1;

        i>=0;

        i--

    ){

        if(

            History[i]

            .conversationId===

            conversationId

        ){

            History.splice(

                i,

                1

            );

        }

    }

}

/* ============================================
   Count
============================================ */

function count(){

    return History.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    save,

    conversation,

    search,

    exportChat,

    remove,

    count

};
