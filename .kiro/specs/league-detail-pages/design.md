# Design Document: League Detail Pages

## Overview

This design implements individual league detail pages with slug-based URLs for the Touchies touch rugby platform. The solution uses Next.js App Router dynamic routes to create SEO-friendly URLs (e.g., `/leagues/zoo-lake-touch-rugby-league`) that display comprehensive league information. The implementation focuses on simplicity by only supporting active leagues and leveraging existing UI components from the design system.

### Key Design Decisions

1. **Static Generation with Dynamic Routes**: Use Next.js `generateStaticParams` to pre-generate pages for all active leagues at build time, ensuring optimal performance
2. **Slug Generation Algorithm**: Convert league names to URL-friendly slugs using a deterministic algorithm (lowercase, replace spaces with hyphens, remove special characters)
3. **Active Leagues Only**: Filter out inactive leagues at the data layer, treating requests for inactive leagues as 404 errors
4. **Component Reuse**: Leverage existing UI components (Card, Badge, Button, PageHeader) to maintain visual consistency
5. **File-based Data Source**: Read from `data/leagues.json` directly, keeping the implementation simple without additional data layers

## Architecture

### Directory Structure

```
app/
├── leagues/
│   ├── page.tsx                    # Leagues listing (existing)
│   └── [slug]/
│       └── page.tsx                # League detail page (new)
├── components/
│   └── ui/
│       ├── Button.tsx              # Existing component
│       ├── Card.tsx                # Existing component
│       ├── Badge.tsx               # Existing component
│       └── PageHeader.tsx          # Existing component
├── types/
│   └── league.ts                   # Existing type definitions
├── data/
│   └── leagues.json                # Existing data source
└── lib/
    └── leagues.ts                  # New utility functions (new)
```

### Component Hierarchy

```
LeagueDetailPage
├── Metadata (Next.js metadata API)
├── PageHeader (breadcrumb navigation)
├── Hero Section
│   ├── Image (next/image)
│   └── League Name & Type Badge
├── Main Content Grid
│   ├── Description Section
│   ├── Details Card
│   │   ├── Schedule Information
│   │   ├── Location Information
│   │   ├── Skill Level
│   │   └── Season Information
│   ├── Features Card
│   │   └── Feature List
│   └── Contact Card
│       ├── Email Link
│       ├── Phone Link
│       └── Website Link
└── Call-to-Action Section
    └── Join League Button
```

## Components and Interfaces

### 1. Utility Functions (`app/lib/leagues.ts`)

This module provides data access and slug manipulation functions.

```typescript
import leaguesData from '@/app/data/leagues.json';
import { League } from '@/app/types/league';

/**
 * Converts a league name to a URL-friendly slug
 * Example: "Zoo Lake Touch Rugby League" -> "zoo-lake-touch-rugby-league"
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .trim();
}

/**
 * Returns all active leagues
 */
export function getActiveLeagues(): League[] {
  return leaguesData.filter(league => league.isActive);
}

/**
 * Finds a league by its slug
 * Returns undefined if not found or if league is inactive
 */
export function getLeagueBySlug(slug: string): League | undefined {
  const activeLeagues = getActiveLeagues();
  return activeLeagues.find(league => generateSlug(league.name) === slug);
}

/**
 * Returns all slugs for active leagues (used for static generation)
 */
export function getAllLeagueSlugs(): string[] {
  return getActiveLeagues().map(league => generateSlug(league.name));
}
```

### 2. League Detail Page (`app/leagues/[slug]/page.tsx`)

The main page component that renders league details.

