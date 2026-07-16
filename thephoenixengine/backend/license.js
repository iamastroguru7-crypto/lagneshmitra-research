/*
=========================================================
ThePhoenixEngine
File        : license.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
License Engine
=========================================================
*/

"use strict";

/* ============================================
   License Plans
============================================ */

const PLANS = {

    FREE: {

        name: "Free",

        dailyRequests: 25,

        monthlyRequests: 500,

        maxWords: 3000

    },

    STARTER: {

        name: "Starter",

        dailyRequests: 250,

        monthlyRequests: 5000,

        maxWords: 8000

    },

    PROFESSIONAL: {

        name: "Professional",

        dailyRequests: 1000,

        monthlyRequests: 50000,

        maxWords: 20000

    },

    ENTERPRISE: {

        name: "Enterprise",

        dailyRequests: Infinity,

        monthlyRequests: Infinity,

        maxWords: 100000

    }

};

/* ============================================
   Create License
============================================ */

function createLicense(plan = "FREE") {

    const random =

    Math.random()

    .toString(36)

    .substring(2,10)

    .toUpperCase();

    return `LM-${plan}-${random}`;

}

/* ============================================
   Verify License
============================================ */

function verifyLicense(key){

    if(!key){

        return{

            success:false,

            message:"License key missing."

        };

    }

    return{

        success:true,

        valid:true,

        key,

        plan:"FREE"

    };

}

/* ============================================
   Get Plan
============================================ */

function getPlan(plan="FREE"){

    return PLANS[plan] ||

    PLANS.FREE;

}

/* ============================================
   Daily Limit
============================================ */

function canUse(planData, usedToday){

    return usedToday <

    planData.dailyRequests;

}

/* ============================================
   Future Database Hook
============================================ */

async function loadLicense(key){

    return{

        success:true,

        key,

        plan:"FREE"

    };

}

/* ============================================
   Export
============================================ */

module.exports={

    PLANS,

    createLicense,

    verifyLicense,

    getPlan,

    canUse,

    loadLicense

};
