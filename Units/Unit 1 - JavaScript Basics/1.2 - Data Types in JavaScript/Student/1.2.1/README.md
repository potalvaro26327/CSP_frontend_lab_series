# Lab 002 – Data Types in JavaScript (Numbers & Strings)

## 🎯 Learning Goals
- Differentiate between primitive and non-primitive data types.
- Use numbers as a data type (integers, floats, NaN, Infinity).
- Apply math and assignment operators in expressions.
- Use strings and practice with common string methods.
- Handle special characters, string length, and concatenation.

---

## 📖 Pre-Lab Reading
- Open the included PDF: `002_JS _ Data Types in JavaScript - number & string.pdf`
- Sections: Numbers, Expressions, Strings, String Methods

---

## 🧰 Setup
- Run file with:
  ```bash
  node src/Lab002_DataTypes.js
  ```
- Edit only: `src/Lab002_DataTypes.js`

---

## 📝 Tasks
1. **Numbers**
   - Create a variable `age = 34` and `price = 12.99`. Print both.
   - Divide `"Sandra"` by 2, store result in `whatIsThis`, and print it. (Expect `NaN`).
2. **Math Operations**
   - Print results of: `2 + 2`, `4 - 2`, `3 * 2`, `6 / 2`.
   - Use exponentiation (`2 ** 3`) and modulo (`7 % 2`).
3. **Assignment Operators**
   - Create `let score = 10`.  
   - Use `+=`, `-=`, `*=`, `/=` to change its value. Print after each step.
4. **Expressions**
   - Write and print the result of `((7 + 5) / 3) - 8`.
   - Confirm operator precedence by calculating `2 + 2 * 2` vs `(2 + 2) * 2`.
5. **Strings**
   - Create a string with your name in **three ways**: single quotes, double quotes, backticks.
   - Use backticks to print: `"Hello, my name is <name> and I am <age> years old."`
6. **String Properties & Methods**
   - Create `let greeting = "Hello there!";`
   - Print its `.length`.
   - Use `charAt(0)`, `charAt(5)`, and array indexing `[3]`.
   - Find the index of `"sad"` in `"Don't be sad, be happy!"`.
   - Use `.repeat()` to print `"la"` 5 times.
   - Slice `"Don't be sad, be happy!"` to return `"Don"` using `.substring()`, `.substr()`, and `.slice()`.

---

## 🚀 Stretch Goals
- Write a program that checks if a number is even using modulo (`%`).
- Use `.localeCompare()` to sort two city names (your choice).

---

## 🎟 Exit Ticket
Answer in 2–3 sentences each:
1. What’s the difference between primitive and non-primitive data types?
2. Why might `NaN` appear in your code?
3. What’s the advantage of using backticks over quotes for strings?
4. Which string method did you find most useful today, and why?

---

## ✅ Submission Checklist
- [ ] All TODOs completed in `src/Lab002_DataTypes.js`
- [ ] Console output runs without errors
- [ ] Exit Ticket answered in this README
- [ ] Pushed to your fork & PR created to teacher repo
