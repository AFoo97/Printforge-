# PrintForge

PrintForge is a Next.js-based marketplace for discovering and browsing community-created 3D-printing models. Users can search for models, filter by category, sort results, paginate through listings, and open individual model detail pages.

## Overview

This project is designed as a lightweight 3D model catalog and browsing experience. It uses a local SQLite database to store model and category metadata, then renders the content through server components and dynamic routes in Next.js.

## Features

- Search models by name or description
- Sort by alphabetical order, popularity, or recency
- Browse by category
- Pagination for large result sets
- Detailed model pages with description, image, likes, and date added
- Responsive design with Tailwind CSS
- Seeded SQLite database for development use

## Tech Stack

- Next.js
- React
- TypeScript
- SQLite
- Tailwind CSS
- Node.js

## Project Structure

```text
app/
  about/
  3d-models/
  globals.css
  layout.tsx
  page.tsx
components/
  CategoriesNav.tsx
  ModelsBrowser.tsx
  ModelsGrid.tsx
  Navbar.tsx
  SearchForm.tsx
  SortControls.tsx
lib/
  categories.ts
  constants.ts
  db.ts
  models.ts
  data/
  seeds/
public/
  img/
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

The dev script automatically seeds the SQLite database and starts the Next.js development server.

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```
Starts the app and seeds the local database before launch.

```bash
npm run build
```
Creates a production build.

```bash
npm run start
```
Runs the production server.

```bash
npm run lint
```
Runs the project linter.

## Database

The app uses SQLite with a local file named `printforge.db` in the project root.

The database is seeded from files in `lib/data/` and scripts under `lib/seeds/`:

- `seed_models.ts` creates and populates the `models` table
- `seed_categories.ts` creates and populates the `categories` table

## App Flow

1. The app loads category data and renders navigation.
2. Users browse model listings from the SQLite database.
3. Query parameters control search, sorting, and pagination.
4. Individual model pages read the selected record by ID.

## Notes

This project is a front-end browsing app with a lightweight local data layer and is ideal for learning Next.js app routing, server components, search/filter logic, and SQLite integration.

## License

This project is for educational purposes and is not configured with a formal production license by default.
