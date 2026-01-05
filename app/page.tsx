import Link from 'next/link';
import { Hero, Card } from './components/ui';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Welcome to Touchies!"
        subtitle="South Africa's premier touch rugby community. Join leagues, discover events, and stay connected with the latest news."
        backgroundImage="/logo1.jpg"
        ctaText="Explore Leagues"
        ctaLink="/leagues"
      />

      {/* Content Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Discover Touch Rugby
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Stay updated with the latest news, upcoming events, and find the perfect league for your skill level.
            </p>
          </div>

          {/* Featured News Highlight */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-black">Latest News</h3>
              <Link 
                href="/news" 
                className="text-primary hover:text-primary-light font-medium transition-colors duration-200"
              >
                View All News →
              </Link>
            </div>
            
            {/* Featured News Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Main Featured Article */}
              <div className="lg:col-span-1">
                <Card
                  variant="news"
                  title="Touch Rugby Championship Returns to Zoolake"
                  description="The highly anticipated annual Touch Rugby Championship is back at Zoolake Sports Complex. This year's tournament promises to be the biggest yet, with teams from across South Africa competing for the title. Registration is now open for all divisions including 6 Down, One Touch, and Beach Touch formats."
                  image="/logo1.jpg"
                  badge="Featured"
                  date="January 3, 2026"
                  ctaText="Read Full Story"
                  ctaLink="/news"
                />
              </div>
              
              {/* Secondary News Items */}
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-gray-light rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img 
                    src="/logo2.jpg" 
                    alt="News thumbnail" 
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary bg-opacity-10 rounded-full mb-2">
                      League Update
                    </span>
                    <h4 className="font-semibold text-black mb-1 line-clamp-2">
                      New Beach Touch League Starting This Summer
                    </h4>
                    <p className="text-sm text-gray mb-2 line-clamp-2">
                      Join our exciting new beach touch league starting February 2026...
                    </p>
                    <Link href="/news" className="text-sm text-primary hover:text-primary-light">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-gray-light rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img 
                    src="/logo3.jpg" 
                    alt="News thumbnail" 
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-warning bg-warning bg-opacity-10 rounded-full mb-2">
                      Tournament
                    </span>
                    <h4 className="font-semibold text-black mb-1 line-clamp-2">
                      Regional Championships Qualification Opens
                    </h4>
                    <p className="text-sm text-gray mb-2 line-clamp-2">
                      Teams can now register for regional championship qualifiers...
                    </p>
                    <Link href="/news" className="text-sm text-primary hover:text-primary-light">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Events Card */}
            <Card
              variant="event"
              title="Upcoming Events"
              description="Discover exciting touch rugby tournaments and events happening across South Africa. Register now to secure your spot."
              image="/logo2.jpg"
              badge="Events"
              ctaText="View Events"
              ctaLink="/events"
            />

            {/* Leagues Card */}
            <Card
              variant="league"
              title="Join a League"
              description="Find the perfect touch rugby league for your skill level. From 6 Down to One Touch and Beach Touch formats."
              image="/logo3.jpg"
              badge="Leagues"
              ctaText="Explore Leagues"
              ctaLink="/leagues"
            />

            {/* Quick Info Card */}
            <div className="bg-gray-light rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-4">Why Touch Rugby?</h3>
              <ul className="space-y-3 text-gray">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Fast-paced and exciting gameplay
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Suitable for all skill levels
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Great way to stay fit and social
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Multiple league formats available
                </li>
              </ul>
              <Link 
                href="/leagues" 
                className="inline-flex items-center mt-6 text-primary hover:text-primary-light font-medium transition-colors duration-200"
              >
                Get Started Today
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
