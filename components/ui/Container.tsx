import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
  as: As = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return <As className={cn('container-base', className)}>{children}</As>;
}
