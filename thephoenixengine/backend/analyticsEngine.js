/*
=========================================================
ThePhoenixEngine
File        : analyticsEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Analytics Engine
=========================================================
*/

"use strict";

/* ============================================
   Dashboard
============================================ */

const Dashboard = {

    totalBatches:0,

    totalReports:0,

    completedReports:0,

    pendingReports:0,

    rejectedReports:0,

    editedReports:0,

    totalRevenue:0,

    activeOperators:0

};

/* ============================================
   Batch
============================================ */

function batch(){

    Dashboard.totalBatches++;

}

/* ============================================
   Report
============================================ */

function report(status="PENDING"){

    Dashboard.totalReports++;

    switch(status){

        case "COMPLETED":

            Dashboard.completedReports++;

            break;

        case "PENDING":

            Dashboard.pendingReports++;

            break;

        case "REJECTED":

            Dashboard.rejectedReports++;

            break;

    }

}

/* ============================================
   Edited
============================================ */

function edited(){

    Dashboard.editedReports++;

}

/* ============================================
   Revenue
============================================ */

function revenue(amount){

    Dashboard.totalRevenue+=amount;

}

/* ============================================
   Operators
============================================ */

function operators(count){

    Dashboard.activeOperators=count;

}

/* ============================================
   KPI
============================================ */

function kpi(){

    return{

        completionRate:

        Dashboard.totalReports===0

        ?0

        :

        (

            Dashboard.completedReports/

            Dashboard.totalReports

        )*100,

        rejectionRate:

        Dashboard.totalReports===0

        ?0

        :

        (

            Dashboard.rejectedReports/

            Dashboard.totalReports

        )*100

    };

}

/* ============================================
   Summary
============================================ */

function summary(){

    return{

        ...Dashboard,

        kpi:kpi()

    };

}

/* ============================================
   Reset
============================================ */

function reset(){

    Object.keys(Dashboard)

    .forEach(key=>{

        Dashboard[key]=0;

    });

}

/* ============================================
   Export
============================================ */

module.exports={

    batch,

    report,

    edited,

    revenue,

    operators,

    kpi,

    summary,

    reset

};
