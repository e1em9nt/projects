# Country Explorer

## Description  
**Country Explorer** is an interactive web app built with **Next.js 15** and **React 19** that lets you explore the world at your fingertips.  
You can search for countries, filter them by region, view detailed information, discover a random country, and build a personal list of favorites.  
The app supports both **light and dark themes** and includes a custom 404 page.

## Two Implementations
1. **`pages-router/`** → built with **Next.js Pages Router**.  
   - The original implementation.  
   - Uses `pages/` directory for routing.  
   - Styled with CSS Modules + global CSS.  

2. **`app-router/`** → rewritten with **Next.js App Router**.  
   - Modern implementation with `app/` directory.  
   - Leverages **React Server Components**, `layout.tsx`, `loading.tsx`, `not-found.tsx`.  
   - Improved structure and separation of concerns.  

Both apps share the same **features**, but differ in how they’re structured according to the router paradigm.

## Features
- **Search by name** – filter countries dynamically
- **Filter by region** – choose continents/regions from a dropdown
- **Country detail page** – see capital, population, borders, languages, currencies
- **Favorites** – mark countries you like and revisit them later
- **Random country generator** – discover a random country instantly
- **Light/Dark theme toggle** – persists using `localStorage`
- **Custom 404 page** – friendly error handling when a country isn’t found

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (Pages Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: CSS variables (light/dark themes)
  - `pages-router/`: CSS Modules  
  - `app-router/`: Global CSS 
- **Language**: Typescript 5
- **Data Source**: [REST Countries API](https://restcountries.com/)
- **State Management**: React `useState`, `useEffect`, localStorage
- **Tooling**: ESLint

## How to Run the Project
**Prerequisites**: Make sure you have Node.js and npm installed on your machine.

1. **Clone the Repository and Navigate to Project Folder**:
```bash
git clone https://github.com/e1em9nt/projects.git
```
for Pages Router:
```bash
cd country-explorer/pages-router
```
for App Router:
```bash
cd country-explorer/app-router
```
2. **Install Dependencies**:
```bash
npm install
```
3. **Run the Development Server**:
```bash
npm run dev
```
4. **Build for Production**
```bash
npm run build
npm start
```

## Project Structure
```bash
country-explorer/
├── app-router/        # Next.js 15 App Router version
│   ├── src/
│   │   ├── app/           # Routing via App Router
│   │   ├── components/    # Shared UI components
│   │   ├── helpers/       # Helper functions
│   │   ├── hooks/         # Custom hooks (favorites, color scheme)
│   │   ├── lib/           # Constants
│   ├── package.json        # Dependencies and scripts
│   ├── package-lock.json   # Lock file for exact dependency versions
│   ├── tsconfig.json       # TypeScript configuration
│   └── eslint.config.mjs   # Linting rules
│
├── pages-router/      # Next.js 15 Pages Router version
│   ├── src/
│   │   ├── pages/              # Next.js Pages Router (index, favorites, random, [name], etc.)
│   │   ├── components/         # Reusable UI components (CountryCard, CountriesList, etc.)
│   │   ├── helpers/            # Helper functions
│   │   ├── hooks/              # Custom hooks (color scheme toggler)
│   │   ├── lib/                # Constants
│   │   ├── styles/             # CSS Modules + global styles
│   ├── package.json        # Dependencies and scripts
│   ├── package-lock.json   # Lock file for exact dependency versions
│   ├── tsconfig.json       # TypeScript configuration
│   └── eslint.config.mjs   # Linting rules
│
└── README.md          # This file
```

## Known Limitations & Edge Cases
- **Data fetching**: Uses fetch from the REST Countries API. No caching layer (e.g., React Query or SWR). Some endpoints may be slow.
- **Error handling**: Uses alert() in some cases that is not user-friendly.
- **Favorites persistence**: Stored only in localStorage. Not sharable between devices or browsers.
- **Accessibility**: Some ARIA attributes and keyboard navigation improvements are possible.
- **Testing**: No automated tests (Jest/React Testing Library) currently included.
- **No results**: Searching for a non-existent country should show "No results".

## Possible Improvements
- User authentication + sync favorites across devices
- Add pagination for large country lists.
- Integrate SWR/React Query for caching & revalidation
- Advanced filtering (by population, currency, etc.)
- Add unit & integration tests
