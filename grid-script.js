const levels = [
  {
    level: 1,
    instruction:
      "Turn the container into a grid. This is the first step to using CSS Grid.",
    hint: "Use the display property to define a grid container.",
    expectedCSS: { display: ["grid"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
    ],
  },
  {
    level: 2,
    instruction:
      "Create 2 columns of equal width. How do you define columns in a grid?",
    hint: "Use grid-template-columns. '1fr' represents a fraction of the available space.",
    expectedCSS: { "grid-template-columns": ["1fr 1fr", "repeat(2, 1fr)"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 3,
    instruction:
      "Create 3 columns of equal width.",
    hint: "Use grid-template-columns with three 1fr values or repeat(3, 1fr).",
    expectedCSS: { "grid-template-columns": ["1fr 1fr 1fr", "repeat(3, 1fr)"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
    ],
  },
  {
    level: 4,
    instruction:
      "Create 2 columns: the first one 100px wide, and the second one taking the rest of the space.",
    hint: "Use grid-template-columns. You can mix pixels (px) and fractions (fr).",
    expectedCSS: { "grid-template-columns": ["100px 1fr"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 5,
    instruction:
      "Add a 20px gap between the columns.",
    hint: "Use the gap property (or grid-gap) to create space between grid items.",
    expectedCSS: { gap: ["20px", "20px 20px"], "grid-gap": ["20px"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 6,
    instruction:
      "Create 2 rows of equal height.",
    hint: "Use grid-template-rows. Similar to columns, use 1fr for equal fractions.",
    expectedCSS: { "grid-template-rows": ["1fr 1fr", "repeat(2, 1fr)"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 7,
    instruction:
      "Create a 2x2 grid (2 columns, 2 rows) with equal sizes.",
    hint: "Define both grid-template-columns and grid-template-rows.",
    expectedCSS: {
      "grid-template-columns": ["1fr 1fr", "repeat(2, 1fr)"],
      "grid-template-rows": ["1fr 1fr", "repeat(2, 1fr)"],
    },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 8,
    instruction:
      "Make the first column twice as wide as the second column.",
    hint: "Use 2fr for the first column and 1fr for the second.",
    expectedCSS: { "grid-template-columns": ["2fr 1fr"] },
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
    ],
  },
  {
    level: 9,
    instruction:
      "Center the grid tracks horizontally. We've set fixed columns for you.",
    hint: "Use justify-content to align the whole grid inside the container.",
    expectedCSS: { "justify-content": ["center"] },
    defaultCode: "display: grid;\ngrid-template-columns: 100px 100px;",
    items: [
      { type: "book", icon: "📚" },
      { type: "pencil", icon: "✏️" },
      { type: "lunchbox", icon: "🍱" },
      { type: "bag", icon: "🎒" },
    ],
  },
  {
    level: 10,
    instruction:
      "Create a layout using grid-template-areas. We've named the areas: 'header', 'sidebar', 'main', 'footer'. Make a layout where header is top, sidebar left, main right, and footer bottom.",
    hint: "Use grid-template-areas. Example: 'header header' 'sidebar main' 'footer footer'",
    expectedCSS: {
      "grid-template-areas": [
        '"header header" "sidebar main" "footer footer"',
        '"header header header" "sidebar sidebar main" "footer footer footer"',
        '"header header header" "sidebar main main" "footer footer footer"',
      ],
    },
    defaultCode:
      "display: grid;\ngrid-template-columns: 1fr 1fr;\ngrid-template-rows: 60px 1fr 60px;",
    items: [
      { type: "book", icon: "📚", gridArea: "header", label: "Header" },
      { type: "pencil", icon: "✏️", gridArea: "sidebar", label: "Sidebar" },
      { type: "lunchbox", icon: "🍱", gridArea: "main", label: "Main" },
      { type: "bag", icon: "🎒", gridArea: "footer", label: "Footer" },
    ],
  },
];

let currentLevel = 0;
const totalLevels = levels.length;

// Load saved progress from localStorage
function loadProgress() {
  try {
    const savedProgress = localStorage.getItem("gridGameProgress");
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      currentLevel = progress.currentLevel || 0;
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
      levelCodes: getLevelCodes(),
    };
    localStorage.setItem("gridGameProgress", JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

// Get code for all levels
function getLevelCodes() {
  const levelCodes = {};
  for (let i = 0; i < totalLevels; i++) {
    const savedCode = localStorage.getItem(`gridLevelCode_${i}`);
    if (savedCode) {
      levelCodes[i] = savedCode;
    }
  }
  return levelCodes;
}

// Save code for current level
function saveLevelCode(code) {
  try {
    localStorage.setItem(`gridLevelCode_${currentLevel}`, code);
  } catch (e) {
    console.error("Failed to save level code:", e);
  }
}

// Load code for current level
function loadLevelCode() {
  try {
    const savedCode = localStorage.getItem(`gridLevelCode_${currentLevel}`);
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
const gridContainer = document.getElementById("grid-container");
const codeEditor = document.getElementById("code-editor");
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const feedback = document.getElementById("feedback");

function initGame() {
  totalLevelsSpan.textContent = totalLevels;
  loadProgress();
  loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
  const level = levels[levelIndex];

  currentLevelSpan.textContent = level.level;
  instructionDiv.textContent = level.instruction;

  const progress = ((levelIndex + 1) / totalLevels) * 100;
  progressFill.style.width = progress + "%";

  gridContainer.innerHTML = "";
  level.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `school-item ${item.type}`;
    // If label exists, show it with icon, otherwise just icon
    itemDiv.innerHTML = item.label
      ? `<div style="display:flex;flex-direction:column;align-items:center;font-size:0.5em;"><span>${item.icon}</span><span>${item.label}</span></div>`
      : item.icon;
    itemDiv.title = item.type.charAt(0).toUpperCase() + item.type.slice(1);

    // Apply grid-area if specified
    if (item.gridArea) {
      itemDiv.style.gridArea = item.gridArea;
      itemDiv.title += ` (grid-area: ${item.gridArea})`;
    }

    gridContainer.appendChild(itemDiv);
  });

  // Reset grid container styles to default
  gridContainer.style.cssText = "";
  
  if (!loadLevelCode()) {
    if (level.defaultCode) {
        codeEditor.value = level.defaultCode;
    } else if (levelIndex === 0) {
        codeEditor.value = "";
    } else {
        codeEditor.value = "display: grid;";
    }
    // Apply the code immediately so visual state matches
    applyCSS(codeEditor.value);
  } else {
      // If code loaded, apply it
      applyCSS(codeEditor.value);
  }

  feedback.innerHTML = "";
  feedback.className = "feedback";

  nextBtn.style.display = currentLevel < totalLevels - 1 ? "block" : "none";
  prevBtn.style.display = currentLevel > 0 ? "block" : "none";

  saveProgress();
}

function applyCSS(css) {
    // Reset first
    gridContainer.style.cssText = "";
    
    const rules = css
      .split(";")
      .map((rule) => rule.trim())
      .filter((rule) => rule);

    rules.forEach((rule) => {
      if (rule) {
        const [property, value] = rule.split(":").map((s) => s.trim());
        if (property && value) {
          gridContainer.style.setProperty(property, value);
        }
      }
    });
}

function checkAnswer() {
  const level = levels[currentLevel];
  const css = codeEditor.value;

  saveLevelCode(css);

  try {
    // Apply CSS to the container
    applyCSS(css);

    let isCorrect = true;
    const feedbackMessages = [];

    // Check for required properties
    for (const [property, expectedValues] of Object.entries(level.expectedCSS)) {
      // Use inline style to check what was actually set, avoiding computed pixel values for 'fr'
      let userValue = gridContainer.style.getPropertyValue(property).trim();
      
      // If inline style is empty, it might be because the property was invalid or not set
      // For some properties like 'gap', browsers might normalize '20px' to '20px 20px' in computed style
      // but usually inline style keeps what was typed if valid.
      
      // Fallback: if inline style is empty but we expect something, check if it's a default or computed
      // But for this game, we mostly care about what the user explicitly set.
      
      if (!userValue) {
          isCorrect = false;
          feedbackMessages.push(`Missing property: <code>${property}</code>`);
          continue;
      }

      const expectedArray = Array.isArray(expectedValues)
        ? expectedValues
        : [expectedValues];

      // Normalize function for comparison
      const normalize = (val) => val.toLowerCase().replace(/'/g, '"').replace(/\s+/g, " ").replace(/;\s*$/, "");

      const normalizedUser = normalize(userValue);
      
      const isPropertyCorrect = expectedArray.some((expectedValue) => {
          const normalizedExpected = normalize(expectedValue);
          
          // Exact match
          if (normalizedUser === normalizedExpected) return true;
          
          // Handle repeat() expansion: "repeat(2, 1fr)" might become "1fr 1fr"
          // We can try to expand common repeat patterns in our expected values or just check both.
          // The 'levels' definition should ideally contain both variations.
          
          return false;
      });

      if (!isPropertyCorrect) {
        isCorrect = false;
        feedbackMessages.push(`Incorrect value for <code>${property}</code>. Got: <code>${userValue}</code>`);
      }
    }

    if (isCorrect) {
      showSuccess();
    } else {
      // If we have specific feedback, show it
      if (feedbackMessages.length > 0) {
          showError(feedbackMessages[0]); // Show the first error
      } else {
          // Fallback generic error (shouldn't happen if logic is correct)
           const expectedProperties = Object.entries(level.expectedCSS)
            .map(([property, values]) => {
                return `${property}: ${values[0]}`;
            })
            .join("; ");
          showError(`❌ Not quite right. Try: ${expectedProperties}`);
      }
    }
  } catch (error) {
    console.error(error);
    showError(
      "❌ There's a syntax error in your CSS. Please check and try again!"
    );
  }
}

function showSuccess() {
  feedback.innerHTML = "✅ Excellent! You got it right!";
  feedback.className = "feedback success";
  nextBtn.style.display = currentLevel < totalLevels - 1 ? "block" : "none";
  saveProgress();

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
  const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 3 + "s";
    piece.style.animationDuration = Math.random() * 2 + 2 + "s";
    confettiContainer.appendChild(piece);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

function showCompletion() {
  let completedLevels = 0;
  for (let i = 0; i < totalLevels; i++) {
    const savedCode = localStorage.getItem(`gridLevelCode_${i}`);
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
            <p>You've mastered the Grid!</p>
            <p><strong>Final Score: ${score}%</strong></p>
            <p>Levels completed: ${completedLevels}/${totalLevels}</p>
            <br>
            <button class="btn btn-check" onclick="location.reload()">🔄 Play Again</button>
            <br><br>
            <a href="index.html" class="btn btn-prev" style="text-decoration:none; display:inline-block;">🏠 Home</a>
        </div>
    `;
  document.body.appendChild(modal);
  createConfetti();
}

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
