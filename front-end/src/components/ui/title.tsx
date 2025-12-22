import * as React from 'react';
import { cn } from '@/lib/utils';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg';
}
export const Title: React.FC<TitleProps> = ({ size = 'md', className, ...props }) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl font-semibold',
    md: 'text-xl md:text-2xl font-semibold',
    lg: 'text-2xl md:text-3xl font-bold',
  };
    return (
    <h1
      className={cn(sizeClasses[size], 'leading-tight', className)}
      {...props}
    />
  );
};
