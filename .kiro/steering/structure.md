# Project Structure & Architecture

## Directory Organization

### App Router Structure (`/app`)
```
app/
├── layout.tsx              # Root layout with fonts, metadata, and global structure
├── page.tsx                # Homepage with hero, news, and feature cards
├── globals.css             # Global styles and Tailwind imports
├── favicon.ico             # Site favicon
├── components/             # Reusable UI components
│   ├── ui/                 # Core UI components
│   │   ├── index.ts        # Barrel exports for UI components
│   │   ├── Button.tsx      # Button component with variants
│   │   ├── Card.tsx        # Card component for content display
│   │   ├── Badge.tsx       # Badge component for labels
│   │   ├── Hero.tsx        # Hero section component
│   │   └── PageHeader.tsx  # Page header component
│   └── layout/             # Layout-specific components
│       ├── Header.tsx      # Site header
│       ├── NavBar.tsx      # Navigation bar
│       └── Footer.tsx      # Site footer
├── contact/                # Contact page
├── events/                 # Events listing page
├── faq/                    # FAQ page
├── leagues/                # Leagues page
├── news/                   # News page
└── privacy/                # Privacy policy page
```

### Public Assets (`/public`)
- Static images (logos, hero images, icons)
- SVG icons and graphics

## Architecture Patterns

### Component Structure
- **UI Components**: Reusable, variant-based components in `app/components/ui/`
- **Layout Components**: Page structure components in `app/components/layout/`
- **Page Components**: Route-specific components in respective directories

### TypeScript Conventions
- **Interface Definitions**: Props interfaces defined inline with components
- **Type Safety**: Strict typing for all component props and data structures
- **Export Pattern**: Default exports for components, named exports for utilities

### Styling Approach
- **Tailwind Classes**: Utility-first approach with custom design system
- **Component Variants**: Style variants handled through props and conditional classes
- **Responsive Design**: Mobile-first responsive design patterns
- **Custom Properties**: Brand colors and spacing defined in `tailwind.config.ts`

### Data Patterns
- **Mock Data**: Static data arrays for development (see `events/page.tsx`)
- **Type Definitions**: Inline interfaces for data structures
- **State Management**: React state for component-level state

## File Naming Conventions
- **Components**: PascalCase (e.g., `Button.tsx`, `PageHeader.tsx`)
- **Pages**: lowercase with `page.tsx` suffix
- **Utilities**: camelCase for functions and utilities
- **Assets**: lowercase with descriptive names

## Import/Export Patterns
- **Barrel Exports**: `index.ts` files for clean imports
- **Next.js Imports**: Use Next.js optimized components (`next/image`, `next/link`)
- **Component Imports**: Destructured imports from barrel exports

## Code Organization Principles
- **Single Responsibility**: Each component has a focused purpose
- **Reusability**: UI components designed for multiple contexts
- **Accessibility**: Semantic HTML and ARIA attributes
- **Performance**: Optimized images, lazy loading, and efficient rendering