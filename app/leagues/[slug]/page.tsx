import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getLeagueBySlug, getAllLeagueSlugs } from '@/app/lib/leagues';
import { Breadcrumb, Badge, Button } from '@/app/components/ui';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all active leagues at build time
 * This enables static generation for each league detail page
 */
export async function generateStaticParams() {
  const slugs = getAllLeagueSlugs();
  return slugs.map(slug => ({ slug }));
}

/**
 * Generate metadata for SEO optimization
 * Creates unique page titles, descriptions, and Open Graph metadata for each league
 * 
 * @param params - Route parameters containing the league slug
 * @returns Metadata object for Next.js
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Await params as required by Next.js 15+
  const { slug } = await params;
  
  // Retrieve league data by slug
  const league = getLeagueBySlug(slug);
  
  // Handle not-found case with appropriate metadata
  if (!league) {
    return {
      title: 'League Not Found | Touchies',
      description: 'The requested league could not be found.',
    };
  }

  // Generate canonical URL for the league page
  const canonicalUrl = `https://touchies.co.za/leagues/${slug}`;

  // Return comprehensive metadata for SEO and social sharing
  return {
    title: `${league.name} | Touchies`,
    description: league.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${league.name} | Touchies`,
      description: league.description,
      images: [
        {
          url: league.image,
          alt: league.name,
        },
      ],
      type: 'website',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${league.name} | Touchies`,
      description: league.description,
      images: [league.image],
    },
  };
}

/**
 * League Detail Page Component
 * Displays comprehensive information about a specific league
 * 
 * @param params - Route parameters containing the league slug
 */
export default async function LeagueDetailPage({ params }: PageProps) {
  // Await params as required by Next.js 15+
  const { slug } = await params;
  
  // Retrieve league data by slug
  const league = getLeagueBySlug(slug);

  // Return 404 if league not found or inactive
  if (!league) {
    notFound();
  }

  // Map league type codes to display labels
  const leagueTypeLabels: Record<string, string> = {
    '6_down': '6 Down',
    'one_touch': 'One Touch',
    'beach_touch': 'Beach Touch',
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Leagues', href: '/leagues' },
            { label: league.name, href: '#' },
          ]}
        />
      </div>

      {/* Hero Section with League Image */}
      <section className="relative h-[400px] w-full">
        <Image
          src={league.image}
          alt={league.name}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        
        {/* League Name and Badge */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Badge variant="primary" size="md" className="mb-4">
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
          {/* Description Section - Full Width on Mobile, 2 Columns on Desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-black mb-4">About This League</h2>
              <p className="text-gray leading-relaxed">{league.description}</p>
            </div>

            {/* Features Section */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-2xl font-bold text-black mb-4">League Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {league.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - League Details, Contact, and CTA */}
          <div className="space-y-6">
            {/* League Details Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-black mb-4">League Details</h3>
              
              <div className="space-y-4">
                {/* Schedule */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-dark mb-1">Schedule</h4>
                  <p className="text-black">
                    {league.schedule.day}s at {league.schedule.time}
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-dark mb-1">Location</h4>
                  <p className="text-black">{league.location.name}</p>
                  <p className="text-gray text-sm">{league.location.address}</p>
                </div>

                {/* Skill Level */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-dark mb-1">Skill Level</h4>
                  <p className="text-black">{league.skillLevel}</p>
                </div>

                {/* Season Information */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-dark mb-1">Season Information</h4>
                  <p className="text-black">Duration: {league.seasonInfo.duration}</p>
                  <p className="text-black">Starts: {league.seasonInfo.startDate}</p>
                  <p className="text-primary font-semibold mt-2">
                    {league.seasonInfo.registrationFee}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-black mb-4">Contact</h3>
              <div className="space-y-3">
                {/* Email - Conditionally rendered */}
                {league.contact.email && (
                  <a 
                    href={`mailto:${league.contact.email}`}
                    className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{league.contact.email}</span>
                  </a>
                )}

                {/* Phone - Conditionally rendered */}
                {league.contact.phone && (
                  <a 
                    href={`tel:${league.contact.phone}`}
                    className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{league.contact.phone}</span>
                  </a>
                )}

                {/* Website - Conditionally rendered */}
                {league.contact.website && (
                  <a 
                    href={league.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            </div>

            {/* Call-to-Action Button */}
            {league.contact.email ? (
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                href={`mailto:${league.contact.email}?subject=Interest in ${encodeURIComponent(league.name)}`}
              >
                Join This League
              </Button>
            ) : (
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled
              >
                Join This League
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
