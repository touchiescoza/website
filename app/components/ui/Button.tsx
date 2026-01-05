import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  href, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-black hover:bg-primary-light focus:ring-primary focus:ring-opacity-30 shadow-md hover:shadow-lg';
      case 'secondary':
        return 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-black focus:ring-primary focus:ring-opacity-30';
      case 'accent':
        return 'bg-primary text-black hover:bg-primary-light focus:ring-primary focus:ring-opacity-30 shadow-md hover:shadow-lg';
      default:
        return 'bg-primary text-black hover:bg-primary-light focus:ring-primary focus:ring-opacity-30 shadow-md hover:shadow-lg';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 transform hover:-translate-y-0.5';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : '';
  
  const combinedStyles = `${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${disabledStyles} ${className}`;

  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}