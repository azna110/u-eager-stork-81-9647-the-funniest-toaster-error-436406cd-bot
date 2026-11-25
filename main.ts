// The Funniest Toaster Error Message — make.fun entry.
// Writes one original toaster error message (<= 120 characters) to
// /output/entry.txt. Deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR E-07: The bread has unionised. It refuses to be toasted until conditions improve.";

// The gate allows 1 to 120 characters; refuse to emit anything outside it.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
