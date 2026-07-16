/*
=========================================================
ThePhoenixEngine
File        : analyzer.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Writing Analysis Engine
=========================================================
*/

"use strict";

/* ============================================
   Analyzer Engine
============================================ */

const Analyzer = {

    analyse(text) {

        const result = {

            words: wordCount(text),

            characters: characterCount(text),

            paragraphs: paragraphCount(text),

            sentences: sentenceCount(text),

            readingTime: readingTime(text),

            averageSentenceLength: 0,

            averageWordLength: 0,

            readability: 0,

            repetition: 0,

            vocabulary: 0,

            passiveVoice: 0,

            score: 0

        };

        result.averageSentenceLength =
            this.averageSentenceLength(text);

        result.averageWordLength =
            this.averageWordLength(text);

        result.readability =
            this.readability(text);

        result.repetition =
            this.repetition(text);

        result.vocabulary =
            this.vocabulary(text);

        result.passiveVoice =
            this.passiveVoice(text);

        result.score =
            this.overall(result);

        return result;

    },

/* ============================================
   Average Sentence Length
============================================ */

    averageSentenceLength(text){

        const words=wordCount(text);

        const sentences=Math.max(1,sentenceCount(text));

        return Number((words/sentences).toFixed(2));

    },

/* ============================================
   Average Word Length
============================================ */

    averageWordLength(text){

        const words=text.match(/\b\w+\b/g)||[];

        if(words.length===0) return 0;

        let total=0;

        words.forEach(w=>{

            total+=w.length;

        });

        return Number((total/words.length).toFixed(2));

    },

/* ============================================
   Readability
============================================ */

    readability(text){

        const avg=this.averageSentenceLength(text);

        let score=100-(avg*2);

        score=Math.max(0,Math.min(100,score));

        return Math.round(score);

    },

/* ============================================
   Vocabulary Diversity
============================================ */

    vocabulary(text){

        const words=(text.toLowerCase().match(/\b\w+\b/g)||[]);

        if(words.length===0) return 0;

        const unique=new Set(words);

        return Math.round((unique.size/words.length)*100);

    },

/* ============================================
   Repetition Score
============================================ */

    repetition(text){

        const words=(text.toLowerCase().match(/\b\w+\b/g)||[]);

        if(words.length===0) return 0;

        const map={};

        let repeated=0;

        words.forEach(word=>{

            map[word]=(map[word]||0)+1;

            if(map[word]===2){

                repeated++;

            }

        });

        return repeated;

    },

/* ============================================
   Passive Voice Estimate
============================================ */

    passiveVoice(text){

        const matches=text.match(/\b(was|were|been|being|is|are|am|be)\b/gi);

        if(!matches) return 0;

        return matches.length;

    },

/* ============================================
   Overall Score
============================================ */

    overall(data){

        let score=100;

        score-=Math.min(30,data.repetition);

        score-=Math.max(0,data.averageSentenceLength-20);

        score+=Math.min(15,data.vocabulary/10);

        score=Math.max(0,Math.min(100,score));

        return Math.round(score);

    }

};

/* ============================================
   Public Function
============================================ */

function analyseText(text){

    return Analyzer.analyse(text);

}

/* ============================================
   Startup
============================================ */

log("Analyzer Engine Loaded","success");
