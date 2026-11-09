# Utkarsh Jadhav — Portfolio

A responsive, editorial-style personal portfolio built with Next.js, TypeScript, Framer Motion, and custom CSS.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Deploy

Import this repository into Vercel and keep the default Next.js build settings. No environment variables are required for the current version.

## Personalise before publishing

- Update the LinkedIn destination in `components/portfolio.tsx` to the exact public profile URL.
- Review project descriptions and technology tags in `lib/projects.ts`.
- Add a preferred public contact email or contact form if you want visitors to reach you directly.

## Stack

- Next.js App Router + React + TypeScript
- Framer Motion
- Lucide React
- Tailwind CSS v4 (PostCSS) with custom design-system CSS

## Notes

Project cards link to the corresponding GitHub repositories. The site currently uses static project metadata so the portfolio remains fast and predictable without requiring a GitHub token or API key.
