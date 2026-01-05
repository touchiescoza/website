import Image from 'next/image';
import { Card, Badge, Button, PageHeader } from '../components/ui';

// Mock data for leagues - in a real app this would come from an API
const leaguesData = [
  {
    id: '1',
    name: 'Zoo Lake Touch Rugby League',
    description: 'Premier 6 Down touch rugby league in Johannesburg. Perfect for competitive players looking for high-quality games in a professional environment.',
    location: {
      name: 'Zoo Lake Sports Complex',
      address: '71 Westworld Way, Randburg, Gauteng'
    },
    schedule: {
      day: 'Thursday',
      time: '6:30 PM'
    },
    leagueType: '6_down' as const,
    contact: {
      website: 'https://www.zoolaketownship.co.za',
      email: 'zoolake@touchies.co.za',
      phone: '+27 11 123 4567'
    },
    image: '/logo1.jpg',
    isActive: true,
    features: [
      'Professional referees',
      'Season championship',
      'Player statistics tracking',
      'Social events'
    ],
    skillLevel: 'Intermediate to Advanced',
    seasonInfo: {
      duration: '12 weeks',
      startDate: 'February 2026',
      registrationFee: 'R350 per player'
    }
  },
  {
    id: '2',
    name: 'Durban Beach Touch League',
    description: 'Experience the thrill of beach touch rugby on Durban\'s golden beaches. A fun, social league perfect for all skill levels with stunning ocean views.',
    location: {
      name: 'Durban Beachfront',
      address: 'Golden Mile, Durban, KwaZulu-Natal'
    },
    schedule: {
      day: 'Saturday',
      time: '9:00 AM'
    },
    leagueType: 'beach_touch' as const,
    contact: {
      website: 'https://www.durbanbeachtouch.co.za',
      email: 'beach@touchies.co.za',
      phone: '+27 31 987 6543'
    },
    image: '/logo2.jpg',
    isActive: true,
    features: [
      'Beach setting',
      'All skill levels welcome',
      'Post-game refreshments',
      'Family friendly'
    ],
    skillLevel: 'All Levels',
    seasonInfo: {
      duration: '10 weeks',
      startDate: 'January 2026',
      registrationFee: 'R280 per player'
    }
  },
  {
    id: '3',
    name: 'Cape Town One Touch League',
    description: 'Fast-paced one touch rugby league in the heart of Cape Town. Ideal for players who love quick thinking and lightning-fast gameplay.',
    location: {
      name: 'Green Point Sports Grounds',
      address: 'Green Point, Cape Town, Western Cape'
    },
    schedule: {
      day: 'Wednesday',
      time: '7:00 PM'
    },
    leagueType: 'one_touch' as const,
    contact: {
      website: 'https://www.capetownonetouch.co.za',
      email: 'onetouch@touchies.co.za',
      phone: '+27 21 456 7890'
    },
    image: '/logo3.jpg',
    isActive: true,
    features: [
      'Fast-paced gameplay',
      'Skills development focus',
      'Weekly coaching tips',
      'End of season tournament'
    ],
    skillLevel: 'Beginner to Intermediate',
    seasonInfo: {
      duration: '8 weeks',
      startDate: 'March 2026',
      registrationFee: 'R300 per player'
    }
  },
  {
    id: '4',
    name: 'Pretoria Mixed Touch League',
    description: 'Mixed gender touch rugby league promoting inclusivity and fun. Great for players looking for a social yet competitive environment.',
    location: {
      name: 'Pretoria Sports Club',
      address: 'Hatfield, Pretoria, Gauteng'
    },
    schedule: {
      day: 'Tuesday',
      time: '6:00 PM'
    },
    leagueType: '6_down' as const,
    contact: {
      email: 'mixed@touchies.co.za',
      phone: '+27 12 345 6789'
    },
    image: '/logo1.jpg',
    isActive: false,
    features: [
      'Mixed gender teams',
      'Inclusive environment',
      'Social focus',
      'Beginner friendly'
    ],
    skillLevel: 'All Levels',
    seasonInfo: {
      duration: '10 weeks',
      startDate: 'TBA',
      registrationFee: 'R250 per player'
    }
  }
];

