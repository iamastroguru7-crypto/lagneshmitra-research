/*
=========================================================
ThePhoenixEngine
File        : commandCenter.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Phoenix Central Command Operations
=========================================================
*/

"use strict";

const notification = require("./notificationEngine");

const analytics = require("./analyticsEngine");

/* ============================================
   Command Center
============================================ */

const CommandCenter = {

    serverStatus: "ONLINE",

    currentVersion: "1.0.0",

    maintenance: false,

    emergency: false

};

/* ============================================
   Server Status
============================================ */

function serverStatus(){

    return{

        status:CommandCenter.serverStatus,

        version:CommandCenter.currentVersion,

        maintenance:CommandCenter.maintenance,

        emergency:CommandCenter.emergency

    };

}

/* ============================================
   Broadcast
============================================ */

function broadcast(

    title,

    message

){

    return notification.broadcast(

        title,

        message

    );

}

/* ============================================
   SOP Push
============================================ */

function pushSOP(

    version,

    sop

){

    return notification.create({

        type:"SOP",

        title:"Standard Operating Procedure",

        message:sop,

        module:version,

        priority:"HIGH"

    });

}

/* ============================================
   Maintenance Mode
============================================ */

function maintenance(enable=true){

    CommandCenter.maintenance=enable;

    return CommandCenter;

}

/* ============================================
   Emergency Stop
============================================ */

function emergency(reason){

    CommandCenter.emergency=true;

    notification.emergency(reason);

    return{

        success:true,

        message:"Emergency Activated"

    };

}

/* ============================================
   Resume
============================================ */

function resume(){

    CommandCenter.emergency=false;

    CommandCenter.maintenance=false;

    return{

        success:true,

        message:"Operations Resumed"

    };

}

/* ============================================
   Dashboard
============================================ */

function dashboard(){

    return{

        server:serverStatus(),

        analytics:

        analytics.summary(),

        generatedAt:

        new Date().toISOString()

    };

}

/* ============================================
   Export
============================================ */

module.exports={

    serverStatus,

    broadcast,

    pushSOP,

    maintenance,

    emergency,

    resume,

    dashboard

};
