/*
=========================================================
ThePhoenixEngine
File        : voiceEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Voice Engine
=========================================================
*/

"use strict";

/* ============================================
   Voice Store
============================================ */

const VoiceMessages=[];

/* ============================================
   Upload Voice
============================================ */

function upload({

    conversationId,

    sender,

    filename,

    duration=0,

    size=0,

    path=""

}){

    const voice={

        voiceId:

        "VOC-"+

        Date.now(),

        conversationId,

        sender,

        filename,

        duration,

        size,

        path,

        waveform:null,

        status:"UPLOADED",

        uploadedAt:

        new Date().toISOString()

    };

    VoiceMessages.push(

        voice

    );

    return voice;

}

/* ============================================
   Play
============================================ */

function play(

    voiceId

){

    const voice=

    get(

        voiceId

    );

    if(!voice){

        return null;

    }

    voice.lastPlayed=

    new Date().toISOString();

    return voice;

}

/* ============================================
   Download
============================================ */

function download(

    voiceId

){

    const voice=

    get(

        voiceId

    );

    if(!voice){

        return null;

    }

    voice.downloadedAt=

    new Date().toISOString();

    return voice;

}

/* ============================================
   Get
============================================ */

function get(

    voiceId

){

    return VoiceMessages.find(

        item=>

        item.voiceId===

        voiceId

    );

}

/* ============================================
   Conversation Voices
============================================ */

function conversation(

    conversationId

){

    return VoiceMessages.filter(

        item=>

        item.conversationId===

        conversationId

    );

}

/* ============================================
   Delete
============================================ */

function remove(

    voiceId

){

    const index=

    VoiceMessages.findIndex(

        item=>

        item.voiceId===

        voiceId

    );

    if(index>=0){

        VoiceMessages.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Export
============================================ */

module.exports={

    upload,

    play,

    download,

    get,

    conversation,

    remove

};
