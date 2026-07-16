/*
=========================================================
ThePhoenixEngine
File        : billing.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Billing Engine
=========================================================
*/

"use strict";

/* ============================================
   Plan Pricing
============================================ */

const PRICING = {

    FREE: {

        name: "Free",

        price: 0,

        currency: "INR"

    },

    STARTER: {

        name: "Starter",

        price: 299,

        currency: "INR"

    },

    PROFESSIONAL: {

        name: "Professional",

        price: 999,

        currency: "INR"

    },

    ENTERPRISE: {

        name: "Enterprise",

        price: 0,

        currency: "INR",

        custom: true

    }

};

/* ============================================
   Get Plan
============================================ */

function getPlan(plan = "FREE") {

    return PRICING[plan] ||

    PRICING.FREE;

}

/* ============================================
   Create Invoice
============================================ */

function createInvoice(userId, plan) {

    const selectedPlan = getPlan(plan);

    return {

        invoiceId:

        "INV-" +

        Date.now(),

        userId,

        plan:

        selectedPlan.name,

        amount:

        selectedPlan.price,

        currency:

        selectedPlan.currency,

        status:

        "Pending",

        createdAt:

        new Date().toISOString()

    };

}

/* ============================================
   Payment Status
============================================ */

function paymentStatus(status = "Pending") {

    return {

        success: true,

        status

    };

}

/* ============================================
   Credits
============================================ */

function credits(plan) {

    switch (plan) {

        case "FREE":

            return 25;

        case "STARTER":

            return 250;

        case "PROFESSIONAL":

            return 1000;

        case "ENTERPRISE":

            return Infinity;

        default:

            return 25;

    }

}

/* ============================================
   Future Razorpay
============================================ */

async function createRazorpayOrder() {

    return {

        success: true,

        message:

        "Razorpay integration coming soon."

    };

}

/* ============================================
   Future Stripe
============================================ */

async function createStripeSession() {

    return {

        success: true,

        message:

        "Stripe integration coming soon."

    };

}

/* ============================================
   Future Coupons
============================================ */

function applyCoupon(code) {

    return {

        success: false,

        message:

        "Coupon system coming soon.",

        code

    };

}

/* ============================================
   Export
============================================ */

module.exports = {

    PRICING,

    getPlan,

    createInvoice,

    paymentStatus,

    credits,

    createRazorpayOrder,

    createStripeSession,

    applyCoupon

};
