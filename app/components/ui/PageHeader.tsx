interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-8 leading-tight md:leading-tight lg:leading-[1.2] xl:leading-[1.15] tracking-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray max-w-4xl mx-auto leading-relaxed md:leading-relaxed lg:leading-[1.6] xl:leading-[1.7]">
        {subtitle}
      </p>
    </div>
  );
}