// ===========================================================
// Weather App Lab – Matrix Data Simulation (Teacher Version)
// Full console + DOM emoji visualization solution.
// ===========================================================

const SIZE = 10;
const MIN_TEMP = 60;
const MAX_TEMP = 100;

const gridEl = document.getElementById('grid');
const statsEl = document.getElementById('stats');
const generateBtn = document.getElementById('generateBtn');

function randomTemp() {
  return Math.floor(Math.random() * (MAX_TEMP - MIN_TEMP + 1)) + MIN_TEMP;
}

function makeWeatherData(size = SIZE) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => randomTemp())
  );
}

function classify(temp) {
  if (temp >= 90) return { emoji: "🔥", cls: "hot" };
  if (temp <= 70) return { emoji: "❄️", cls: "cold" };
  return { emoji: "☁️", cls: "mild" };
}

function render(grid) {
  gridEl.innerHTML = "";
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const temp = grid[r][c];
      const { emoji, cls } = classify(temp);
      const cell = document.createElement("div");
      cell.className = `cell ${cls}`;
      cell.textContent = emoji;
      gridEl.appendChild(cell);
    }
  }
}

function analyze(grid) {
  let sum = 0, count = 0, min = Infinity, max = -Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const t = grid[r][c];
      sum += t; count++;
      if (t < min) min = t;
      if (t > max) max = t;
    }
  }
  const avg = Math.round((sum / count) * 10) / 10;
  return { avg, min, max };
}

function renderStats({ avg, min, max }) {
  statsEl.textContent = `Avg: ${avg}°F | Min: ${min}°F | Max: ${max}°F`;
}

generateBtn.addEventListener("click", () => {
  const data = makeWeatherData(SIZE);
  render(data);
  const stats = analyze(data);
  renderStats(stats);
});

console.log("Teacher version ready. Click Generate Weather.");

/* ===========================================================
   🎟 EXIT TICKET (Teacher)
   1. How would you refactor analyze() to support weighted averages?
   2. What is the time complexity to render and analyze a 10×10 grid?
   3. Where could you inject thresholds so UI and classification are decoupled?
   4. Propose a way to simulate day-over-day change efficiently.
   =========================================================== */
