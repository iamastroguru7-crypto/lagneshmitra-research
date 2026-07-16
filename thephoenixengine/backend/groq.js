/*
=========================================================
ThePhoenixEngine
File        : groq.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Groq AI Engine
=========================================================
*/

"use strict";

/* ============================================
   Dependencies
============================================ */

const Groq = require("groq-sdk");

/* ============================================
   Client
============================================ */

const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});

/* ============================================
   Configuration
============================================ */

const DEFAULT_MODEL =

process.env.GROQ_MODEL ||

"llama-3.3-70b-versatile";

const DEFAULT_TEMPERATURE = 0.40;

const DEFAULT_MAX_TOKENS = 4096;

/* ============================================
   Generate Response
============================================ */

async function generate({

    prompt,

    text,

    model = DEFAULT_MODEL,

    temperature = DEFAULT_TEMPERATURE,

    maxTokens = DEFAULT_MAX_TOKENS

}) {

    try {

        const completion =

        await groq.chat.completions.create({

            model,

            temperature,

            max_tokens: maxTokens,

            messages: [

                {

                    role: "system",

                    content: prompt

                },

                {

                    role: "user",

                    content: text

                }

            ]

        });

        return {

            success: true,

            provider: "Groq",

            model: model,

            output:

            completion.choices[0].message.content,

            usage:

            completion.usage

        };

    }

    catch(error){

        console.error(error);

        return{

            success:false,

            provider:"Groq",

            error:error.message

        };

    }

}

/* ============================================
   Health Check
============================================ */

async function healthCheck(){

    try{

        await groq.chat.completions.create({

            model:DEFAULT_MODEL,

            messages:[

                {

                    role:"user",

                    content:"Hello"

                }

            ],

            max_tokens:5

        });

        return{

            success:true,

            status:"Online"

        };

    }

    catch(error){

        return{

            success:false,

            status:"Offline",

            error:error.message

        };

    }

}

/* ============================================
   Available Models
============================================ */

function availableModels(){

    return [

        "llama-3.3-70b-versatile"

    ];

}

/* ============================================
   Export
============================================ */

module.exports={

    generate,

    healthCheck,

    availableModels

};
