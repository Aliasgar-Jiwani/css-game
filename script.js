const levels = [
  {
    level: 1,
    instruction:
      "Center all items horizontally in the middle of the shelf. How do you center items along the main axis?",
    hint: "Think about the justify-content property and how it controls alignment along the main axis. What value centers items?",
    expectedCSS: { "justify-content": ["center"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
    ],
  },
  {
    level: 2,
    instruction:
      "Move all items to the left side of the shelf. How do you align items to the start of the container?",
    hint: "Consider the justify-content property. What value aligns items to the beginning of the container?",
    expectedCSS: { "justify-content": ["flex-start"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📕" },
      { type: "book", icon: "📗" },
    ],
  },
  {
    level: 3,
    instruction:
      "Move all items to the right side of the shelf. How do you align items to the end of the container?",
    hint: "Think about the justify-content property. What value aligns items to the end of the container?",
    expectedCSS: { "justify-content": ["flex-end"] },
    items: [
      { type: "bag", icon: "🎒" },
      { type: "bag", icon: "👜" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 4,
    instruction:
      "Spread items with equal space between them, but no space at the edges. How do you distribute items with space between them?",
    hint: "Consider the justify-content property. Which value puts equal space between items but not at the edges?",
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
      "Give the same space around each item, including first and last items. How do you give equal space around each item?",
    hint: "Think about the justify-content property. Which value gives equal space around all items, including the edges?",
    expectedCSS: { "justify-content": ["space-around"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 6,
    instruction:
      "Stack items from top to bottom instead of left to right. How do you change the direction of items?",
    hint: "Consider the flex-direction property. How do you make items stack vertically in a column?",
    expectedCSS: { "flex-direction": ["column"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 7,
    instruction:
      "Stack items from top to bottom and put them in the center. How do you change direction and then center items?",
    hint: "You'll need two properties: flex-direction to change the stacking direction, and align-items to center in the cross axis.",
    expectedCSS: { "flex-direction": ["column"], "align-items": ["center"] },
    items: [
      { type: "pencil", icon: "✏️" },
      { type: "pencil", icon: "✏️" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 8,
    instruction:
      "Put items in the center both horizontally and vertically. How do you center items along both axes?",
    hint: "You need to control both the main axis and cross axis. Consider justify-content for horizontal and align-items for vertical.",
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
    instruction:
      "Stack items from bottom to top (reverse order). How do you reverse the stacking direction?",
    hint: "Think about the flex-direction property. How do you reverse the column direction?",
    expectedCSS: { "flex-direction": ["column-reverse"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "crayon", icon: "🖊️" },
      { type: "crayon", icon: "✏️" },
    ],
  },
  {
    level: 10,
    instruction:
      "Put items from right to left (reverse order). How do you reverse the arrangement direction?",
    hint: "Consider the flex-direction property. How do you reverse the default row direction?",
    expectedCSS: { "flex-direction": ["row-reverse"] },
    items: [
      { type: "bag", icon: "🎒" },
      { type: "bag", icon: "👜" },
      { type: "bag", icon: "💼" },
    ],
  },
  {
    level: 11,
    instruction:
      "When items don't fit in one line, move them to the next line. How do you allow items to wrap to new lines?",
    hint: "Think about the flex-wrap property. What value allows items to wrap to multiple lines?",
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
    instruction:
      "Move items to new lines and center each line. How do you wrap items and center each line?",
    hint: "You need flex-wrap to allow wrapping, and justify-content to center items on each line.",
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
    instruction:
      "Move items to new lines and spread the lines evenly. How do you distribute multiple lines of items?",
    hint: "You need flex-wrap to create multiple lines, and align-content to control how those lines are distributed.",
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
    instruction:
      "Stack items in columns, allow wrapping, and center columns. How do you stack in columns, wrap, and center the columns?",
    hint: "You'll need three properties: flex-direction for column stacking, flex-wrap for wrapping, and align-content for centering the lines.",
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
    instruction:
      "Move items to new lines but put new lines above old lines. How do you wrap items in reverse line order?",
    hint: "Think about the flex-wrap property. What value wraps items in reverse order?",
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
    instruction:
      "Put 20 pixels of space between each item. How do you add space between items?",
    hint: "Consider the gap property. How do you specify the amount of space between items?",
    expectedCSS: { gap: ["20px"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "notebook", icon: "📓" },
    ],
  },
  {
    level: 17,
    instruction:
      "Put items in the center and add 15 pixels space between them. How do you center items and add space?",
    hint: "You need to center items along both axes and then add space between them using the gap property.",
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
    instruction:
      "Allow wrapping, center content, and add 10 pixels space. How do you combine wrapping, centering, and spacing?",
    hint: "You'll need flex-wrap for wrapping, justify-content for centering, and gap for spacing.",
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
    instruction:
      "Spread items evenly in all directions with 15 pixels space. How do you distribute items in all directions?",
    hint: "You need flex-wrap for multiple lines, justify-content for horizontal distribution, align-content for vertical distribution, and gap for spacing.",
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
    instruction:
      "Move items to the middle from top to bottom. How do you center items along the cross axis?",
    hint: "Think about the align-items property. What value centers items along the cross axis?",
    expectedCSS: { "align-items": ["center"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "crayon", icon: "✏️" },
      { type: "crayon", icon: "🖊️" },
    ],
  },
  {
    level: 21,
    instruction:
      "Move all items to the top of the shelf. How do you align items to the start of the cross axis?",
    hint: "Consider the align-items property. What value aligns items to the beginning of the cross axis?",
    expectedCSS: { "align-items": ["flex-start"] },
    items: [
      { type: "notebook", icon: "📓" },
      { type: "notebook", icon: "📔" },
      { type: "notebook", icon: "📒" },
    ],
  },
  {
    level: 22,
    instruction:
      "Move all items to the bottom of the shelf. How do you align items to the end of the cross axis?",
    hint: "Think about the align-items property. What value aligns items to the end of the cross axis?",
    expectedCSS: { "align-items": ["flex-end"] },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "pencil", icon: "✏️" },
      { type: "book", icon: "📚" },
    ],
  },
  {
    level: 23,
    instruction:
      "Make items fill the full height of the shelf. How do you stretch items to fill available space?",
    hint: "Consider the align-items property. What value makes items stretch to fill the container?",
    expectedCSS: { "align-items": ["stretch"] },
    items: [
      { type: "photo", icon: "🖼️" },
      { type: "photo", icon: "📷" },
    ],
  },
  {
    level: 24,
    instruction:
      "Line up the bottom of items like text on a line. How do you align items along their baseline?",
    hint: "Think about the align-items property. What value aligns items along their baseline, like text?",
    expectedCSS: { "align-items": ["baseline"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 25,
    instruction:
      "Put items in the top right corner. How do you position items in the top right?",
    hint: "You need to control both horizontal and vertical positioning. Consider justify-content for horizontal and align-items for vertical.",
    expectedCSS: {
      "justify-content": ["flex-end"],
      "align-items": ["flex-start"],
    },
    items: [
      { type: "photo", icon: "🖼️" },
      { type: "photo", icon: "📷" },
    ],
  },
  {
    level: 26,
    instruction:
      "Put items in the bottom left corner. How do you position items in the bottom left?",
    hint: "You need to control both horizontal and vertical positioning. Consider justify-content for horizontal and align-items for vertical.",
    expectedCSS: {
      "justify-content": ["flex-start"],
      "align-items": ["flex-end"],
    },
    items: [
      { type: "crayon", icon: "🖍️" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 27,
    instruction:
      "Put items in the center horizontally but at the bottom. How do you center horizontally but align to bottom?",
    hint: "You need to center items horizontally and align them to the bottom. Consider justify-content for horizontal and align-items for vertical.",
    expectedCSS: {
      "justify-content": ["center"],
      "align-items": ["flex-end"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "book", icon: "📗" },
      { type: "book", icon: "📘" },
    ],
  },
  {
    level: 28,
    instruction:
      "Spread items horizontally and center them vertically. How do you spread horizontally and center vertically?",
    hint: "You need to spread items along the main axis and center them along the cross axis. Consider justify-content for horizontal and align-items for vertical.",
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
    instruction:
      "Stack columns backwards with wrapping and 12 pixels space. How do you stack columns in reverse with wrapping and space?",
    hint: "You need to reverse the column direction, allow wrapping, and add space. Consider flex-direction, flex-wrap, and gap.",
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
      "Final Challenge: Stack columns backwards, wrap, center everything, and add 12 pixels space. Combine all the techniques you've learned!",
    hint: "This is the ultimate test! You'll need to reverse column direction, wrap items, center in all directions, and add spacing.",
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

  // Reset flex container styles to default
  flexContainer.style.cssText = "display: flex; flex-wrap: nowrap;";

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
    // Reset container styles to default (flex-wrap should be nowrap by default)
    flexContainer.style.cssText = "display: flex; flex-wrap: nowrap;";

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

    // Check for required properties only
    for (const [property, expectedValues] of Object.entries(
      level.expectedCSS
    )) {
      const computedValue = computedStyle.getPropertyValue(property).trim();

      // Convert expectedValues to array if it's not already
      const expectedArray = Array.isArray(expectedValues)
        ? expectedValues
        : [expectedValues];

      // Check if computed value matches any of the expected values
      const isPropertyCorrect = expectedArray.some((expectedValue) => {
        // For gap property, we need exact match
        if (property === "gap") {
          // Normalize values for comparison (e.g., "20px" should match "20px")
          const normalizedComputed = computedValue.replace(/\s+/g, " ");
          const normalizedExpected = expectedValue.replace(/\s+/g, " ");
          return normalizedComputed === normalizedExpected;
        }
        // For other properties, check exact match
        else {
          return computedValue === expectedValue;
        }
      });

      if (!isPropertyCorrect) {
        isCorrect = false;
      }
    }

    if (isCorrect) {
      showSuccess();
    } else {
      // Show the correct answer when user gets it wrong
      const expectedProperties = Object.entries(level.expectedCSS)
        .map(([property, values]) => {
          // Use the first expected value as the correct answer
          const expectedValue = Array.isArray(values) ? values[0] : values;
          return `${property}: ${expectedValue}`;
        })
        .join("; ");

      showError(
        `❌ Not quite right. The correct answer is: ${expectedProperties}`
      );
    }
  } catch (error) {
    showError(
      "❌ There's a syntax error in your CSS. Please check and try again!"
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
