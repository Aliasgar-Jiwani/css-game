const levels = [
  {
    level: 1,
    instruction: "Put the items in the middle of the shelf",
    hint: "Think about how to move items to the center of the shelf",
    expectedCSS: { "justify-content": ["center"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
    ],
  },
  {
    level: 2,
    instruction: "Move all items to the left side of the shelf",
    hint: "How do you align items to the beginning of the container?",
    expectedCSS: { "justify-content": ["flex-start", "start"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📕" },
      { type: "book", icon: "📗" },
    ],
  },
  {
    level: 3,
    instruction: "Move all items to the right side of the shelf",
    hint: "How do you align items to the end of the container?",
    expectedCSS: { "justify-content": ["flex-end", "end"] },
    items: [
      { type: "bag", icon: "🎒" },
      { type: "bag", icon: "👜" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 4,
    instruction:
      "Spread items with equal space between them. No space at the edges.",
    hint: "What property distributes items with space between them?",
    expectedCSS: { "justify-content": ["space-between"] },
    items: [
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
    ],
  },
  {
    level: 5,
    instruction:
      "Give the same space around each item, including first and last",
    hint: "How do you give equal space on both sides of each item?",
    expectedCSS: { "justify-content": ["space-around"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 6,
    instruction: "Stack items from top to bottom instead of left to right",
    hint: "How do you change the direction of items from row to column?",
    expectedCSS: { "flex-direction": ["column"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 7,
    instruction: "Stack items from top to bottom and put them in the center",
    hint: "First change direction to column, then think about centering",
    expectedCSS: { "flex-direction": ["column"], "align-items": ["center"] },
    items: [
      { type: "pencil", icon: "✏️" },
      { type: "pencil", icon: "✏️" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 8,
    instruction: "Put items in the center both horizontally and vertically",
    hint: "You need to control both horizontal and vertical alignment",
    expectedCSS: {
      "justify-content": ["center"],
      "align-items": ["center"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
    ],
  },
  {
    level: 9,
    instruction: "Stack items from bottom to top (reverse order)",
    hint: "How do you stack items in the opposite direction?",
    expectedCSS: { "flex-direction": ["column-reverse"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "crayon", icon: "🖊️" },
      { type: "crayon", icon: "✏️" },
    ],
  },
  {
    level: 10,
    instruction: "Put items from right to left (reverse order)",
    hint: "How do you arrange items in the opposite direction?",
    expectedCSS: { "flex-direction": ["row-reverse"] },
    items: [
      { type: "bag", icon: "🎒" },
      { type: "bag", icon: "👜" },
      { type: "bag", icon: "💼" },
    ],
  },
  {
    level: 11,
    instruction: "When items don't fit in one line, move them to the next line",
    hint: "What property allows items to wrap to new lines?",
    expectedCSS: { "flex-wrap": ["wrap"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
      { type: "book", icon: "📕" },
      { type: "book", icon: "📔" },
      { type: "book", icon: "📒" },
    ],
  },
  {
    level: 12,
    instruction: "Move items to new lines and center each line",
    hint: "Allow wrapping and think about how to center each line",
    expectedCSS: { "flex-wrap": ["wrap"], "justify-content": ["center"] },
    items: [
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "book", icon: "📚" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 13,
    instruction: "Move items to new lines and spread the lines evenly",
    hint: "When you have multiple lines, how do you space them?",
    expectedCSS: { "flex-wrap": ["wrap"], "align-content": ["space-between"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 14,
    instruction: "Stack items in columns, allow wrapping, and center columns",
    hint: "Stack in columns, allow wrapping, then center the columns",
    expectedCSS: {
      "flex-direction": ["column"],
      "flex-wrap": ["wrap"],
      "align-content": ["center"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
    ],
  },
  {
    level: 15,
    instruction: "Move items to new lines but put new lines above old lines",
    hint: "How do you wrap items in reverse order?",
    expectedCSS: { "flex-wrap": ["wrap-reverse"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 16,
    instruction: "Put 20 pixels of space between each item",
    hint: "What modern CSS property adds space between items?",
    expectedCSS: { gap: ["20px"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
    ],
  },
  {
    level: 17,
    instruction: "Put items in the center and add 15 pixels space between them",
    hint: "Center items and add 15 pixels of space",
    expectedCSS: {
      "justify-content": ["center"],
      "align-items": ["center"],
      gap: ["15px"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
    ],
  },
  {
    level: 18,
    instruction: "Allow wrapping, center content, and add 10 pixels space",
    hint: "Allow wrapping, center content, and add space between items",
    expectedCSS: {
      "flex-wrap": ["wrap"],
      "justify-content": ["center"],
      gap: ["10px"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 19,
    instruction: "Spread items evenly in all directions with 15 pixels space",
    hint: "Distribute items evenly and add 15 pixels of space",
    expectedCSS: {
      "flex-wrap": ["wrap"],
      "justify-content": ["space-evenly"],
      "align-content": ["space-around"],
      gap: ["15px"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "bag", icon: "🎒" },
      { type: "photo", icon: "🖼️" },
    ],
  },
  {
    level: 20,
    instruction: "Move items to the middle from top to bottom",
    hint: "How do you center items vertically?",
    expectedCSS: { "align-items": ["center"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "crayon", icon: "✏️" },
      { type: "crayon", icon: "🖊️" },
    ],
  },
  {
    level: 21,
    instruction: "Move all items to the top of the shelf",
    hint: "How do you align items to the top of the container?",
    expectedCSS: { "align-items": ["flex-start", "start"] },
    items: [
      { type: "notebook", icon: "📓" },
      { type: "notebook", icon: "📔" },
      { type: "notebook", icon: "📒" },
    ],
  },
  {
    level: 22,
    instruction: "Move all items to the bottom of the shelf",
    hint: "How do you align items to the bottom of the container?",
    expectedCSS: { "align-items": ["flex-end", "end"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "pencil", icon: "✏️" },
      { type: "book", icon: "📚" },
    ],
  },
  {
    level: 23,
    instruction: "Make items fill the full height of the shelf",
    hint: "How do you make items stretch to fill available space?",
    expectedCSS: { "align-items": ["stretch"] },
    items: [
      { type: "photo", icon: "🖼️" },
      { type: "photo", icon: "📷" },
    ],
  },
  {
    level: 24,
    instruction: "Line up the bottom of items like text on a line",
    hint: "How do you align items along their baseline?",
    expectedCSS: { "align-items": ["baseline"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 25,
    instruction: "Put items in the top right corner",
    hint: "How do you position items in the top right?",
    expectedCSS: {
      "justify-content": ["flex-end", "end"],
      "align-items": ["flex-start", "start"],
    },
    items: [
      { type: "photo", icon: "🖼️" },
      { type: "photo", icon: "📷" },
    ],
  },
  {
    level: 26,
    instruction: "Put items in the bottom left corner",
    hint: "How do you position items in the bottom left?",
    expectedCSS: {
      "justify-content": ["flex-start", "start"],
      "align-items": ["flex-end", "end"],
    },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 27,
    instruction: "Put items in the center horizontally but at the bottom",
    hint: "How do you center horizontally but align to bottom?",
    expectedCSS: {
      "justify-content": ["center"],
      "align-items": ["flex-end", "end"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 28,
    instruction: "Spread items horizontally and center them vertically",
    hint: "How do you spread horizontally and center vertically?",
    expectedCSS: {
      "justify-content": ["space-between"],
      "align-items": ["center"],
    },
    items: [
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "book", icon: "📚" },
    ],
  },
  {
    level: 29,
    instruction: "Stack columns backwards with wrapping and 12 pixels space",
    hint: "How do you stack columns in reverse with wrapping and space?",
    expectedCSS: {
      "flex-direction": ["column-reverse"],
      "flex-wrap": ["wrap"],
      gap: ["12px"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
    ],
  },
  {
    level: 30,
    instruction:
      "Final Challenge: Stack columns backwards, wrap, center everything, and add 12 pixels space",
    hint: "Combine all the techniques you've learned",
    expectedCSS: {
      "flex-direction": ["column-reverse"],
      "flex-wrap": ["wrap"],
      "justify-content": ["center"],
      "align-items": ["center"],
      "align-content": ["center"],
      gap: ["12px"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
      { type: "crayon", icon: "🖍️" },
      { type: "bag", icon: "🎒" },
      { type: "photo", icon: "🖼️" },
      { type: "lunchbox", icon: "🍱" },
    ],
  },
];

let currentLevel = 0;
const totalLevels = levels.length;

// Load saved progress from localStorage
function loadProgress() {
  try {
    const savedProgress = localStorage.getItem("flexGameProgress");
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      currentLevel = progress.currentLevel || 0;
      // Ensure currentLevel is within valid bounds
      if (currentLevel >= totalLevels) {
        currentLevel = totalLevels - 1;
      } else if (currentLevel < 0) {
        currentLevel = 0;
      }
    }
  } catch (e) {
    console.error("Failed to load progress:", e);
    currentLevel = 0;
  }
}

// Save progress to localStorage
function saveProgress() {
  try {
    const progress = {
      currentLevel: currentLevel,
      lastPlayed: new Date().toISOString(),
      // Save code for each level
      levelCodes: getLevelCodes(),
    };
    localStorage.setItem("flexGameProgress", JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

// Get code for all levels
function getLevelCodes() {
  const levelCodes = {};
  for (let i = 0; i < totalLevels; i++) {
    const savedCode = localStorage.getItem(`levelCode_${i}`);
    if (savedCode) {
      levelCodes[i] = savedCode;
    }
  }
  return levelCodes;
}

// Save code for current level
function saveLevelCode(code) {
  try {
    localStorage.setItem(`levelCode_${currentLevel}`, code);
  } catch (e) {
    console.error("Failed to save level code:", e);
  }
}

// Load code for current level
function loadLevelCode() {
  try {
    const savedCode = localStorage.getItem(`levelCode_${currentLevel}`);
    if (savedCode) {
      codeEditor.value = savedCode;
      return true;
    }
    return false;
  } catch (e) {
    console.error("Failed to load level code:", e);
    return false;
  }
}

const currentLevelSpan = document.getElementById("current-level");
const totalLevelsSpan = document.getElementById("total-levels");
const progressFill = document.getElementById("progress-fill");
const instructionDiv = document.getElementById("instruction");
const flexContainer = document.getElementById("flex-container");
const codeEditor = document.getElementById("code-editor");
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const feedback = document.getElementById("feedback");

function initGame() {
  totalLevelsSpan.textContent = totalLevels;
  loadProgress(); // Load saved progress
  loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
  const level = levels[levelIndex];

  currentLevelSpan.textContent = level.level;
  instructionDiv.textContent = level.instruction;

  const progress = ((levelIndex + 1) / totalLevels) * 100;
  progressFill.style.width = progress + "%";

  flexContainer.innerHTML = "";
  level.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `school-item ${item.type}`;
    itemDiv.textContent = item.icon;
    itemDiv.title = item.type.charAt(0).toUpperCase() + item.type.slice(1);
    flexContainer.appendChild(itemDiv);
  });

  // Load saved code for this level or set default
  if (!loadLevelCode()) {
    codeEditor.value = "display: flex;";
  }

  feedback.innerHTML = "";
  feedback.className = "feedback";

  // Update button visibility
  nextBtn.style.display = currentLevel < totalLevels - 1 ? "block" : "none";
  prevBtn.style.display = currentLevel > 0 ? "block" : "none";

  // Save progress whenever a level is loaded
  saveProgress();
}

function checkAnswer() {
  const level = levels[currentLevel];
  const css = codeEditor.value;

  // Save the code the user entered
  saveLevelCode(css);

  try {
    flexContainer.style.cssText = "display: flex;";

    const rules = css
      .split(";")
      .map((rule) => rule.trim())
      .filter((rule) => rule);

    rules.forEach((rule) => {
      if (rule) {
        const [property, value] = rule.split(":").map((s) => s.trim());
        if (property && value) {
          flexContainer.style.setProperty(property, value);
        }
      }
    });

    const computedStyle = getComputedStyle(flexContainer);
    let isCorrect = true;
    let missingProperties = [];

    for (const [property, expectedValues] of Object.entries(
      level.expectedCSS
    )) {
      const computedValue = computedStyle.getPropertyValue(property);

      // Convert expectedValues to array if it's not already
      const expectedArray = Array.isArray(expectedValues)
        ? expectedValues
        : [expectedValues];

      // Check if computed value matches any of the expected values
      const isPropertyCorrect = expectedArray.some((expectedValue) => {
        if (property === "gap" && expectedValue !== "0px") {
          const gapValue = parseInt(computedValue);
          const expectedGapValue = parseInt(expectedValue);
          return (
            gapValue >= expectedGapValue * 0.8 &&
            gapValue <= expectedGapValue * 1.2
          );
        } else {
          return computedValue === expectedValue;
        }
      });

      if (!isPropertyCorrect) {
        isCorrect = false;
        missingProperties.push({ property, expectedValues: expectedArray });
      }
    }

    if (isCorrect) {
      showSuccess();
    } else {
      // Show the correct answer when user gets it wrong
      const correctAnswers = missingProperties
        .map((prop) => {
          return `${prop.property}: ${prop.expectedValues[0]}`;
        })
        .join("; ");

      showError(
        `Not quite right. The correct answer includes: ${correctAnswers}`
      );
    }
  } catch (error) {
    showError(
      "There's a syntax error in your CSS. Please check and try again!"
    );
  }
}

function showSuccess() {
  feedback.innerHTML = "✅ Excellent! You got it right!";
  feedback.className = "feedback success";
  nextBtn.style.display = currentLevel < totalLevels - 1 ? "block" : "none";

  // Save progress when level is completed
  saveProgress();

  // If this is the last level, show final score
  if (currentLevel === totalLevels - 1) {
    setTimeout(() => showCompletion(), 1500);
  } else {
    createConfetti();
  }
}

function showError(message) {
  feedback.innerHTML = `❌ ${message}`;
  feedback.className = "feedback error";
}

function showHint() {
  const level = levels[currentLevel];
  feedback.innerHTML = `💡 Hint: ${level.hint}`;
  feedback.className = "feedback";
}

function nextLevel() {
  if (currentLevel < totalLevels - 1) {
    currentLevel++;
    loadLevel(currentLevel);
  }
}

function prevLevel() {
  if (currentLevel > 0) {
    currentLevel--;
    loadLevel(currentLevel);
  }
}

function createConfetti() {
  const colors = [
    "#667eea",
    "#764ba2",
    "#f093fb",
    "#f5576c",
    "#4facfe",
    "#00f2fe",
  ];
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 3 + "s";
    piece.style.animationDuration = Math.random() * 2 + 2 + "s";
    confettiContainer.appendChild(piece);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

// Update the showCompletion function to show score
function showCompletion() {
  // Calculate score based on completed levels
  let completedLevels = 0;
  for (let i = 0; i < totalLevels; i++) {
    const savedCode = localStorage.getItem(`levelCode_${i}`);
    if (savedCode) {
      completedLevels++;
    }
  }

  const score = Math.round((completedLevels / totalLevels) * 100);

  const modal = document.createElement("div");
  modal.className = "completion-modal";
  modal.innerHTML = `
        <div class="modal-content">
            <h2>🎉 Congratulations!</h2>
            <p>You've completed the Flexbox Classroom!</p>
            <p><strong>Final Score: ${score}%</strong></p>
            <p>Levels completed: ${completedLevels}/${totalLevels}</p>
            <br>
            <button class="btn btn-check" onclick="location.reload()">🔄 Play Again</button>
        </div>
    `;
  document.body.appendChild(modal);
  createConfetti();
}

// Save code when user types in the editor
codeEditor.addEventListener("input", () => {
  saveLevelCode(codeEditor.value);
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextLevel);
prevBtn.addEventListener("click", prevLevel);

codeEditor.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    e.preventDefault();
    checkAnswer();
  }
});

initGame();
