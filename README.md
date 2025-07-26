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
- 📁 Asset upload with file metadata (name, size, type)
- 🌓 Light/Dark mode toggle with localStorage memory
- 🧱 Responsive design with smooth transitions (Framer Motion)
- 🧪 ESLint and TypeScript strict mode enforcement

---

## 🧠 Tech Stack

| Tech                           | Role                              |
| ------------------------------ | --------------------------------- |
| **React + TypeScript**         | Core frontend framework           |
| **Zustand**                    | Global state and onboarding steps |
| **Zod + React Hook Form**      | Schema validation + form handling |
| **Tailwind CSS**               | Design system and theming         |
| **Framer Motion**              | Animations and page transitions   |
| **Vite**                       | Build tool and local dev server   |
| **React Router**               | Routing between views             |
| **ESLint + typescript-eslint** | Linting and code quality          |

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

## 🧪 End-to-End Testing

ClientFlow will use **Cypress** for reliable E2E testing. The suite is being set up so that each PR and every push to `main` runs checks via **GitHub Actions**.

**Currently tested:**

- ✅ **Home** (`/`) → basic render & CTA navigation to **Login** (`/login`)
- ✅ **Login** → mock email sign-in sets a `user` in state and redirects to **Onboarding**
- ✅ **Onboarding flow** → Steps 1–5 validate with **Zod** + `react-hook-form`
- ✅ **Route guards** → visiting `/onboarding` or `/dashboard` without a `user` redirects to `/login`
- ✅ **Theme persistence** → toggle saves to `localStorage` and applies `documentElement.classList('dark')`
- ✅ **Asset upload** → file list renders with name and size; metadata stored in state
- ✅ **State persistence** → onboarding progress saved via Zustand `persist` (key: `clientflow-onboarding`)

**Coming soon:**

- 🧭 URL-friendly step routing (deep-linking / refresh-safe)
- 📤 Export responses (JSON) + PDF/screenshot smoke checks
- ⚙️ Production build smoke tests with `vite preview`
- 🔒 Upload hardening (basic file-type restrictions)
- 📷 Inline file previews

🧪 **CI status:** [View on GitHub Actions →](https://github.com/quim-romero/clientflow/actions)

---

## ♿ Accessibility & ⚡ Performance

- **Accessibility:** planned for future versions.
- **Performance:** Lighthouse (LHCI) runs against the production build.  
  _Goal: keep FCP/LCP in the green on the homepage._

![Lighthouse](./public/lighthouse.png)

> Generate locally with: npm run build && npm run lh:report  
> Reports are saved to ./lhci/.

---

## 📸 Screenshots

| Home                            | Onboarding                                  | Dashboard                                 |
| ------------------------------- | ------------------------------------------- | ----------------------------------------- |
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
