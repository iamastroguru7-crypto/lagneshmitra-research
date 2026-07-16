/*
=========================================================
ThePhoenixEngine
File        : ticketEngine.js
Version     : 1.0.1
Developer   : LagneshMitra
=========================================================
Zeno Ticket Engine
=========================================================
*/

"use strict";

/* ============================================
   Ticket Store
============================================ */

const Tickets = [];

/* ============================================
   Create Ticket
============================================ */

function create({

    customerToken,

    operatorId = null,

    module = "GENERAL",

    subject = "",

    priority = "NORMAL"

}){

    const ticket = {

        ticketId:

        "SUP-" +

        Date.now(),

        customerToken,

        operatorId,

        module,

        subject,

        priority,

        status:"OPEN",

        conversationId:null,

        createdAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    Tickets.push(ticket);

    return ticket;

}

/* ============================================
   Assign Operator
============================================ */

function assign(

    ticketId,

    operatorId

){

    const ticket=

    Tickets.find(

        t=>t.ticketId===ticketId

    );

    if(!ticket){

        return null;

    }

    ticket.operatorId=

    operatorId;

    ticket.updatedAt=

    new Date().toISOString();

    return ticket;

}

/* ============================================
   Update Status
============================================ */

function status(

    ticketId,

    value

){

    const ticket=

    Tickets.find(

        t=>t.ticketId===ticketId

    );

    if(!ticket){

        return null;

    }

    ticket.status=value;

    ticket.updatedAt=

    new Date().toISOString();

    return ticket;

}

/* ============================================
   Link Conversation
============================================ */

function link(

    ticketId,

    conversationId

){

    const ticket=

    Tickets.find(

        t=>t.ticketId===ticketId

    );

    if(!ticket){

        return null;

    }

    ticket.conversationId=

    conversationId;

    return ticket;

}

/* ============================================
   Get Ticket
============================================ */

function get(

    ticketId

){

    return Tickets.find(

        t=>t.ticketId===ticketId

    );

}

/* ============================================
   Get All
============================================ */

function all(){

    return Tickets;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    assign,

    status,

    link,

    get,

    all

};
