# 🖥️ Option B – GitHub Desktop Setup

This guide is for students who prefer using **GitHub Desktop** to manage their repositories instead of the Terminal.

---

## 🧱 Step 1 – Fork the Teacher Repository

1. Visit the official course repo:  
   **https://github.com/columbushs-labs/CSP_frontend_lab_series.git**
2. Click **Fork** → your GitHub account.

---

## 💻 Step 2 – Clone Your Fork with GitHub Desktop

1. Open **GitHub Desktop**.
2. Click **File → Clone Repository**.
3. Under the **URL** tab, paste:
   ```
   https://github.com/<your-username>/CSP_frontend_lab_series.git
   ```
4. Choose a save location (e.g., `Documents/CSP_frontend_lab_series`).
5. Click **Clone**.

---

## 🔗 Step 3 – Add the Teacher Repo as an Upstream Remote

1. In GitHub Desktop, go to **Repository → Repository Settings → Remotes**.
2. Click **Add**.
3. Name: `upstream`  
   URL: `https://github.com/columbushs-labs/CSP_frontend_lab_series.git`
4. Click **Save**.

You now have:
- `origin` → your fork (where you push your work)
- `upstream` → teacher repo (where updates come from)

---

## 🧩 Step 4 – Open in VS Code

1. In GitHub Desktop, click **Open in Visual Studio Code**.
2. You can now edit your labs directly in VS Code.

---

## 🚀 Step 5 – Run Your Code

- Navigate to your lab folder → `src/index.html`
- Right-click → **Open with Live Server** *(or open in Chrome)*
- Use DevTools → **Console** to view your program output.

---

## 🔁 Step 6 – Keep Your Repo Updated

When new labs or updates are released:
1. In GitHub Desktop, go to **Repository → Fetch origin** (to check for updates).
2. Then go to **Branch → Merge into Current Branch → upstream/main**.
3. Once merged, click **Push origin** to send updates to your fork.

This keeps your work synced with the teacher repo.

---

## 🧠 Step 7 – Submitting Labs (Pull Request)

1. After completing a lab, click **Commit to main** in GitHub Desktop.
2. Add a clear message (e.g., “Completed Lab 1.4 – Conditionals and Loops”).
3. Click **Push origin**.
4. On GitHub, click **Compare & pull request** to submit your work.

---

✅ **You’re done!** You can now manage, update, and submit labs using GitHub Desktop with no terminal commands required.

---
**Version:** v3.7  |  © 2025 AP Computer Science Principles

