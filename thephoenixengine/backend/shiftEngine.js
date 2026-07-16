/*
=========================================================
ThePhoenixEngine
File        : shiftEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Shift Engine
=========================================================
*/

"use strict";

/* ============================================
   Active Shift
============================================ */

let currentShift = null;

/* ============================================
   Open Shift
============================================ */

function openShift(

    operatorId,

    shift = "DAY"

){

    currentShift = {

        shiftId:

        "SHIFT-" + Date.now(),

        operatorId,

        shift,

        openedAt:

        new Date().toISOString(),

        status:

        "OPEN",

        openingQueue:0,

        closingQueue:0,

        reportsCompleted:0,

        reportsPending:0,

        revenue:0

    };

    return currentShift;

}

/* ============================================
   Get Shift
============================================ */

function getShift(){

    return currentShift;

}

/* ============================================
   Update Revenue
============================================ */

function addRevenue(amount){

    if(!currentShift){

        return null;

    }

    currentShift.revenue += amount;

    return currentShift;

}

/* ============================================
   Update Reports
============================================ */

function updateReports(

    completed = 0,

    pending = 0

){

    if(!currentShift){

        return null;

    }

    currentShift.reportsCompleted += completed;

    currentShift.reportsPending += pending;

    return currentShift;

}

/* ============================================
   Close Shift
============================================ */

function closeShift(){

    if(!currentShift){

        return null;

    }

    currentShift.status =

    "CLOSED";

    currentShift.closedAt =

    new Date().toISOString();

    return currentShift;

}

/* ============================================
   Generate Batch Book
============================================ */

function batchBook(){

    if(!currentShift){

        return null;

    }

    return {

        shiftId:

        currentShift.shiftId,

        operator:

        currentShift.operatorId,

        shift:

        currentShift.shift,

        openedAt:

        currentShift.openedAt,

        closedAt:

        currentShift.closedAt ||

        null,

        reportsCompleted:

        currentShift.reportsCompleted,

        reportsPending:

        currentShift.reportsPending,

        revenue:

        currentShift.revenue,

        status:

        currentShift.status

    };

}

/* ============================================
   Export
============================================ */

module.exports = {

    openShift,

    getShift,

    addRevenue,

    updateReports,

    closeShift,

    batchBook

};
