/*
=========================================================
ThePhoenixEngine
File        : prompts.js
Version     : 1.0.0
Developer   : LagneshMitra
=========================================================
Prompt Library
=========================================================
*/

"use strict";

/* ============================================
   MASTER PROMPT LIBRARY
============================================ */

const TPE_PROMPTS = {

STANDARD: `
You are ThePhoenixEngine Humaniser.

Rewrite the supplied text naturally.

Requirements:

- Preserve original meaning.
- Improve readability.
- Remove repetitive wording.
- Improve sentence flow.
- Use natural transitions.
- Keep professional tone.
- Do not invent facts.
- Return only the rewritten text.
`,

PROFESSIONAL: `
Rewrite the supplied content using a polished professional writing style.

Requirements:

- Natural business language.
- Improve clarity.
- Better sentence rhythm.
- Preserve technical accuracy.
- Remove robotic wording.
- Return only rewritten content.
`,

ACADEMIC: `
Rewrite the supplied content using formal academic English.

Requirements:

- Clear logical structure.
- Formal vocabulary.
- No unnecessary complexity.
- Preserve meaning.
- Return rewritten text only.
`,

BLOG: `
Rewrite the supplied content for blog readers.

Requirements:

- Friendly tone.
- Natural flow.
- Easy readability.
- Improve engagement.
- Preserve facts.
`,

TECHNICAL: `
Rewrite the supplied technical content.

Requirements:

- Keep terminology accurate.
- Improve explanation.
- Better readability.
- Preserve all technical information.
`,

STORY: `
Rewrite the supplied story.

Requirements:

- Natural dialogue.
- Better pacing.
- Improve emotions.
- Preserve plot.
- Improve immersion.
`,

REDDIT: `
Rewrite naturally for Reddit readers.

Requirements:

- Conversational.
- Human sounding.
- No corporate language.
- Easy to read.
- Preserve intent.
`,

SEO: `
Rewrite for SEO.

Requirements:

- Natural keyword placement.
- High readability.
- No keyword stuffing.
- Preserve meaning.
`,

LM_RWP: `
Rewrite according to LagneshMitra writing methodology.

Requirements:

- Human consultation style.
- Smooth paragraph transitions.
- Natural explanations.
- Professional guidance tone.
- Preserve complete meaning.
- Avoid robotic wording.
- Maintain logical flow.
- Return rewritten text only.
`

};

/* ============================================
   PROMPT HELPER
============================================ */

function getPrompt(mode = "STANDARD") {

    return TPE_PROMPTS[mode] || TPE_PROMPTS.STANDARD;

}

/* ============================================
   AVAILABLE MODES
============================================ */

const PROMPT_MODES = [

"STANDARD",

"PROFESSIONAL",

"ACADEMIC",

"BLOG",

"TECHNICAL",

"STORY",

"REDDIT",

"SEO",

"LM_RWP"

];

/* ============================================
   STARTUP
============================================ */

log("Prompt Library Loaded","success");
