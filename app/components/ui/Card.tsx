import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  variant: 'news' | 'event' | 'league';
  title: string;
  description: string;
  image?: string;
  date?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Card({ 
  variant, 
  title, 
  description, 
  image, 
  date, 
  badge, 
  ctaText = "Learn more", 
  ctaLink = "#" 
}: CardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'news':
        return {
          container: 'bg-white border border-gray-200 hover:shadow-lg',
          badge: 'bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20',
          cta: 'text-primary hover:text-primary-light'
        };
      case 'event':
        return {
          container: 'bg-white border border-gray-200 hover:shadow-lg',
          badge: 'bg-warning bg-opacity-10 text-orange-700 border border-warning border-opacity-20',
          cta: 'text-primary hover:text-primary-light'
        };
      case 'league':
        return {
          container: 'bg-white border border-gray-200 hover:shadow-lg',
          badge: 'bg-success bg-opacity-10 text-success border border-success border-opacity-20',
          cta: 'text-primary hover:text-primary-light'
        };
      default:
        return {
          container: 'bg-white border border-gray-200 hover:shadow-lg',
          badge: 'bg-gray bg-opacity-10 text-gray-dark border border-gray border-opacity-20',
          cta: 'text-primary hover:text-primary-light'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 ${styles.container}`}>
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority={false}
            loading="lazy"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Badge and Date */}
        <div className="flex items-center justify-between mb-3">
          {badge && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.badge}`}>
              {badge}
            </span>
          )}
          {date && (
            <span className="text-sm text-gray">
              {date}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* CTA */}
        {ctaLink && (
          <Link 
            href={ctaLink}
            className={`inline-flex items-center font-medium transition-colors duration-200 ${styles.cta}`}
          >
            {ctaText}
            <svg 
              className="w-4 h-4 ml-1.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}