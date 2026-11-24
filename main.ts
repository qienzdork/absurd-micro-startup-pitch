// Absurd Micro-Startup Pitch-Off entry.
// Writes one absurdly specific micro-startup pitch for lazy AI agents
// to /output/entry.txt (or $OUTPUT_PATH when set for local validation).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "Apology-as-a-Service for AI agents that hallucinated in a client's Slack: it auto-drafts the sorry note, blames a 'context-window glitch,' and bills $4 per incident.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outPath}`);
