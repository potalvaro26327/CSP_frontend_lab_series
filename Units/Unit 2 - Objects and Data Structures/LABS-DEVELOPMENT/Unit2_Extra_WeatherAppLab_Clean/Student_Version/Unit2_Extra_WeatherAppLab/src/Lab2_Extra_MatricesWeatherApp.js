// ===========================================================
// Weather App Lab – Matrix Data Simulation (Student Version)
// 10×10 matrix + DOM rendering with emojis.
// COMPLETE THE TODOs. Do not modify constants.
// ===========================================================

// ✅ CONSTANTS
const SIZE = 10;        // 10×10 grid
const MIN_TEMP = 60;    // inclusive
const MAX_TEMP = 100;   // inclusive

// ✅ DOM REFERENCES
const gridEl = document.getElementById('grid');
const statsEl = document.getElementById('stats');
const generateBtn = document.getElementById('generateBtn');

// -----------------------------------------------------------
// STEP 1: Random Temperature
// TODO 1: Implement randomTemp() -> integer in [MIN_TEMP, MAX_TEMP]
function randomTemp() {
  // TODO: Use Math.random() and Math.floor()
  // return ...;
}

// -----------------------------------------------------------
// STEP 2: Build Weather Matrix
// TODO 2: Implement makeWeatherData(size) -> 2D array size×size filled with random temps
function makeWeatherData(size = SIZE) {
  // TODO: Create a matrix of numbers using nested loops
  // const grid = [];
  // for (...) {
  //   const row = [];
  //   for (...) { row.push(randomTemp()); }
  //   grid.push(row);
  // }
  // return grid;
}

// -----------------------------------------------------------
// STEP 3: Classify Temperatures
// TODO 3: Implement classify(temp) -> { emoji, cls }
// Rules: >=90 => 🔥 "hot", <=70 => ❄️ "cold", else => ☁️ "mild"
function classify(temp) {
  // TODO: Use if/else to return an object with keys { emoji, cls }
  // Example return { emoji: "☁️", cls: "mild" }
}

// -----------------------------------------------------------
// STEP 4: Render Grid to the DOM
// TODO 4: Implement render(grid)
// - Clear #grid
// - Create 10×10 .cell divs
// - For each temp, get {emoji, cls} from classify() and set text + class
function render(grid) {
  // TODO: gridEl.innerHTML = "";
  // TODO: nested loops to create and append .cell elements
}

// -----------------------------------------------------------
// STEP 5: Analyze Data
// TODO 5: Implement analyze(grid) -> { avg, min, max }
// Use nested loops to compute stats and return an object.
function analyze(grid) {
  // let sum = 0, count = 0, min = Infinity, max = -Infinity;
  // TODO: compute stats
  // const avg = ...;
  // return { avg, min, max };
}

// -----------------------------------------------------------
// STEP 6: Display Stats
// TODO 6: Implement renderStats(stats) -> write to #stats
// Example: "Avg: 82.3°F | Min: 61°F | Max: 99°F"
function renderStats({ avg, min, max }) {
  // TODO: statsEl.textContent = ...
}

// -----------------------------------------------------------
// STEP 7: Wire the Button
// Keep this handler. Call your functions in order.
// This will run when you complete TODOs above.
generateBtn.addEventListener("click", () => {
  // 1) Build data
  const data = makeWeatherData(SIZE);
  // 2) Render grid
  render(data);
  // 3) Analyze + display stats
  const stats = analyze(data);
  renderStats(stats);
});

/* ===========================================================
   🎟 EXIT TICKET
   1. Why do we need nested loops to analyze a 10×10 grid?
   2. How could you change classification thresholds without touching render()?
   3. What advantages does using emojis provide for debugging compared to numbers?
   4. How would you extend this lab to simulate multiple days of weather?
   =========================================================== */
