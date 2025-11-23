# HabitFlow - Frontend (Phase 1)

## Description

HabitFlow is a frontend-only demonstration of a habit & productivity tracker built for a frontend course. The app uses React, Bootstrap and static data (no backend).

## Pages

- Home
- About
- Features (Services)
- Contact
- Habit Detail (dynamic route: /habit/:id)

## How to run

1. `npx create-react-app habitflow-frontend`
2. Replace `src` and `public/index.html` with the provided files
3. `npm install react-router-dom bootstrap`
4. `npm start`

## Notes

- All data is static (see `src/data/habits.js`)
- Uses `useState`, `useEffect`, `useContext`, and props as required
- Deploy to GitHub Pages / Netlify / Vercel (frontend only)
