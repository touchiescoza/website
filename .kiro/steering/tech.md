# Technology Stack

## Framework & Runtime
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety and development experience
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Custom Design System** - Defined in `tailwind.config.ts`
- **Geist Font Family** - Sans and mono variants from Vercel

## Development Tools
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing

## Build System & Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

## Key Dependencies
- **next/font** - Automatic font optimization
- **next/image** - Optimized image component
- **next/link** - Client-side navigation

## Configuration Files
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration with custom design system
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration

## Deployment
- Optimized for **Vercel** deployment
- Static generation and server-side rendering capabilities