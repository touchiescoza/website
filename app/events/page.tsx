import Image from 'next/image';
import { Card, Badge, Button } from '../components/ui';

// Mock data for events - in a real app this would come from an API
const eventsData = [
  {
    id: '1',
    title: 'Touch Rugby Championship 2026',
    description: 'The premier touch rugby tournament in South Africa. Teams from across the country will compete in multiple divisions including 6 Down, One Touch, and Beach Touch formats.',
    date: new Date('2026-02-15'),
    location: {
      name: 'Zoolake Sports Complex',
      address: 'Zoolake Drive, Johannesburg, South Africa'
    },
    eventType: 'tournament' as const,
    registrationUrl: 'https://example.com/register',
    contactInfo: {
      email: 'info@touchies.co.za',
      phone: '+27 11 123 4567'
    },
    image: '/logo1.jpg',
    status: 'upcoming' as const,
    registrationDeadline: new Date('2026-02-01')
  },
  {
    id: '2',
    title: 'Beach Touch Summer League',
    description: 'Join our exciting beach touch league running throughout the summer months. Perfect for players of all skill levels looking for a fun, social touch rugby experience.',
    date: new Date('2026-01-20'),
    location: {
      name: 'Durban Beachfront',
      address: 'Golden Mile, Durban, KwaZulu-Natal'
    },
    eventType: 'league_game' as const,
    registrationUrl: 'https://example.com/beach-league',
    contactInfo: {
      email: 'beach@touchies.co.za',
      phone: '+27 31 987 6543'
    },
    image: '/logo2.jpg',
    status: 'upcoming' as const,
    registrationDeadline: new Date('2026-01-15')
  },
  {
    id: '3',
    title: 'Cape Town Touch Training Camp',
    description: 'Intensive training camp for players looking to improve their touch rugby skills. Led by experienced coaches and former national team players.',
    date: new Date('2026-01-25'),
    location: {
      name: 'Cape Town Sports Grounds',
      address: 'Green Point, Cape Town, Western Cape'
    },
    eventType: 'training' as const,
    registrationUrl: 'https://example.com/training-camp',
    contactInfo: {
      email: 'training@touchies.co.za',
      phone: '+27 21 456 7890'
    },
    image: '/logo3.jpg',
    status: 'upcoming' as const,
    registrationDeadline: new Date('2026-01-18')
  },
  {
    id: '4',
    title: 'New Year Social Touch',
    description: 'Kick off the new year with a fun social touch rugby event. Great for beginners and experienced players alike. Food and drinks provided.',
    date: new Date('2026-01-10'),
    location: {
      name: 'Pretoria Sports Club',
      address: 'Hatfield, Pretoria, Gauteng'
    },
    eventType: 'social' as const,
    contactInfo: {
      email: 'social@touchies.co.za'
    },
    image: '/logo1.jpg',
    status: 'completed' as const
  }
];

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case 'tournament': return 'Tournament';
    case 'league_game': return 'League';
    case 'training': return 'Training';
    case 'social': return 'Social';
    default: return 'Event';
  }
};

const getEventTypeBadgeVariant = (type: string) => {
  switch (type) {
    case 'tournament': return 'warning' as const;
    case 'league_game': return 'success' as const;
    case 'training': return 'info' as const;
    case 'social': return 'primary' as const;
    default: return 'secondary' as const;
  }
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const isRegistrationOpen = (deadline?: Date) => {
  if (!deadline) return false;
  return new Date() < deadline;
};

const Events = () => {
  // Sort events by date (upcoming first, then chronological)
  const sortedEvents = [...eventsData].sort((a, b) => {
    if (a.status === 'upcoming' && b.status !== 'upcoming') return -1;
    if (a.status !== 'upcoming' && b.status === 'upcoming') return 1;
    return a.date.getTime() - b.date.getTime();
  });

  const upcomingEvents = sortedEvents.filter(event => event.status === 'upcoming');
  const pastEvents = sortedEvents.filter(event => event.status === 'completed');

  return (
    <main className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Touch Rugby Events
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Discover exciting touch rugby tournaments, leagues, training camps, and social events happening across South Africa.
          </p>
        </div>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Upcoming Events</h2>
              <Badge variant="primary" size="lg">
                {upcomingEvents.length} Event{upcomingEvents.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="md:flex">
                    {/* Event Image */}
                    <div className="md:w-1/3 relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-64 md:h-full object-cover"
                        priority={false}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Event Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge variant={getEventTypeBadgeVariant(event.eventType)}>
                            {getEventTypeLabel(event.eventType)}
                          </Badge>
                          {event.status === 'upcoming' && (
                            <Badge variant="success" size="sm">
                              Upcoming
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray">Event Date</p>
                          <p className="font-semibold text-black">{formatDate(event.date)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-black mb-3">{event.title}</h3>
                      <p className="text-gray mb-4">{event.description}</p>

                      {/* Location */}
                      <div className="mb-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-black">{event.location.name}</p>
                            <p className="text-sm text-gray">{event.location.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-4">
                          {event.contactInfo.email && (
                            <a 
                              href={`mailto:${event.contactInfo.email}`}
                              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {event.contactInfo.email}
                            </a>
                          )}
                          {event.contactInfo.phone && (
                            <a 
                              href={`tel:${event.contactInfo.phone}`}
                              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {event.contactInfo.phone}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Registration Section */}
                      <div className="flex items-center justify-between">
                        <div>
                          {event.registrationDeadline && (
                            <p className="text-sm text-gray">
                              Registration deadline: {formatDate(event.registrationDeadline)}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-3">
                          {event.registrationUrl && isRegistrationOpen(event.registrationDeadline) && (
                            <Button variant="primary" href={event.registrationUrl}>
                              Register Now
                            </Button>
                          )}
                          {event.registrationUrl && !isRegistrationOpen(event.registrationDeadline) && (
                            <Button variant="secondary" disabled>
                              Registration Closed
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Past Events</h2>
              <Badge variant="secondary" size="lg">
                {pastEvents.length} Event{pastEvents.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  variant="event"
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  date={formatDate(event.date)}
                  badge={getEventTypeLabel(event.eventType)}
                  ctaText="View Details"
                  ctaLink="#"
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {upcomingEvents.length === 0 && pastEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6" />
              </svg>
              <h3 className="text-xl font-semibold text-black mb-2">No Events Available</h3>
              <p className="text-gray mb-6">
                There are currently no events scheduled. Check back soon for upcoming touch rugby events!
              </p>
              <Button variant="primary" href="/leagues">
                Explore Leagues Instead
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Events;