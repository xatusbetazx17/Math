# MA025 Algebra Study Hub

A **mobile‑friendly** study site for MA025/Beginning Algebra with step‑by‑step, notebook‑style practice.

**Live site (after Pages is enabled):** `https://xatusbetazx17.github.io/Math/`

---

## What’s inside

- `index.html` — a lightweight landing page that works on **any device** (iOS/Android/Windows/macOS/Linux/Steam Deck). It embeds the study apps in a responsive frame and also lets users open them in a separate tab.
- `algebra_quiz_notebook.html` — Units **0–5** (Foundations).
- `algebra_units6_9_quiz.html` — Units **6–9** (Factoring → Quadratics).
- `references.html` — OER textbook mapping and **video links** for quick review.
  ## Study & Practice

- **Practice Exam 1 (interactive):** [`practice_exam1.html`](https://xatusbetazx17.github.io/Math/practice_exam1.html)  
  Multiple-choice, instant feedback, and notebook-style step-by-step solutions.

- **Random Practice Generator:** [`random_practice.html`](https://xatusbetazx17.github.io/Math/random_practice.html)  
  Build custom quizzes (linear equations, inequalities, slope, factoring with a=1 or a≠1 using the ac-method, and quadratics). Each item has detailed steps.

### Attribution
Skill explanations and topic structure align with *Beginning Algebra* OER (Units 5–9).  
Please see the LICENSE/References page for CC BY-NC-SA 4.0 attribution.  


Everything is **vanilla HTML/CSS/JS**, no frameworks, and should run in **all browsers**.

---

## Enable GitHub Pages (one‑time)

1. Push these files to the repository root on the `main` branch.
2. In your repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` and **Folder:** `/ (root)`
4. Click **Save**.  
   Your site will publish at:

```
https://xatusbetazx17.github.io/Math/
```

> If you move files later, re‑deploy by pushing a new commit.

---

## How to use

- Open the site and choose **Units 0–5** or **Units 6–9**.  
- Each question shows **step‑by‑step reasoning** like a real notebook.  
- On phones, rotate to **landscape** for more workspace; the page adapts automatically.

---

## Accessibility & compatibility

- Works with screen readers and keyboard (`Tab`/`Enter`).
- No third‑party cookies, trackers, or ads.
- Uses system fonts and respects the device **dark mode** setting.
- Tested with Chromium/WebKit/Gecko engines (Chrome, Safari, Firefox, Edge).

---

## Learning resources (OER)

This study site aligns with the free **Beginning Algebra** workbooks from the Open Textbook Collaborative:

- **Part I (Ch. 0–5)** – integers, fractions, order of operations, linear equations, graphing, systems, and polynomials.  
- **Part II (Ch. 6–9)** – factoring, rational expressions, radicals, and quadratics.

Review handouts for MA025 are also included/linked for extra practice.

---

## Contributing / making your own quizzes

- The two HTML study apps are self‑contained. To add new questions or units, open the HTML file and follow the inline comments.
- Want a new page per unit? Create `unit-<n>.html` and link it from `index.html`—no build tools required.

---

## License

Content from the OTC Beginning Algebra workbooks is used under a Creative Commons **CC BY‑NC‑SA 4.0** license (attribution required). Your original code in this repo may be MIT‑licensed; keep the existing `LICENSE` file or choose another OSI license that you prefer.
