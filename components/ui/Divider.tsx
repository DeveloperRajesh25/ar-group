import { cn } from '@/lib/utils';

export function Divider({
  className,
  vertical = false,
  variant = 'gold',
}: {
  className?: string;
  vertical?: boolean;
  variant?: 'gold' | 'border' | 'cream';
}) {
  const color =
    variant === 'gold'
      ? 'bg-gold'
      : variant === 'cream'
      ? 'bg-beige/30'
      : 'bg-line';

  return (
    <span
      aria-hidden
      className={cn(
        color,
        vertical ? 'w-px h-full' : 'h-px w-full',
        className
      )}
    />
  );
}