const getLeagueTypeLabel = (type: string) => {
  switch (type) {
    case '6_down': return '6 Down';
    case 'one_touch': return 'One Touch';
    case 'beach_touch': return 'Beach Touch';
    default: return 'Touch Rugby';
  }
};

const getLeagueTypeBadgeVariant = (type: string) => {
  switch (type) {
    case '6_down': return 'primary' as const;
    case 'one_touch': return 'warning' as const;
    case 'beach_touch': return 'info' as const;
    default: return 'secondary' as const;
  }
};

const Leagues = () => {
  const activeLeagues = leaguesData.filter(league => league.isActive);
  const inactiveLeagues = leaguesData.filter(league => !league.isActive);

  return (
    <main className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <PageHeader 
          title="Touch Rugby Leagues"
          subtitle="Join one of our exciting touch rugby leagues across South Africa. From competitive 6 Down to fun Beach Touch, there's something for everyone."
        />

        {/* Active Leagues Section */}
        {activeLeagues.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Active Leagues</h2>
              <Badge variant="success" size="lg">
                {activeLeagues.length} League{activeLeagues.length !== 1 ? 's' : ''} Available
              </Badge>
            </div>

            <div className="space-y-8">
              {activeLeagues.map((league) => (
                <div key={league.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="md:flex">
                    {/* League Image */}
                    <div className="md:w-1/3 relative">
                      <Image
                        src={league.image}
                        alt={league.name}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-64 md:h-full object-cover"
                        priority={false}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* League Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge variant={getLeagueTypeBadgeVariant(league.leagueType)}>
                            {getLeagueTypeLabel(league.leagueType)}
                          </Badge>
                          <Badge variant="success" size="sm">
                            Active
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray">Schedule</p>
                          <p className="font-semibold text-black">{league.schedule.day}s at {league.schedule.time}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-black mb-3">{league.name}</h3>
                      <p className="text-gray mb-4">{league.description}</p>

                      {/* Location */}
                      <div className="mb-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-black">{league.location.name}</p>
                            <p className="text-sm text-gray">{league.location.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* League Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray">Skill Level</p>
                          <p className="font-semibold text-black">{league.skillLevel}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray">Season Duration</p>
                          <p className="font-semibold text-black">{league.seasonInfo.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray">Registration Fee</p>
                          <p className="font-semibold text-black">{league.seasonInfo.registrationFee}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <p className="text-sm text-gray mb-2">League Features</p>
                        <div className="flex flex-wrap gap-2">
                          {league.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" size="sm">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-4">
                          {league.contact.email && (
                            <a 
                              href={`mailto:${league.contact.email}`}
                              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {league.contact.email}
                            </a>
                          )}
                          {league.contact.phone && (
                            <a 
                              href={`tel:${league.contact.phone}`}
                              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {league.contact.phone}
                            </a>
                          )}
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
                              Visit Website
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray">
                            Next season starts: {league.seasonInfo.startDate}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="primary">
                            Join League
                          </Button>
                          <Button variant="secondary">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inactive Leagues Section */}
        {inactiveLeagues.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Coming Soon</h2>
              <Badge variant="secondary" size="lg">
                {inactiveLeagues.length} League{inactiveLeagues.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inactiveLeagues.map((league) => (
                <Card
                  key={league.id}
                  variant="league"
                  title={league.name}
                  description={league.description}
                  image={league.image}
                  badge={`${getLeagueTypeLabel(league.leagueType)} - Coming Soon`}
                  ctaText="Get Notified"
                  ctaLink="#"
                />
              ))}
            </div>
          </section>
        )}

        {/* League Types Info Section */}
        <section className="bg-gray-light rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">League Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">6</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">6 Down</h3>
              <p className="text-gray text-sm">
                Traditional touch rugby with 6 touches before turnover. Perfect for competitive play.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-warning">1</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">One Touch</h3>
              <p className="text-gray text-sm">
                Fast-paced format with only one touch before passing. Great for skill development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-info bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Beach Touch</h3>
              <p className="text-gray text-sm">
                Touch rugby on sand with modified rules. Fun, social, and great exercise.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Leagues;