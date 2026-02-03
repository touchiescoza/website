# Implementation Plan: League Detail Pages

## Overview

This implementation plan breaks down the league detail pages feature into discrete coding tasks. Each task builds on previous work. The implementation uses Next.js App Router with TypeScript and leverages existing UI components.

## Tasks

- [x] 1. Create utility functions for league data access
  - Create `app/lib/leagues.ts` file
  - Implement `generateSlug(name: string): string` function to convert league names to URL-friendly slugs
  - Implement `getActiveLeagues(): League[]` function to filter active leagues from data
  - Implement `getLeagueBySlug(slug: string): League | undefined` function to retrieve leagues by slug
  - Implement `getAllLeagueSlugs(): string[]` function for static generation
  - _Requirements: 1.2, 2.1, 2.3, 5.1_

- [x] 2. Create dynamic route structure for league detail pages
  - Create `app/leagues/[slug]/` directory
  - Create `app/leagues/[slug]/page.tsx` file with basic page component structure
  - Implement `generateStaticParams()` function using `getAllLeagueSlugs()`
  - Implement async params handling for Next.js 15+
  - Add `notFound()` call when league is not found
  - _Requirements: 1.1, 1.3, 2.1, 8.1_

- [x] 3. Implement SEO metadata generation
  - Implement `generateMetadata()` function in the page component
  - Generate page title using format "[League Name] | Touchies"
  - Set meta description from league description
  - Add Open Graph metadata with title, description, and image
  - Handle metadata for not-found cases
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 4. Implement hero section with league image and title
  - Add PageHeader component with breadcrumb navigation (Home > Leagues > League Name)
  - Create hero section with Next.js Image component for league image
  - Add gradient overlay for text readability
  - Display league name as h1 heading
  - Display league type badge using existing Badge component
  - Map league type codes to display labels (6_down → "6 Down", etc.)
  - _Requirements: 3.1, 3.3, 3.6, 9.1_

- [x] 5. Implement main content layout with description and features
  - Create responsive grid layout (1 column mobile, 3 columns desktop)
  - Add description section in a Card component spanning 2 columns on desktop
  - Add features section in a Card component with grid layout for feature list
  - Display all features with checkmark icons
  - _Requirements: 3.2, 3.7_

- [x] 6. Implement sidebar with league details
  - Create league details Card in sidebar
  - Display schedule information (day and time)
  - Display location information (name and address)
  - Display skill level
  - Display season information (duration, start date, registration fee)
  - Apply visual emphasis to registration fee with green color
  - _Requirements: 3.4, 3.5, 3.8, 3.9_

- [x] 7. Implement contact information section
  - Create contact Card in sidebar
  - Conditionally render email as mailto link if present
  - Conditionally render phone as tel link if present
  - Conditionally render website as external link if present
  - Add appropriate icons for each contact method
  - Apply hover effects with green color transition
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 8. Implement call-to-action button
  - Add "Join This League" Button component in sidebar
  - Make button full-width with primary variant
  - Configure button to open email client with pre-filled subject when clicked
  - Use league contact email if available
  - _Requirements: 5.3_

- [x] 9. Update leagues listing page with links to detail pages
  - Import `generateSlug` function in `app/leagues/page.tsx`
  - Wrap league cards with Next.js Link components
  - Set href to `/leagues/${generateSlug(league.name)}`
  - Add hover effects to indicate clickability
  - Ensure only active leagues are linked
  - _Requirements: 9.2_

- [x] 10. Final integration and manual testing checkpoint
  - Manually test navigation from leagues listing to detail pages
  - Verify 404 page displays for invalid slugs
  - Test responsive layout on different screen sizes
  - Verify all contact links work correctly
  - Ensure images load properly
  - Check SEO metadata in browser dev tools

## Notes

- All tasks are required for comprehensive implementation
- Each task references specific requirements for traceability
- The implementation leverages existing UI components (Card, Badge, Button, PageHeader) for consistency