```typescript
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getLeagueBySlug, getAllLeagueSlugs } from '@/app/lib/leagues';
import { Button, Card, Badge, PageHeader } from '@/app/components/ui';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all active leagues
export async function generateStaticParams() {
  const slugs = getAllLeagueSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const league = getLeagueBySlug(slug);
  
  if (!league) {
    return {
      title: 'League Not Found | Touchies',
    };
  }

  return {
    title: `${league.name} | Touchies`,
    description: league.description,
    openGraph: {
      title: `${league.name} | Touchies`,
      description: league.description,
      images: [league.image],
      type: 'website',
    },
  };
}

export default async function LeagueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const league = getLeagueBySlug(slug);

  // Return 404 if league not found or inactive
  if (!league) {
    notFound();
  }

  // Map league type to display label
  const leagueTypeLabels = {
    '6_down': '6 Down',
    'one_touch': 'One Touch',
    'beach_touch': 'Beach Touch',
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <PageHeader 
        title={league.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Leagues', href: '/leagues' },
          { label: league.name, href: '#' },
        ]}
      />

      {/* Hero Section with Image */}
      <section className="relative h-[400px] w-full">
        <Image
          src={league.image}
          alt={league.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Badge variant="primary" className="mb-4">
              {leagueTypeLabels[league.leagueType]}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {league.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description - Full Width on Mobile, 2 Columns on Desktop */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-4">About This League</h2>
              <p className="text-gray-700 leading-relaxed">{league.description}</p>
            </Card>

            {/* Features */}
            <Card className="mt-8">
              <h2 className="text-2xl font-bold mb-4">League Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {league.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar - Details and Contact */}
          <div className="space-y-6">
            {/* League Details */}
            <Card>
              <h3 className="text-xl font-bold mb-4">League Details</h3>
              
              <div className="space-y-4">
                {/* Schedule */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-1">Schedule</h4>
                  <p className="text-gray-900">
                    {league.schedule.day}s at {league.schedule.time}
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-1">Location</h4>
                  <p className="text-gray-900">{league.location.name}</p>
                  <p className="text-gray-600 text-sm">{league.location.address}</p>
                </div>

                {/* Skill Level */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-1">Skill Level</h4>
                  <p className="text-gray-900">{league.skillLevel}</p>
                </div>

                {/* Season Info */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-1">Season Information</h4>
                  <p className="text-gray-900">Duration: {league.seasonInfo.duration}</p>
                  <p className="text-gray-900">Starts: {league.seasonInfo.startDate}</p>
                  <p className="text-gray-900 font-semibold text-green-600">
                    {league.seasonInfo.registrationFee}
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                {league.contact.email && (
                  <a 
                    href={`mailto:${league.contact.email}`}
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    📧 {league.contact.email}
                  </a>
                )}
                {league.contact.phone && (
                  <a 
                    href={`tel:${league.contact.phone}`}
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    📞 {league.contact.phone}
                  </a>
                )}
                {league.contact.website && (
                  <a 
                    href={league.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    🌐 Visit Website
                  </a>
                )}
              </div>
            </Card>

            {/* Call to Action */}
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full"
              onClick={() => {
                if (league.contact.email) {
                  window.location.href = `mailto:${league.contact.email}?subject=Interest in ${league.name}`;
                }
              }}
            >
              Join This League
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

### 3. Update Leagues Listing Page

The existing leagues listing page needs to link to detail pages.

```typescript
// In app/leagues/page.tsx
import Link from 'next/link';
import { generateSlug } from '@/app/lib/leagues';

// Within the league card mapping:
<Link href={`/leagues/${generateSlug(league.name)}`}>
  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
    {/* Existing card content */}
  </Card>
</Link>
```

## Data Models

The existing `League` interface in `app/types/league.ts` is sufficient for this implementation. No changes to the data model are required.

### Slug Generation Rules

The slug generation follows these rules:
1. Convert entire string to lowercase
2. Remove all special characters except spaces and hyphens
3. Replace one or more spaces with a single hyphen
4. Replace multiple consecutive hyphens with a single hyphen
5. Trim leading/trailing whitespace

Examples:
- "Zoo Lake Touch Rugby League" → "zoo-lake-touch-rugby-league"
- "Durban Beach Touch League" → "durban-beach-touch-league"
- "Cape Town One Touch League" → "cape-town-one-touch-league"




## Error Handling

### Invalid Slug Requests

When a user navigates to a slug that doesn't match any active league:
1. The `getLeagueBySlug` function returns `undefined`
2. The page component calls Next.js `notFound()` function
3. Next.js renders the default 404 page

### Missing Data Fields

The component handles optional contact fields gracefully:
- Email, phone, and website are conditionally rendered only if present
- The "Join League" button defaults to email contact if available
- If no contact methods exist, the button is still rendered but may not have an action

### Build-Time Data Loading

Since data is loaded from a static JSON file at build time:
- No runtime data fetching errors to handle
- Invalid JSON will cause build failure (fail-fast approach)
- Type safety ensures data structure compliance

## Testing Strategy

Manual testing should verify:
- Navigation from leagues listing to detail pages works
- Back button returns to leagues listing
- Contact links open correct applications (email client, phone dialer, browser)
- Responsive layout works on mobile, tablet, and desktop
- Images load correctly
- 404 page displays for invalid slugs
