# IELTS Practice Hub — Project Guide

## About the User
- Beginner learning web development — explain concepts clearly when making changes
- Building this step by step as a learning project
- Prefers being shown *where* things are in the code, not just what to change

## What This Project Is
A multi-page IELTS exam preparation website built with plain HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build tools, no frameworks, no npm — just files you open in a browser.

---

## File Structure

```
IELTSHub/
├── index.html        # Landing page — hero, 4 skill cards, CTA
├── speaking.html     # Speaking practice — Part 1/2/3, cue card timer
├── writing.html      # Writing practice — Task 1 & 2, word counter, timer
├── reading.html      # Reading practice — 2 passages, TFNG + MCQ, band estimate
├── vocabulary.html   # Flashcards (flip cards) + Quiz mode
├── dashboard.html    # Progress tracker — reads from localStorage
├── darkmode.js       # Shared dark mode toggle (loaded in <head> of every page)
├── darkmode.css      # Dark mode CSS overrides using .dark class on <html>
└── CLAUDE.md         # This file
```

---

## Features Built (Steps 1–8)

| Step | Feature | Key concepts introduced |
|------|---------|------------------------|
| 1 | Landing page | HTML structure, Tailwind utility classes |
| 2 | Speaking practice | JS tabs, `setInterval` countdown timer |
| 3 | Writing practice | `oninput` word counter, live progress bar |
| 4 | Vocabulary flashcards | CSS `perspective`/`rotateY` 3D flip, `@keyframes` |
| 5 | Progress dashboard | `localStorage`, `JSON.stringify/parse`, streak counter |
| 6 | Dark mode | CSS class overrides with `!important`, flash prevention |
| 7 | Hamburger menu + Quiz mode | Responsive `md:hidden`, shuffle logic, MCQ scoring |
| 8 | Reading practice | `position: sticky`, `scrollIntoView`, self-marking quiz |

---

## Key Content Locations (for edits)

| Content to change | File | JS variable / line to find |
|-------------------|------|---------------------------|
| Part 1 speaking questions | `speaking.html` | `const part1Questions` |
| Part 2 cue cards | `speaking.html` | `const cueCards` |
| Part 3 discussion questions | `speaking.html` | `const part3Questions` |
| Writing Task 1 prompts | `writing.html` | `const task1Prompts` |
| Writing Task 2 essay questions | `writing.html` | `const task2Prompts` |
| Vocabulary topics & words | `vocabulary.html` | `const topics` |
| Reading passages & questions | `reading.html` | `const passages` |
| Hero headline / CTA text | `index.html` | inside `<!-- Hero Section -->` |

### Cue card format (Part 2)
```js
{
  topic: "Describe a time when you helped someone.",
  points: ["Who you helped", "What the situation was", "How you helped", "How you felt"],
},
```

### Vocabulary word format
```js
{ word: "Resilience", pos: "noun", definition: "The ability to recover quickly from difficulties.", example: "Resilience is a key trait of successful entrepreneurs." },
```

---

## Architecture Decisions

- **No build tools** — Tailwind is loaded via CDN script tag. Fine for learning; would need a build step for production.
- **Dark mode** — Uses `.dark` class on `<html>` with `!important` CSS overrides in `darkmode.css`. `darkmode.js` runs in `<head>` before render to prevent flash.
- **localStorage key** — All progress data stored under the key `ieltshub`. Shape: `{ speaking, writing, reading, vocabulary, streak }`.
- **Shared nav pattern** — Each page has its own copy of the nav HTML (no server-side includes). When adding nav links, update all 6 pages.
- **Dark mode coverage** — Gradient sections (hero banners) intentionally stay coloured in dark mode. Only neutral grays/whites are overridden.

---

## localStorage Data Shape

```json
{
  "speaking":   { "sessions": 3, "lastDate": "ISO string" },
  "writing":    { "sessions": 2, "task1": 1, "task2": 1, "lastDate": "ISO string" },
  "reading":    { "sessions": 1, "lastDate": "ISO string" },
  "vocabulary": {
    "Environment": { "know": 4, "learning": 2, "total": 6, "reviewed": 6, "lastDate": "ISO string" }
  },
  "streak":     { "count": 3, "lastDate": "Mon Jan 01 2026" }
}
```

---

## Suggestions for Future Steps

### Step 9 — Deploy online (recommended next)
Host on **GitHub Pages** or **Netlify** for free — gives a real shareable URL.
- Teaches: `git init`, `git commit`, `git push`, GitHub basics
- Netlify: drag-and-drop the `IELTSHub` folder at netlify.com — live in 30 seconds

### Step 10 — Listening Practice
Complete all 4 IELTS skills using the **Web Speech API** (`speechSynthesis`) to read sentences aloud.
- Teaches: browser APIs, `SpeechSynthesisUtterance`, audio controls

### Step 11 — Full Mock Test Mode
Chain Reading + Writing + Listening into a single timed 2-hour session with a results summary.
- Teaches: multi-step flows, `sessionStorage` vs `localStorage`

### Step 12 — Form validation & Contact page
A working contact/feedback form with client-side validation.
- Teaches: `<form>`, `required`, regex validation, preventing default submit

### Step 13 — Introduce a backend (Node.js + Express)
Move progress data from localStorage to a real server/database so any device can access it.
- Teaches: HTTP requests, `fetch()`, REST APIs, JSON responses

### Step 14 — User authentication
Allow students to create accounts and log in.
- Teaches: sessions/tokens, password hashing (bcrypt), security basics

---

## Things to Be Careful About

- When editing any nav, remember all **6 HTML files** have their own copy — update all of them
- The `darkmode.js` `<script>` tag must come **before** Tailwind in `<head>` to prevent white flash on page load
- Vocabulary quiz pulls wrong answers from **all topics combined** — if adding a new topic, words automatically become available as distractors
- Reading `submitAnswers()` saves to localStorage on every submission — dashboard reading count increments once per page load submission
