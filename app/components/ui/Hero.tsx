import Image from 'next/image';
import { Button } from './index';

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
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight md:leading-tight lg:leading-[1.2] xl:leading-[1.15] tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-white max-w-4xl mx-auto leading-relaxed md:leading-relaxed lg:leading-[1.6] xl:leading-[1.7]">
          {subtitle}
        </p>
        <Button 
          href={ctaLink}
          size="lg"
          className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
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
        </Button>
      </div>
    </section>
  );
}