# Lab 005 – Mini Project (Cumulative Review: Lessons 001–004)

## 🎯 Learning Goals
- Apply knowledge of JavaScript basics in one project.
- Use variables and constants effectively.
- Work with numbers, strings, booleans, null/undefined.
- Use conditionals (`if`, `else if`, `switch`) for decision-making.
- Use loops (`for`, `while`, `do..while`) for repetition.
- Practice clean coding with comments and naming conventions.

---

## 📖 Pre-Lab Preparation
Review the following lessons:
- Lab 001 – JavaScript Intro
- Lab 002 – Numbers & Strings
- Lab 003 – Booleans, Undefined, Null & Immutability
- Lab 004 – Conditionals & Loops

---

## 🧰 Setup
- Run file with:
  ```bash
  node src/Lab005_MiniProject.js
  ```
- Edit only: `src/Lab005_MiniProject.js`

---

## 📝 Project Tasks
You will build a **Simple User Simulation** program that uses all concepts so far.

1. **Introduce Yourself**
   - Print your name, age, and favorite food using variables.
   - Use both `let` and `const`.

2. **Number Practice**
   - Create two number variables and perform:
     - Addition, subtraction, multiplication, division.
     - Exponentiation and modulo.
   - Print the results with clear messages.

3. **Boolean Logic**
   - Create two boolean variables (e.g., `isStudent`, `hasLicense`).
   - Print results of:
     - `isStudent && hasLicense`
     - `isStudent || hasLicense`
     - `!isStudent`

4. **Null & Undefined**
   - Declare a variable without assigning (undefined).
   - Create a variable with `null`.
   - Print both and explain in a comment the difference.

5. **Conditionals**
   - Ask the user’s (hardcoded) age.
   - Print:
     - `"Teen discount"` if age ≤ 16
     - `"Senior discount"` if age ≥ 65
     - `"No discount"` otherwise

   - Add a **switch statement** for favorite color:
     - `"blue"` → `"You like the ocean"`
     - `"green"` → `"You like nature"`
     - default → `"Interesting choice!"`

6. **Loops**
   - Print numbers 1 to 10 using a `for` loop.
   - Print `"X is even"` or `"X is odd"` for numbers 1–10 using a `while` loop.
   - Print numbers 1–5 with a `do..while`.

---

## 🚀 Stretch Goals
- Write a backwards loop (10 → 1).
- Modify the even/odd loop to skip multiples of 3.
- Create a mini “menu” system using `switch` that prints messages for 3 different options.

---

## 🎟 Exit Ticket
Answer in 2–3 sentences each:
1. What was the hardest part of combining everything into one project?
2. Why is it useful to practice numbers, strings, and booleans together instead of separately?
3. Which loop (`for`, `while`, `do..while`) felt the most natural in this project?
4. If you could add one more feature, what would it be?

---

## ✅ Submission Checklist
- [ ] All TODOs completed in `src/Lab005_MiniProject.js`
- [ ] Console output runs without errors
- [ ] Exit Ticket answered in this README
- [ ] Pushed to your fork & PR created to teacher repo
