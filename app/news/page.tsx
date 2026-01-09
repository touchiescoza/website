import Image from 'next/image';
import { Card, Badge, PageHeader, Button } from '../components/ui';

// Mock data for news articles - in a real app this would come from an API
const newsData = [
  {
    id: '1',
    title: 'Touch Rugby Championship Returns to Zoolake',
    excerpt: 'The highly anticipated annual Touch Rugby Championship is back at Zoolake Sports Complex. This year\'s tournament promises to be the biggest yet, with teams from across South Africa competing for the title.',
    content: 'The Touch Rugby Championship at Zoolake has become the premier touch rugby event in South Africa, attracting teams from all provinces. This year\'s tournament will feature multiple divisions including 6 Down, One Touch, and Beach Touch formats. Registration is now open for all divisions, with early bird pricing available until January 31st.',
    publishedDate: new Date('2026-01-03'),
    author: 'Sarah Mitchell',
    category: 'tournament' as const,
    featuredImage: '/logo1.jpg',
    tags: ['tournament', 'zoolake', 'championship', 'registration'],
    isPublished: true
  },
  {
    id: '2',
    title: 'New Beach Touch League Starting This Summer',
    excerpt: 'Join our exciting new beach touch league starting February 2026. Perfect for players looking for a fun, social touch rugby experience with stunning ocean views.',
    content: 'The Durban Beach Touch League represents an exciting new chapter in South African touch rugby. Playing on the golden sands of Durban\'s beachfront, this league offers a unique twist on traditional touch rugby. The beach format requires different skills and strategies, making it an excellent cross-training opportunity for traditional touch players.',
    publishedDate: new Date('2025-12-28'),
    author: 'Mike Johnson',
    category: 'league' as const,
    featuredImage: '/logo2.jpg',
    tags: ['beach touch', 'durban', 'league', 'summer'],
    isPublished: true
  },
  {
    id: '3',
    title: 'Regional Championships Qualification Opens',
    excerpt: 'Teams can now register for regional championship qualifiers. The top teams from each region will advance to the national finals in Cape Town.',
    content: 'The South African Touch Rugby Association has announced the opening of registration for regional championship qualifiers. This year\'s format will see increased competition with more regions participating than ever before. The qualifying tournaments will be held across four regions: Gauteng, Western Cape, KwaZulu-Natal, and Eastern Cape.',
    publishedDate: new Date('2025-12-20'),
    author: 'Lisa Chen',
    category: 'tournament' as const,
    featuredImage: '/logo3.jpg',
    tags: ['championships', 'qualifiers', 'regional', 'national'],
    isPublished: true
  },
  {
    id: '4',
    title: 'Touch Rugby Skills Development Program Launched',
    excerpt: 'New skills development program aims to improve touch rugby fundamentals across all age groups. Professional coaches will lead weekly training sessions.',
    content: 'The Touch Rugby Skills Development Program is a comprehensive initiative designed to elevate the standard of touch rugby across South Africa. The program features structured training modules covering passing, positioning, game awareness, and tactical understanding. Sessions are available for junior, senior, and masters divisions.',
    publishedDate: new Date('2025-12-15'),
    author: 'David Williams',
    category: 'community' as const,
    featuredImage: '/logo1.jpg',
    tags: ['skills', 'development', 'coaching', 'training'],
    isPublished: true
  },
  {
    id: '5',
    title: 'Women\'s Touch Rugby Growing Rapidly',
    excerpt: 'Female participation in touch rugby has increased by 40% this year. New women-only leagues are being established across major cities.',
    content: 'The growth of women\'s touch rugby in South Africa has been remarkable, with participation rates soaring across all age groups. This growth has been driven by targeted programs, dedicated women\'s leagues, and increased visibility of female role models in the sport. Several new women-only leagues are planned for 2026.',
    publishedDate: new Date('2025-12-10'),
    author: 'Emma Thompson',
    category: 'community' as const,
    featuredImage: '/logo2.jpg',
    tags: ['women', 'growth', 'participation', 'leagues'],
    isPublished: true
  },
  {
    id: '6',
    title: 'Touch Rugby Coaching Certification Program',
    excerpt: 'New coaching certification program launches to ensure high-quality instruction across all levels. Applications now open for Level 1 certification.',
    content: 'The South African Touch Rugby Coaching Certification Program has been developed to standardize coaching quality and provide clear pathways for coach development. The program offers three levels of certification, from grassroots coaching to elite performance coaching.',
    publishedDate: new Date('2025-12-05'),
    author: 'James Rodriguez',
    category: 'general' as const,
    featuredImage: '/logo3.jpg',
    tags: ['coaching', 'certification', 'education', 'development'],
    isPublished: true
  }
];

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'tournament': return 'Tournament';
    case 'league': return 'League';
    case 'community': return 'Community';
    case 'general': return 'General';
    default: return 'News';
  }
};

