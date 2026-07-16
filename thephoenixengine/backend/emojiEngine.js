/*
=========================================================
ThePhoenixEngine
File        : emojiEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Emoji Engine
=========================================================
*/

"use strict";

/* ============================================
   Emoji Store
============================================ */

const EmojiReactions=[];

/* ============================================
   Add Reaction
============================================ */

function add({

    conversationId,

    messageId,

    userId,

    emoji

}){

    const reaction={

        reactionId:

        "EMJ-"+

        Date.now(),

        conversationId,

        messageId,

        userId,

        emoji,

        reactedAt:

        new Date().toISOString()

    };

    EmojiReactions.push(

        reaction

    );

    return reaction;

}

/* ============================================
   Remove Reaction
============================================ */

function remove(

    reactionId

){

    const index=

    EmojiReactions.findIndex(

        item=>

        item.reactionId===

        reactionId

    );

    if(index>=0){

        EmojiReactions.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Message Reactions
============================================ */

function message(

    messageId

){

    return EmojiReactions.filter(

        item=>

        item.messageId===

        messageId

    );

}

/* ============================================
   Conversation Reactions
============================================ */

function conversation(

    conversationId

){

    return EmojiReactions.filter(

        item=>

        item.conversationId===

        conversationId

    );

}

/* ============================================
   Count
============================================ */

function count(

    messageId

){

    return EmojiReactions.filter(

        item=>

        item.messageId===

        messageId

    ).length;

}

/* ============================================
   Export
============================================ */

module.exports={

    add,

    remove,

    message,

    conversation,

    count

};
