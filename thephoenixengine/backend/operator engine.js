/*
=========================================================
ThePhoenixEngine
File        : operatorEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Operator Engine
=========================================================
*/

"use strict";

/* ============================================
   Active Operators
============================================ */

const Operators = [];

/* ============================================
   Login
============================================ */

function login(

    operatorId,

    name

){

    const operator = {

        operatorId,

        name,

        status: "ONLINE",

        loginTime:

        new Date().toISOString(),

        assignedBatch: null,

        completedReports: 0,

        editedReports: 0,

        overrideCount: 0

    };

    Operators.push(operator);

    return operator;

}

/* ============================================
   Logout
============================================ */

function logout(operatorId){

    const operator =

    get(operatorId);

    if(!operator){

        return null;

    }

    operator.status =

    "OFFLINE";

    operator.logoutTime =

    new Date().toISOString();

    return operator;

}

/* ============================================
   Get Operator
============================================ */

function get(operatorId){

    return Operators.find(

        item =>

        item.operatorId === operatorId

    );

}

/* ============================================
   Assign Batch
============================================ */

function assignBatch(

    operatorId,

    batchId

){

    const operator =

    get(operatorId);

    if(!operator){

        return null;

    }

    operator.assignedBatch =

    batchId;

    return operator;

}

/* ============================================
   Complete Report
============================================ */

function reportCompleted(

    operatorId

){

    const operator =

    get(operatorId);

    if(!operator){

        return null;

    }

    operator.completedReports++;

    return operator;

}

/* ============================================
   Edited Report
============================================ */

function reportEdited(

    operatorId

){

    const operator =

    get(operatorId);

    if(!operator){

        return null;

    }

    operator.editedReports++;

    return operator;

}

/* ============================================
   Final Override
============================================ */

function override(

    operatorId

){

    const operator =

    get(operatorId);

    if(!operator){

        return null;

    }

    operator.overrideCount++;

    return operator;

}

/* ============================================
   Get All
============================================ */

function getAll(){

    return Operators;

}

/* ============================================
   Export
============================================ */

module.exports = {

    login,

    logout,

    get,

    getAll,

    assignBatch,

    reportCompleted,

    reportEdited,

    override

};
