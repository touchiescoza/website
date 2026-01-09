import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Badge({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '' 
}: BadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-light text-black border border-gray border-opacity-20';
      case 'accent':
        return 'bg-warning bg-opacity-10 text-black border border-warning border-opacity-20';
      case 'success':
        return 'bg-success bg-opacity-10 text-black border border-success border-opacity-20';
      case 'warning':
        return 'bg-warning bg-opacity-10 text-black border border-warning border-opacity-20';
      case 'error':
        return 'bg-error bg-opacity-10 text-black border border-error border-opacity-20';
      case 'info':
        return 'bg-info bg-opacity-10 text-black border border-info border-opacity-20';
      case 'primary':
      default:
        return 'bg-primary bg-opacity-10 text-black border border-primary border-opacity-20';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-0.5 text-xs';
      case 'lg':
        return 'px-3 py-1 text-base';
      case 'md':
      default:
        return 'px-2.5 py-0.5 text-sm';
    }
  };

  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  const combinedStyles = `${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`;

  return (
    <span className={combinedStyles}>
      {children}
    </span>
  );
}