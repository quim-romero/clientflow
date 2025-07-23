# ClientFlow — Minimal Onboarding Flow for Agencies

![E2E Tests](https://github.com/quim-romero/clientflow/actions/workflows/ci.yml/badge.svg)

> _Smooth client onboarding, no friction. Just clarity, flow — and faster projects._

---

## 🧭 About ClientFlow

**ClientFlow** is a sleek, no-nonsense onboarding app designed to simplify how digital agencies and freelancers gather initial information from clients.

With a smooth, multi-step form flow and persistent state, it helps teams:
- 📥 Collect user and company details
- 🧭 Understand project goals, tools, and availability
- 📁 Upload relevant assets for faster kickoff
- 🌒 Adapt to user theme preferences (light/dark)
- 💾 Persist data locally for session continuity

Built with **React**, **Zustand**, **Zod**, and **Tailwind CSS**, it’s fast, minimal, and production-ready.

---

## 🚀 Live Preview

👉 [https://clientflow.quimromero.com](https://clientflow.quimromero.com)

---

## ✨ Features

- ✅ Multi-step onboarding flow with persistent progress
- ✍️ Collects user name, company, goals, preferences, and files
- 🧠 Zod-powered form validation (via `react-hook-form`)
- 📁 Asset upload with inline preview and file metadata
- 🌓 Light/Dark mode toggle with localStorage memory
- 🧱 Responsive design with smooth transitions (Framer Motion)
- 🧪 ESLint and TypeScript strict mode enforcement

---

## 🧠 Tech Stack

| Tech                       | Role                                |
|----------------------------|-------------------------------------|
| **React + TypeScript**     | Core frontend framework             |
| **Zustand**                | Global state and onboarding steps   |
| **Zod + React Hook Form**  | Schema validation + form handling   |
| **Tailwind CSS**           | Design system and theming           |
| **Framer Motion**          | Animations and page transitions     |
| **Vite**                   | Build tool and local dev server     |
| **React Router**           | Routing between views               |
| **ESLint + typescript-eslint** | Linting and code quality       |

---

## 🗂 Project Structure

- `src/`
  - `pages/` – Main routes: Home, Login, Onboarding, Dashboard
  - `components/` – Navbar, Footer, StepIndicator, etc.
  - `features/onboarding/` – All onboarding steps (1 to 5)
  - `store/` – Zustand store with persistent onboarding data
  - `hooks/` – Custom hooks (e.g. theme)
  - `styles/` – Tailwind CSS base and global styles
- `public/` – Favicon, fonts, and metadata
- `index.html` – Root HTML with fonts and meta
- `vite.config.ts` – Vite config with plugin-react
- `tsconfig.*.json` – TypeScript project configurations

---

## 🧪 End-to-End Testing (Planned)

ClientFlow will soon support **end-to-end testing** using [Cypress](https://www.cypress.io/).

Tests will cover:
- ✅ Onboarding flow step-by-step
- ✅ Form validation and persistence
- ✅ Navigation between routes
- ✅ Theme switching (light/dark)

> 🧰 Cypress setup and CI integration (e.g. GitHub Actions) will be added in future versions.

---

## 📸 Screenshots

| Home | Onboarding | Dashboard |
|------|------------|-----------|
| ![Home](./screenshots/home.png) | ![Onboarding](./screenshots/onboarding.png) | ![Dashboard](./screenshots/dashboard.png) |

---

## 🧩 Notes

- 🛠 Built as a **demo and starter project** for client onboarding
- 🧼 Uses clean, accessible markup and clear visual hierarchy
- 🚫 No database or backend integration — entirely local (can be extended easily)

---

## 📬 Contact

If you're looking for a frontend engineer to craft **clean, usable, thoughtful** onboarding flows:

- 📧 quim@quimromero.com  
- 🌐 [https://quimromero.com](https://quimromero.com)

---

> _ClientFlow helps makers move faster — by asking the right questions at the right time._
