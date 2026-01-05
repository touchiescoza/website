import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight md:leading-tight lg:leading-[1.2] xl:leading-[1.15] tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed md:leading-relaxed lg:leading-[1.6] xl:leading-[1.7]">
          {subtitle}
        </p>
        <Link 
          href={ctaLink}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-primary hover:bg-primary-light active:bg-primary-dark focus:ring-4 focus:ring-primary focus:ring-opacity-30 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          {ctaText}
          <svg 
            className="w-5 h-5 ml-2 text-black" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}