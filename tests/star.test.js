// Plain-JS tests for the STAR parser (no test framework).
// Run with:  node tests/star.test.js

const assert = require("assert");
const {
  splitIntoSentences,
  guessLetter,
  parseToStar,
} = require("../star-parser.js");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log("PASS  " + name);
  } catch (err) {
    process.exitCode = 1;
    console.error("FAIL  " + name + "\n      " + err.message);
  }
}

// ---- splitIntoSentences ----

test("splits on . ! ?", () => {
  assert.deepStrictEqual(splitIntoSentences("One. Two! Three?"), [
    "One.",
    "Two!",
    "Three?",
  ]);
});

test("splits on paragraph breaks", () => {
  assert.deepStrictEqual(splitIntoSentences("Line one.\nLine two."), [
    "Line one.",
    "Line two.",
  ]);
});

test("returns [] for blank text", () => {
  assert.deepStrictEqual(splitIntoSentences("   \n  "), []);
});

test("keeps text with no ending punctuation", () => {
  assert.deepStrictEqual(splitIntoSentences("No punctuation here"), [
    "No punctuation here",
  ]);
});

// ---- guessLetter ----

test("result cue -> r", () => {
  assert.strictEqual(guessLetter("As a result, crashes dropped by 90%.", 1, 4), "r");
});

test("action cue -> a", () => {
  assert.strictEqual(guessLetter("I rewrote the data layer and added tests.", 1, 4), "a");
});

test("task cue -> t", () => {
  assert.strictEqual(guessLetter("I needed to make it reliable in two weeks.", 1, 4), "t");
});

test("situation cue -> s", () => {
  assert.strictEqual(guessLetter("Our club app kept crashing for members.", 1, 4), "s");
});

test("positional fallback: first -> s", () => {
  assert.strictEqual(guessLetter("Some neutral words here", 0, 3), "s");
});

test("positional fallback: last -> r", () => {
  assert.strictEqual(guessLetter("Some neutral words here", 2, 3), "r");
});

// ---- parseToStar ----

test("empty text -> all buckets empty", () => {
  assert.deepStrictEqual(parseToStar(""), { s: [], t: [], a: [], r: [] });
});

test("labelled text splits by its labels", () => {
  const text =
    "Situation: The app crashed.\n" +
    "Task: Fix it.\n" +
    "Action: I rewrote the code.\n" +
    "Result: No more crashes.";
  assert.deepStrictEqual(parseToStar(text), {
    s: ["The app crashed."],
    t: ["Fix it."],
    a: ["I rewrote the code."],
    r: ["No more crashes."],
  });
});

test("unlabelled text fills all four buckets", () => {
  const text =
    "Our club app kept crashing. " +
    "I needed to fix it. " +
    "I rewrote the data layer. " +
    "As a result, crashes stopped.";
  const out = parseToStar(text);
  assert.strictEqual(out.s.length >= 1, true);
  assert.strictEqual(out.t.length >= 1, true);
  assert.strictEqual(out.a.length >= 1, true);
  assert.strictEqual(out.r.length >= 1, true);
});

console.log("\n" + passed + " passed");
