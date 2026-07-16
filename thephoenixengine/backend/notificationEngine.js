/*
=========================================================
ThePhoenixEngine
File        : notificationEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Notification Engine
=========================================================
*/

"use strict";

/* ============================================
   Notification Store
============================================ */

const Notifications = [];

/* ============================================
   Create Notification
============================================ */

function create({

    type = "INFO",

    title = "",

    message = "",

    target = "ALL",

    priority = "NORMAL",

    module = "CORE"

}){

    const notification = {

        notificationId:

        "NTF-" +

        Date.now(),

        type,

        title,

        message,

        target,

        priority,

        module,

        status:

        "PENDING",

        createdAt:

        new Date().toISOString()

    };

    Notifications.push(

        notification

    );

    return notification;

}

/* ============================================
   Broadcast
============================================ */

function broadcast(

    title,

    message

){

    return create({

        type:"BROADCAST",

        title,

        message,

        target:"ALL",

        priority:"HIGH"

    });

}

/* ============================================
   Patch Notification
============================================ */

function patch(

    version,

    module

){

    return create({

        type:"PATCH",

        title:

        "New Patch Available",

        message:

        `${module} ${version} available.`,

        priority:"HIGH",

        module

    });

}

/* ============================================
   Emergency
============================================ */

function emergency(message){

    return create({

        type:"EMERGENCY",

        title:

        "Emergency Alert",

        message,

        priority:"CRITICAL"

    });

}

/* ============================================
   Mark Read
============================================ */

function markRead(id){

    const item=

    Notifications.find(

        n=>

        n.notificationId===id

    );

    if(item){

        item.status="READ";

    }

    return item;

}

/* ============================================
   Get All
============================================ */

function getAll(){

    return Notifications;

}

/* ============================================
   Pending
============================================ */

function pending(){

    return Notifications.filter(

        n=>

        n.status==="PENDING"

    );

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    broadcast,

    patch,

    emergency,

    markRead,

    getAll,

    pending

};
