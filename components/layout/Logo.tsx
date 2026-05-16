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
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
  };
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center',
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
      <span className="sr-only">AL Group</span>
    </Link>
  );
}
