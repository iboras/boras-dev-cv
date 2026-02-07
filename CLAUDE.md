# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal developer CV/portfolio site built with React 19, TypeScript, and Vite 7.

## Commands

- `npm run dev` — Start dev server with HMR
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — Run ESLint across the project
- `npm run preview` — Preview the production build locally

## Tech Stack

- **React 19** with TypeScript (strict mode enabled)
- **Vite 7** as build tool with `@vitejs/plugin-react` (Babel-based)
- **Tailwind CSS v4** with PostCSS + Autoprefixer
- **Zustand** for state management
- **Axios** for HTTP requests
- **React Router v7** for routing

## Architecture

The app is a standard React SPA. Entry point is `src/main.tsx` which renders `<App />` inside `<StrictMode>`. Source code lives entirely in `src/`.

## TypeScript Configuration

- Target: ES2022, strict mode with `noUnusedLocals` and `noUnusedParameters`
- `verbatimModuleSyntax` is enabled — use `import type` for type-only imports
- `erasableSyntaxOnly` is enabled — avoid enums (use `as const` objects instead) and parameter properties
