import Image from 'next/image';
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
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14',
  };
  const labelSizes = {
    sm: 'text-[8px] tracking-[0.32em]',
    md: 'text-[9px] tracking-[0.42em]',
    lg: 'text-[10px] tracking-[0.5em]',
  };
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex flex-col items-center justify-center leading-none',
        className
      )}
      aria-label="AL Group — Home"
    >
      <Image
        src="/logo.png"
        alt="AL Group"
        width={240}
        height={120}
        priority
        className={cn('w-auto', sizes[size], invert ? 'invert' : null)}
      />
      <span
        className={cn(
          'mt-1.5 uppercase font-inter font-medium',
          labelSizes[size],
          invert ? 'text-beige' : 'text-gold-deep'
        )}
      >
        AL Group
      </span>
    </Link>
  );
}
