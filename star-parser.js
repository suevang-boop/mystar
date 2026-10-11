const LABELS = {
  situation: "s",
  task: "t",
  action: "a",
  result: "r",
};

function splitIntoSentences(text) {
  if (!text) return [];
  const clean = text.replace(/\r\n?/g, "\n").trim();
  if (!clean) return [];

  const sentences = [];
  for (const chunk of clean.split(/\n+/)) {
    let start = 0;
    const enders = /[.!?]+(?=\s|$)/g;
    let match;
    while ((match = enders.exec(chunk)) !== null) {
      const end = match.index + match[0].length;
      const piece = chunk.slice(start, end).trim();
      if (piece) sentences.push(piece);
      start = end;
    }
    const tail = chunk.slice(start).trim();
    if (tail) sentences.push(tail);
  }
  return sentences;
}

function guessLetter(sentence, index, total) {
  const s = sentence.toLowerCase();

  const RESULT =
    /(as a result|so that|which led to|which meant|ended up|in the end|finally|the result|we (increased|reduced|improved|cut)|reduced|increased|improved|%)/;
  const ACTION =
    /\bi (built|wrote|rewrote|created|organized|organised|led|fixed|designed|made|started|implemented|ran|tested|taught|planned|spoke|asked|decided|developed|added|improved|contacted|presented|learned)\b/;
  const TASK =
    /(my (job|task|goal|role)|i (needed|had|was asked) to|responsible for|the goal was|the task|we needed to|i was tasked)/;
  const SITUATION =
    /(we were|we had|our (team|club|group|class)|at the time|the problem|the situation|when i|one day|the issue|back then|kept crashing|it started)/;

  if (RESULT.test(s)) return "r";
  if (ACTION.test(s)) return "a";
  if (TASK.test(s)) return "t";
  if (SITUATION.test(s)) return "s";

  if (total <= 1) return "s";
  if (index === 0) return "s";
  if (index === total - 1) return "r";
  return index < total / 2 ? "t" : "a";
}

function splitLabel(line) {
  const match = line.match(/^\s*(situation|task|action|result)\s*[:\-]\s*(.*)$/i);
  if (!match) return null;
  return { letter: LABELS[match[1].toLowerCase()], rest: match[2] };
}

function parseToStar(text) {
  const out = { s: [], t: [], a: [], r: [] };
  if (!text || !text.trim()) return out;

  const lines = text.replace(/\r\n?/g, "\n").split("\n");
  const hasLabels = lines.some((line) => splitLabel(line) !== null);

  if (hasLabels) {
    let current = null;
    for (const line of lines) {
      const labelled = splitLabel(line);
      if (labelled) {
        current = labelled.letter;
        for (const piece of splitIntoSentences(labelled.rest)) {
          out[current].push(piece);
        }
      } else {
        for (const piece of splitIntoSentences(line)) {
          out[current || "s"].push(piece);
        }
      }
    }
    return out;
  }

  const sentences = splitIntoSentences(text);
  const total = sentences.length;
  sentences.forEach((sentence, index) => {
    out[guessLetter(sentence, index, total)].push(sentence);
  });
  return out;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { splitIntoSentences, guessLetter, parseToStar };
}
