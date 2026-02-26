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

## Pages
- `/` - Home page (hero, why bristlecone, testimonials, CTA)
- `/privacy-policy` - Privacy Policy (static legal page)

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to create a production build
- Run `npm run check` for TypeScript type checking

## Configuration
- The development server binds to `0.0.0.0:5000` and allows all hosts for Replit compatibility
- Static builds are output to the `dist/` directory

## Mobile Responsiveness
The site is fully mobile-responsive with the following design decisions:
- **Touch targets**: All buttons have minimum 44px height for accessibility
- **Typography scaling**: Uses progressive sizing (text-xl -> sm:text-2xl -> md:text-3xl -> lg:text-4xl)
- **Grid breakpoints**: 
  - Mobile: 1 column
  - Small (640px+): 2 columns
  - Medium (768px+): Varies by section
  - Large (1024px+): Full desktop layouts
- **Spacing**: Responsive padding (p-4 -> sm:p-6 -> md:p-8) and section margins
- **Overflow**: `overflow-x-hidden` applied globally to prevent horizontal scrolling