const getCategoryBadgeVariant = (category: string) => {
  switch (category) {
    case 'tournament': return 'warning' as const;
    case 'league': return 'success' as const;
    case 'community': return 'primary' as const;
    case 'general': return 'info' as const;
    default: return 'secondary' as const;
  }
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const News = () => {
  // Sort articles by date (newest first)
  const sortedArticles = [...newsData].sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
  
  const featuredArticle = sortedArticles[0];
  const recentArticles = sortedArticles.slice(1, 4);
  const olderArticles = sortedArticles.slice(4);

  // Group articles by category for filtering
  const categories = Array.from(new Set(newsData.map(article => article.category)));

  // Handle empty state
  if (sortedArticles.length === 0) {
    return (
      <div className="py-16 px-4 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <PageHeader 
            title="Touch Rugby News"
            subtitle="Stay updated with the latest news, tournament results, league updates, and community stories from the world of South African touch rugby."
          />

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
              <h3 className="text-xl font-semibold text-black mb-2">No News Available</h3>
              <p className="text-gray mb-6">
                There are currently no news articles available. Check back soon for the latest updates from the touch rugby community!
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>
                    Subscribe for Updates
                  </Button>
                  <Button 
                    href="/events"
                    variant="secondary"
                  >
                    View Events Instead
                  </Button>
                </div>
                <p className="text-sm text-gray">
                  Follow us on social media for real-time updates
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <section className="bg-gray-light rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Stay Updated</h2>
            <p className="text-gray mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to be the first to know when new articles are published. Get the latest touch rugby news, tournament updates, and community stories directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <PageHeader 
          title="Touch Rugby News"
          subtitle="Stay updated with the latest news, tournament results, league updates, and community stories from the world of South African touch rugby."
        />

        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <Image
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-64 md:h-full object-cover"
                    priority={true}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={getCategoryBadgeVariant(featuredArticle.category)}>
                      {getCategoryLabel(featuredArticle.category)}
                    </Badge>
                    <Badge variant="primary" size="sm">
                      Featured
                    </Badge>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-black mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray mb-6">
                    <span>By {featuredArticle.author}</span>
                    <span>{formatDate(featuredArticle.publishedDate)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" size="sm">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors duration-200 cursor-pointer">
                    Read Full Article
                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recent Articles */}
        {recentArticles.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Recent News</h2>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant={getCategoryBadgeVariant(category)} size="sm">
                    {getCategoryLabel(category)}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <Card
                  key={article.id}
                  variant="news"
                  title={article.title}
                  description={article.excerpt}
                  image={article.featuredImage}
                  date={formatDate(article.publishedDate)}
                  badge={getCategoryLabel(article.category)}
                  ctaText="Read More"
                  ctaLink="#"
                />
              ))}
            </div>
          </section>
        )}

        {/* Older Articles */}
        {olderArticles.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">More Stories</h2>
            </div>

            <div className="space-y-6">
              {olderArticles.map((article) => (
                <div key={article.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="md:flex gap-6">
                    <div className="md:w-32 md:h-32 mb-4 md:mb-0 flex-shrink-0 relative">
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        sizes="128px"
                        className="object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={getCategoryBadgeVariant(article.category)} size="sm">
                          {getCategoryLabel(article.category)}
                        </Badge>
                        <span className="text-sm text-gray">{formatDate(article.publishedDate)}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-black mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-gray mb-3 line-clamp-2">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray">By {article.author}</span>
                        <button className="text-primary hover:text-primary-light font-medium text-sm transition-colors duration-200 cursor-pointer">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="bg-gray-light rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Stay Updated</h2>
          <p className="text-gray mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest touch rugby news, tournament updates, and community stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;