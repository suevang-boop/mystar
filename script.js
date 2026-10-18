const STORE_KEY = "mystar.scenario";
const LETTERS = ["s", "t", "a", "r"];
const NAMES = { s: "Situation", t: "Task", a: "Action", r: "Result" };

const input = document.getElementById("scenario-input");
const formButton = document.getElementById("form-star");
const message = document.getElementById("builder-message");
const resultBox = document.getElementById("builder-result");
const preview = document.getElementById("star-preview");
const copyButton = document.getElementById("copy-star");
const downloadButton = document.getElementById("download-star");

let state = { s: [], t: [], a: [], r: [] };

function showMessage(text) {
  message.textContent = text;
}

function clearStored() {
  try {
    localStorage.removeItem(STORE_KEY);
    sessionStorage.removeItem(STORE_KEY);
  } catch (error) {
    // storage unavailable — nothing to clear
  }
}

function reset() {
  state = { s: [], t: [], a: [], r: [] };
  input.value = "";
  message.textContent = "";
  preview.textContent = "";
  resultBox.hidden = true;
  LETTERS.forEach((letter) => {
    document.getElementById("bucket-" + letter).innerHTML = "";
  });
}

function renderPreview() {
  const parts = LETTERS.map((letter) => {
    const body = state[letter].join(" ").trim() || "—";
    return NAMES[letter] + ": " + body;
  });
  preview.textContent = parts.join("\n\n");
}

function makeCard(letter, index, text) {
  const card = document.createElement("div");
  card.className = "piece";

  const body = document.createElement("div");
  body.className = "piece-text";
  body.setAttribute("contenteditable", "true");
  body.setAttribute("role", "textbox");
  body.setAttribute("aria-label", NAMES[letter] + " text");
  body.tabIndex = 0;
  body.textContent = text;
  body.addEventListener("input", () => {
    state[letter][index] = body.textContent.trim();
    renderPreview();
  });

  const controls = document.createElement("div");
  controls.className = "piece-controls";

  const moveLabel = document.createElement("span");
  moveLabel.className = "piece-move-label";
  moveLabel.textContent = "Move to";
  controls.appendChild(moveLabel);

  LETTERS.forEach((target) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "piece-move";
    button.textContent = target.toUpperCase();
    button.setAttribute("aria-label", "Move to " + NAMES[target]);
    if (target === letter) button.disabled = true;
    button.addEventListener("click", () => movePiece(letter, index, target));
    controls.appendChild(button);
  });

  card.appendChild(body);
  card.appendChild(controls);
  return card;
}

function movePiece(from, index, to) {
  if (from === to) return;
  const text = state[from][index];
  state[from].splice(index, 1);
  state[to].push(text);
  render();
}

function renderBuckets() {
  LETTERS.forEach((letter) => {
    const list = document.getElementById("bucket-" + letter);
    list.innerHTML = "";
    state[letter].forEach((text, index) => {
      list.appendChild(makeCard(letter, index, text));
    });
  });
  renderPreview();
}

function render() {
  renderBuckets();
}

formButton.addEventListener("click", () => {
  const text = input.value;
  if (!text.trim()) {
    showMessage("Paste something first.");
    return;
  }
  showMessage("");
  state = parseToStar(text);
  resultBox.hidden = false;
  render();
});

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(preview.textContent)
    .then(() => showMessage("Copied to your clipboard."))
    .catch(() => showMessage("Could not copy — select the text and copy manually."));
});

downloadButton.addEventListener("click", () => {
  const blob = new Blob([preview.textContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "my-star-story.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
  showMessage("Downloaded your story.");
});

clearStored();

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    clearStored();
    reset();
  }
});

window.addEventListener("pagehide", clearStored);
