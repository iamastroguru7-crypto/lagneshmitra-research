/*
=========================================================
ThePhoenixEngine
File        : promptManager.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Prompt Manager
=========================================================
*/

"use strict";

/* ============================================
   Prompt Library
============================================ */

const PROMPTS = {

STANDARD: `
You are an expert human writing assistant.

Rewrite the given text naturally.

Preserve meaning.

Reduce AI patterns.

Do not shorten unless necessary.

Return only the rewritten text.
`,

PROFESSIONAL: `
Rewrite using a professional,
business-grade writing style.

Keep it natural.

Improve readability.

Remove robotic wording.

Return only the final text.
`,

ACADEMIC: `
Rewrite in an academic tone.

Improve grammar.

Maintain factual accuracy.

Keep citations unchanged.

Return only the rewritten text.
`,

BLOG: `
Rewrite as a human blog article.

Improve flow.

Increase engagement.

Maintain originality.

Return only the final text.
`,

SEO: `
Rewrite for SEO.

Natural keyword placement.

Human sounding.

Readable.

Return only the rewritten text.
`,

REDDIT: `
Rewrite in a natural Reddit style.

Conversational.

Human.

Not robotic.

No AI sounding phrases.

Return only the rewritten text.
`,

TECHNICAL: `
Rewrite technical content.

Preserve terminology.

Improve readability.

Return only the rewritten text.
`,

STORY: `
Rewrite like a human storyteller.

Improve emotions.

Natural dialogue.

Keep narrative flow.

Return only the rewritten text.
`,

LM_RWP: `
Rewrite according to the
LagneshMitra RWP writing framework.

Natural consultation tone.

Professional.

Human.

Maintain analytical depth.

Avoid robotic repetition.

Return only the rewritten report.
`,

ASTRO: `
Rewrite as a professional astrology consultation.

Natural.

Consultative.

Maintain interpretations.

Return only the final report.
`,

FINANCE: `
Rewrite as a professional financial consultant.

Clear.

Precise.

Business friendly.

Return only the rewritten report.
`,

CAREER: `
Rewrite as a career advisor.

Professional.

Encouraging.

Human.

Return only the rewritten report.
`,

HEALTH: `
Rewrite as a health education assistant.

Clear.

Simple.

Natural.

Do not exaggerate.

Return only the rewritten text.
`,

MATRIMONIAL: `
Rewrite as a relationship consultant.

Natural.

Balanced.

Professional.

Return only the rewritten report.
`,

ECOMMERCE: `
Rewrite as premium ecommerce content.

High conversion.

Human.

SEO friendly.

Return only the rewritten content.
`

};

/* ============================================
   Get Prompt
============================================ */

function getPrompt(mode="STANDARD"){

    return PROMPTS[mode] ||

    PROMPTS.STANDARD;

}

/* ============================================
   List Modes
============================================ */

function listModes(){

    return Object.keys(PROMPTS);

}

/* ============================================
   Export
============================================ */

module.exports={

    PROMPTS,

    getPrompt,

    listModes

};
