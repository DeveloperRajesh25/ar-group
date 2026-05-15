import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  invert = false,
  size = 'md',
}: {
  className?: string;
  invert?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex flex-col leading-none font-cormorant tracking-display',
        invert ? 'text-beige' : 'text-navy',
        className
      )}
      aria-label="AL Group — Home"
    >
      <span className={cn('font-medium', sizes[size])}>
        AL <span className="text-gold">Group</span>
      </span>
      <span
        className={cn(
          'mt-0.5 text-[10px] tracking-[0.32em] uppercase font-inter font-medium',
          invert ? 'text-beige/70' : 'text-muted'
        )}
      >
        Envision · Invest · Grow
      </span>
    </Link>
  );
}
