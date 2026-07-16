/*
=========================================================
ThePhoenixEngine
File        : auth.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Authentication Engine
=========================================================
*/

"use strict";

/* ============================================
   Dependencies
============================================ */

const jwt = require("jsonwebtoken");

/* ============================================
   Create Token
============================================ */

function createToken(payload = {}) {

    return jwt.sign(

        payload,

        process.env.JWT_SECRET,

        {

            expiresIn: "7d"

        }

    );

}

/* ============================================
   Verify Token
============================================ */

function verifyToken(token) {

    try {

        return jwt.verify(

            token,

            process.env.JWT_SECRET

        );

    }

    catch (error) {

        return null;

    }

}

/* ============================================
   Authentication Middleware
============================================ */

function authenticate(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({

            success: false,

            error: "Authorization header missing."

        });

    }

    const token = authHeader.replace(

        "Bearer ",

        ""

    );

    const user = verifyToken(token);

    if (!user) {

        return res.status(401).json({

            success: false,

            error: "Invalid or expired token."

        });

    }

    req.user = user;

    next();

}

/* ============================================
   Generate Guest Session
============================================ */

function guestSession() {

    return createToken({

        id: "guest",

        role: "guest",

        plan: "free"

    });

}

/* ============================================
   Generate Enterprise Session
============================================ */

function enterpriseSession(user) {

    return createToken({

        id: user.id,

        email: user.email,

        role: "enterprise",

        plan: "enterprise"

    });

}

/* ============================================
   Future Login
============================================ */

async function login(email, password) {

    return {

        success: true,

        message: "Login module coming soon.",

        email

    };

}

/* ============================================
   Future Logout
============================================ */

async function logout() {

    return {

        success: true

    };

}

/* ============================================
   Export
============================================ */

module.exports = {

    createToken,

    verifyToken,

    authenticate,

    guestSession,

    enterpriseSession,

    login,

    logout

};
