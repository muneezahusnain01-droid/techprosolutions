# TechProSolutions

Marketing website for **TechProSolutions**, a software development agency offering three services: **Web Development**, **CMS Development**, and **SEO**.

Built with a warm, editorial visual identity — an oversized-typography layout with a terracotta-based palette that ships in both light (**Clay & Petrol**) and dark (**Ember**) themes.

## Tech stack

- **[Vite](https://vite.dev/)** + **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (`@tailwindcss/vite`)
- **[React Router](https://reactrouter.com/)** for multi-page routing
- **[Web3Forms](https://web3forms.com/)** for contact-form delivery
- **ESLint** for linting

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# then open .env and paste your Web3Forms access key

# 3. Start the dev server
npm run dev
```

The app runs at `http://localhost:5173`.

### Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server (HMR)      |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Contact form

The contact form submits to [Web3Forms](https://web3forms.com/). To enable delivery:

1. Get a free access key by entering your email at [web3forms.com](https://web3forms.com).
2. Add it to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. Restart the dev server (Vite only reads `.env` at startup).

`.env` is gitignored; `.env.example` is tracked as a reference.

## Project structure

```
src/
├─ components/
│  ├─ layout/     # Navbar, Footer, Layout, ScrollToTop
│  ├─ ui/         # Button, Container, Section, PageHero, Logo, ThemeToggle…
│  ├─ home/       # Home page sections (Hero, Services, Process, Testimonials…)
│  ├─ services/   # ServiceTemplate (renders a service page from data)
│  └─ contact/    # ContactForm
├─ data/          # site.js, services.js, projects.js, team.js — all editable content
├─ pages/         # Home, Services (+3), Portfolio, About, Contact, NotFound
├─ App.jsx        # Routes
├─ main.jsx       # Entry + Router
└─ index.css      # Design tokens (themes) + editorial utilities
```

## Editing content

Site copy lives in **`src/data/`** — update these files to change content without touching components:

- `site.js` — brand info, nav links, service summaries, socials
- `services.js` — full service-page content (intro, deliverables, process, tools)
- `projects.js` — portfolio projects
- `team.js` — team members, values, about stats

## Theming

Color tokens are defined in `src/index.css` as CSS variables and mapped through Tailwind's `@theme inline`, so themes swap at runtime:

- **Light — Clay & Petrol:** warm paper, terracotta primary, petrol secondary
- **Dark — Ember:** espresso, terracotta primary, lifted petrol secondary

The navbar theme toggle persists the choice to `localStorage` and respects the OS preference by default.
