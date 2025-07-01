# 🕶️ Re(d)act

A simple, interactive **PDF redaction tool** built with React, Fabric.js, and PDF-lib. Click, draw, redact — all in your browser.

![social-preview](./images/social-preview.jpg)

---

## 📚 Table of Contents

- [🕶️ Re(d)act](#️-redact)
  - [📚 Table of Contents](#-table-of-contents)
  - [🎬 Demo](#-demo)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚀 Getting Started](#-getting-started)
  - [🧑‍💻 Usage](#-usage)
  - [📄 License](#-license)

---

## 🎬 Demo

![demo](./images/demo.gif)

---

## ✨ Features

- 📄 Upload any PDF file
- 🖱️ Draw black redaction boxes with your mouse
- ⬅️ Undo the last redaction
- 💾 Export a redacted version of the original PDF
- 🖥️ Works entirely in-browser — no uploads, no privacy risk

---

## 🛠️ Tech Stack

- **TypeScript** — Type-safe development
- Framework
  - **React** — UI Framework
  - **Next.js** — App framework with file-based routing
- PDF Related
  - **Fabric.js** — Interactive canvas for redactions
  - **file-saver** — Download redacted files
  - **PDF-lib** — Modify PDF pages and save new versions
  - **react-pdf** — Render PDFs in the browser

```bash
pnpm add --save-exact react react-dom next
pnpm add --save-exact fabric file-saver pdf-lib pdfjs-dist react-pdf
pnpm add --save-exact --save-dev @types/react @types/node typescript
```

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

📝 Make sure you copy the pdf.worker.min.js to public/workers/ if needed:

```bash
mkdir -p public/workers
cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/workers/pdf.worker.min.js
```

## 🧑‍💻 Usage

1. Upload a .pdf file
2. Draw black boxes over the parts you want to redact
3. Click Export to download a redacted version

## 📄 License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

You may use, modify, and share it under the terms of this license. See LICENSE for details.
