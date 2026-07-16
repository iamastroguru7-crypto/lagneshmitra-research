/*
=========================================================
ThePhoenixEngine
File        : websocketEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Phoenix WebSocket Engine
=========================================================
*/

"use strict";

/* ============================================
   Active Connections
============================================ */

const Connections = [];

/* ============================================
   Connect
============================================ */

function connect({

    socketId,

    userId,

    role="CUSTOMER"

}){

    const connection={

        socketId,

        userId,

        role,

        connectedAt:

        new Date().toISOString(),

        status:"CONNECTED"

    };

    Connections.push(

        connection

    );

    return connection;

}

/* ============================================
   Disconnect
============================================ */

function disconnect(

    socketId

){

    const index=

    Connections.findIndex(

        item=>

        item.socketId===socketId

    );

    if(index>=0){

        Connections.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   Send
============================================ */

function send({

    socketId,

    event,

    payload

}){

    const client=

    Connections.find(

        item=>

        item.socketId===socketId

    );

    if(!client){

        return null;

    }

    return{

        success:true,

        socketId,

        event,

        payload,

        timestamp:

        new Date().toISOString()

    };

}

/* ============================================
   Broadcast
============================================ */

function broadcast({

    event,

    payload

}){

    return Connections.map(

        client=>({

            socketId:

            client.socketId,

            event,

            payload

        })

    );

}

/* ============================================
   User Connection
============================================ */

function getUser(

    userId

){

    return Connections.find(

        item=>

        item.userId===userId

    );

}

/* ============================================
   Online Count
============================================ */

function online(){

    return Connections.length;

}

/* ============================================
   Export
============================================ */

module.exports={

    connect,

    disconnect,

    send,

    broadcast,

    getUser,

    online

};
