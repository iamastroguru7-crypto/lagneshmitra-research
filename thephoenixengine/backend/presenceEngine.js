/*
=========================================================
ThePhoenixEngine
File        : presenceEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Presence Engine
=========================================================
*/

"use strict";

/* ============================================
   Presence Store
============================================ */

const Presence = [];

/* ============================================
   Login
============================================ */

function login(

    userId,

    name

){

    const user={

        userId,

        name,

        status:"ONLINE",

        activity:"AVAILABLE",

        typing:false,

        lastSeen:

        new Date().toISOString()

    };

    Presence.push(user);

    return user;

}

/* ============================================
   Logout
============================================ */

function logout(

    userId

){

    const user=

    get(userId);

    if(!user){

        return null;

    }

    user.status="OFFLINE";

    user.activity="OFFLINE";

    user.typing=false;

    user.lastSeen=

    new Date().toISOString();

    return user;

}

/* ============================================
   Get User
============================================ */

function get(

    userId

){

    return Presence.find(

        u=>u.userId===userId

    );

}

/* ============================================
   Update Status
============================================ */

function status(

    userId,

    value

){

    const user=

    get(userId);

    if(!user){

        return null;

    }

    user.status=value;

    user.lastSeen=

    new Date().toISOString();

    return user;

}

/* ============================================
   Update Activity
============================================ */

function activity(

    userId,

    value

){

    const user=

    get(userId);

    if(!user){

        return null;

    }

    user.activity=value;

    return user;

}

/* ============================================
   Typing
============================================ */

function typing(

    userId,

    value=true

){

    const user=

    get(userId);

    if(!user){

        return null;

    }

    user.typing=value;

    return user;

}

/* ============================================
   Online Users
============================================ */

function online(){

    return Presence.filter(

        u=>u.status==="ONLINE"

    );

}

/* ============================================
   All
============================================ */

function all(){

    return Presence;

}

/* ============================================
   Export
============================================ */

module.exports={

    login,

    logout,

    get,

    status,

    activity,

    typing,

    online,

    all

};
