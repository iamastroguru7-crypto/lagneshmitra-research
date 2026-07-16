/*
=========================================================
ThePhoenixEngine
File        : templateEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Template Engine
=========================================================
*/

"use strict";

/* ============================================
   Templates
============================================ */

const Templates = [];

/* ============================================
   Create
============================================ */

function create({

    templateId,

    name,

    category="GENERAL",

    content="",

    author="SYSTEM"

}){

    const template={

        templateId,

        name,

        category,

        content,

        author,

        version:"1.0.0",

        status:"ACTIVE",

        createdAt:

        new Date().toISOString(),

        updatedAt:

        new Date().toISOString()

    };

    Templates.push(template);

    return template;

}

/* ============================================
   Get
============================================ */

function get(

    templateId

){

    return Templates.find(

        item=>

        item.templateId===templateId

    );

}

/* ============================================
   Update
============================================ */

function update(

    templateId,

    content

){

    const template=

    get(templateId);

    if(!template){

        return null;

    }

    template.content=

    content;

    template.updatedAt=

    new Date().toISOString();

    return template;

}

/* ============================================
   Status
============================================ */

function status(

    templateId,

    value

){

    const template=

    get(templateId);

    if(!template){

        return null;

    }

    template.status=value;

    template.updatedAt=

    new Date().toISOString();

    return template;

}

/* ============================================
   Delete
============================================ */

function remove(

    templateId

){

    const index=

    Templates.findIndex(

        item=>

        item.templateId===templateId

    );

    if(index>=0){

        Templates.splice(

            index,

            1

        );

        return true;

    }

    return false;

}

/* ============================================
   All Templates
============================================ */

function all(){

    return Templates;

}

/* ============================================
   Export
============================================ */

module.exports={

    create,

    get,

    update,

    status,

    remove,

    all

};
