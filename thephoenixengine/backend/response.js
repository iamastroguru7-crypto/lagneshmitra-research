/*
=========================================================
ThePhoenixEngine
File        : response.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Response Manager
=========================================================
*/

"use strict";

/* ============================================
   Success
============================================ */

function success(

    res,

    data = {},

    message = "Success"

){

    return res.status(200).json({

        success: true,

        message,

        timestamp:

        new Date().toISOString(),

        data

    });

}

/* ============================================
   Created
============================================ */

function created(

    res,

    data = {},

    message = "Created"

){

    return res.status(201).json({

        success: true,

        message,

        timestamp:

        new Date().toISOString(),

        data

    });

}

/* ============================================
   Bad Request
============================================ */

function badRequest(

    res,

    message = "Bad Request"

){

    return res.status(400).json({

        success: false,

        message,

        timestamp:

        new Date().toISOString()

    });

}

/* ============================================
   Unauthorized
============================================ */

function unauthorized(

    res,

    message = "Unauthorized"

){

    return res.status(401).json({

        success: false,

        message,

        timestamp:

        new Date().toISOString()

    });

}

/* ============================================
   Forbidden
============================================ */

function forbidden(

    res,

    message = "Forbidden"

){

    return res.status(403).json({

        success: false,

        message,

        timestamp:

        new Date().toISOString()

    });

}

/* ============================================
   Not Found
============================================ */

function notFound(

    res,

    message = "Not Found"

){

    return res.status(404).json({

        success: false,

        message,

        timestamp:

        new Date().toISOString()

    });

}

/* ============================================
   Server Error
============================================ */

function serverError(

    res,

    error = "Internal Server Error"

){

    return res.status(500).json({

        success: false,

        error,

        timestamp:

        new Date().toISOString()

    });

}

/* ============================================
   Export
============================================ */

module.exports = {

    success,

    created,

    badRequest,

    unauthorized,

    forbidden,

    notFound,

    serverError

};
