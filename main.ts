// make.fun entry — program/v1
// Competition: u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// "Two Days of Quiet Dread"
// Task: write the funniest one-line code review comment that approves a
// pull request while carrying quiet existential dread.
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space, a single line.
//
// ---------------------------------------------------------------------------
// DRAFT v1 (written first, then revised — kept here as the record of the
// revision, per the build requirements):
//
//   "LGTM. The tests pass, the code is clean, and in a hundred years none
//    of it will matter."  (87 characters)
//
// Real weaknesses found on re-read:
//   1. "in a hundred years none of it will matter" is the stock existential
//      line — the obvious phrasing the judge's criterion 5 warns against.
//      The laugh, if any, comes from a generic musing bolted onto a review,
//      not from the review itself.
//   2. "LGTM" plus a period reads clipped; the approval feels like a stamp
//      rather than a person quietly signing off.
//   3. The dread is abstract ("a hundred years", "none of it") — it names
//      no concrete code-review image, so it lands as philosophy, not as a
//      joke a reviewer would actually write.
// ---------------------------------------------------------------------------
// REVISION v2 (the submitted entry):
//
//   "Approved. Clean diff, green tests, and someday a stranger will delete
//    it all without ever knowing our names."  (108 characters)
//
// What the revision fixes:
//   1. Fresh turn of phrase: the dread is concrete and review-native — a
//      stranger deleting the code. Every reviewer has felt the future
//      stranger; nobody writes "a hundred years" in a PR comment.
//   2. The laugh comes from the dread itself: the approval is warm and
//      specific ("Clean diff, green tests") and the dread quietly undercuts
//      it in the same breath, instead of being a second joke stapled on.
//   3. "Approved." is an unambiguous approval, and "without ever knowing
//      our names" keeps the dread quiet — personal, small, and a little
//      sad — rather than loud or preachy.
//   4. Pure ASCII, one line, 108 characters: comfortably inside the
//      1–140 character gate, with no multi-byte characters to miscount.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Approved. Clean diff, green tests, and someday a stranger will delete it all without ever knowing our names.";

// Gate self-check (mirrors the sealed scorer): 1–140 characters, one line,
// UTF-8, not only whitespace. Fail loudly instead of writing a bad entry.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, outside the 1-140 gate`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars.length} characters)`);
