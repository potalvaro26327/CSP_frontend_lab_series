# Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)

## 🎯 Learning Goals
- Use boolean as a data type in expressions.
- Apply logical operators: AND (&&), OR (||), NOT (!).
- Understand short-circuit evaluation.
- Use `undefined` and `null` as data types.
- Explain immutability of primitive values.

---

## 📖 Pre-Lab Reading
- Open the included PDF: `003_JS _ Data Types in JavaScript-boolean, undefined & null and Immutability.pdf`
- Sections: Boolean, Undefined, Null, Immutability

---

## 🧰 Setup
- Run file with:
  ```bash
  node src/Lab003_BooleanUndefinedNull.js
  ```
- Edit only: `src/Lab003_BooleanUndefinedNull.js`

---

## 📝 Tasks
1. **Booleans**
   - Create a variable `isStudent = true`, `hasLicense = false`. Print both.
   - Print results of:
     - `true || false`
     - `true && false`
     - `!true`
2. **Short-circuit Evaluation**
   - Print result of `false && (5 > 2)` and explain why.
   - Print result of `true || (2 > 5)` and explain why.
3. **Undefined**
   - Declare a variable `let grade;` and print it.
   - What value do you see? Why?
4. **Null**
   - Create `let city = null;`. Print it.
   - Reassign `city = "Miami"` and print again.
5. **Immutability**
   - Create `let word = "hello";`
   - Try to change `word[0] = "H";` then print `word`.
   - Explain why the result did not change.
   - Reassign `word = "Hello";` and print it.

---

## 🚀 Stretch Goals
- Combine conditions: check if a number is between 10 and 20 using `&&`.
- Write a boolean expression that returns true if a variable is either `"Miami"` or `"Berlin"` using `||`.

---

## 🎟 Exit Ticket
Answer in 2–3 sentences each:
1. What is the difference between `null` and `undefined`?
2. What does immutability mean in terms of primitive values?
3. Why is short-circuit evaluation useful?
4. Which logical operator (`&&`, `||`, `!`) do you think you’ll use most often, and why?

---

## ✅ Submission Checklist
- [ ] All TODOs completed in `src/Lab003_BooleanUndefinedNull.js`
- [ ] Console output runs without errors
- [ ] Exit Ticket answered in this README
- [ ] Pushed to your fork & PR created to teacher repo
