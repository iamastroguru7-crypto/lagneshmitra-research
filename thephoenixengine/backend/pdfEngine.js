/*
=========================================================
ThePhoenixEngine
File        : pdfEngine.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
PDF Engine
=========================================================
*/

"use strict";

const fs = require("fs");

const path = require("path");

const PDFDocument = require("pdfkit");

/* ============================================
   Output Directory
============================================ */

const OUTPUT_DIRECTORY = path.join(

    __dirname,

    "generated"

);

if(!fs.existsSync(OUTPUT_DIRECTORY)){

    fs.mkdirSync(

        OUTPUT_DIRECTORY,

        {

            recursive:true

        }

    );

}

/* ============================================
   Create PDF
============================================ */

function createPDF(

    report,

    filename

){

    return new Promise(

        (resolve,reject)=>{

        try{

            const output=

            path.join(

                OUTPUT_DIRECTORY,

                filename

            );

            const doc=

            new PDFDocument({

                margin:40

            });

            const stream=

            fs.createWriteStream(

                output

            );

            doc.pipe(stream);

            doc

            .fontSize(22)

            .text(

                report.title ||

                "ThePhoenixEngine Report"

            );

            doc.moveDown();

            doc

            .fontSize(12)

            .text(

                "Report ID : "+

                report.reportId

            );

            doc.text(

                "Batch ID : "+

                report.batchId

            );

            doc.text(

                "Module : "+

                report.module

            );

            doc.text(

                "Generated : "+

                new Date()

                .toLocaleString()

            );

            doc.moveDown();

            doc

            .fontSize(12)

            .text(

                report.output ||

                ""

            );

            doc.end();

            stream.on(

                "finish",

                ()=>{

                    resolve({

                        success:true,

                        path:output

                    });

                }

            );

            stream.on(

                "error",

                reject

            );

        }

        catch(error){

            reject(error);

        }

    });

}

/* ============================================
   PDF Exists
============================================ */

function exists(file){

    return fs.existsSync(file);

}

/* ============================================
   Delete PDF
============================================ */

function remove(file){

    if(fs.existsSync(file)){

        fs.unlinkSync(file);

    }

}

/* ============================================
   Export
============================================ */

module.exports={

    createPDF,

    exists,

    remove

};
