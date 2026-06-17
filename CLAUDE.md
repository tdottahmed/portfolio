# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Laravel 12 + Inertia.js + React 19 + Tailwind CSS 3. This is a personal portfolio site for "Tanbir Ahmed" with a full admin panel for managing all content.

## Commands

**Start dev environment (all services concurrently):**
```bash
composer run dev
```
This runs Laravel server, queue worker, Pail log viewer, and Vite — all in one terminal.

**First-time setup:**
```bash
composer run setup
```

**Run tests:**
```bash
composer run test
# or a single test:
php artisan test --filter=TestName
```

**Lint PHP:**
```bash
./vendor/bin/pint
```

**Build frontend assets:**
```bash
npm run build
```

**Run migrations:**
```bash
php artisan migrate
```

**Storage symlink (required for uploaded file serving):**
```bash
php artisan storage:link
```

## Architecture

### Data Flow

All pages use Inertia.js — Laravel controllers return `Inertia::render('PageName', [...data...])`, and the React frontend receives props directly (no separate API layer). Ziggy provides named route helpers in JS via the `route()` function.

### Settings System

Site content (hero text, about section, profile photo, etc.) is stored in a key-value `settings` table where each row has a `key` and a JSON `payload` column. The admin panel edits these via `Admin/SettingController`. Public controllers load settings with `Setting::all()->pluck('payload', 'key')` and pass the result to Inertia.

### Admin vs. Public Controllers

- `app/Http/Controllers/` — public-facing, read-only (invokable single-action or index/show only)
- `app/Http/Controllers/Admin/` — full CRUD, protected by `auth` + `verified` middleware, prefixed `/admin`

### AI Content Generation

`app/Services/GeminiService.php` wraps two Google APIs:
- **Gemini Flash** (`gemini-flash-latest`) for text generation (project details, blog posts, experience, education, services)
- **Imagen 4.0** (`imagen-4.0-generate-preview-06-06`) for image generation (requires paid Gemini API plan)

Admin controllers expose a `generate` POST route (e.g. `admin.projects.generate`) that calls this service. The key is set via `GEMINI_API_KEY` in `.env`.

### File Uploads

`app/Traits/FileUploadTrait.php` handles uploads to the `public` disk under named subdirectories (e.g. `settings/hero`, `projects`). Files are served via `/storage/` paths. Old files are deleted on replacement.

### Frontend Layout

- `MainLayout.jsx` — wraps all public pages; includes Navbar, Footer, Background (animated), and BottomNav (mobile)
- `AdminLayout.jsx` — wraps all admin panel pages
- `resources/js/Components/Landing/` — section components (Hero, Skills, Projects, Services, etc.) rendered by `Home.jsx`

### Theme

Dark mode is the default. `useTheme` hook (in `Hooks/useTheme.js`) reads/writes `localStorage('theme')` and toggles `.dark`/`.light` class on `<html>`. Tailwind's `darkMode: "class"` is configured. All colors in `tailwind.config.js` use CSS custom properties (`--color-bg-primary`, `--color-accent-primary`, etc.).

### Environment

Key `.env` variables beyond standard Laravel:
- `DB_DATABASE=portfolio_new` (MySQL)
- `GEMINI_API_KEY` — required for AI content/image generation in admin
- `FILESYSTEM_DISK=local` / storage is public disk for uploads
