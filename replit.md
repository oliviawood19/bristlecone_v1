# Bristlecone Website

## Overview
A React frontend website built with Vite, using Tailwind CSS for styling and various Radix UI components for the UI.

## Project Structure
- `client/` - React frontend source code
  - `src/` - React components and application code
  - `public/` - Static assets
  - `index.html` - HTML entry point
- `attached_assets/` - Project assets
- `dist/` - Build output directory
- `vite.config.ts` - Vite configuration
- `vite-plugin-meta-images.ts` - Custom Vite plugin for meta images

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui components
- **Routing**: wouter
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Framer Motion

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to create a production build
- Run `npm run check` for TypeScript type checking

## Configuration
- The development server binds to `0.0.0.0:5000` and allows all hosts for Replit compatibility
- Static builds are output to the `dist/` directory
