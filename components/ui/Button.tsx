import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'outline-cream' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
  external?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-inter font-medium tracking-widest uppercase transition-all duration-400 ease-out disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-navy hover:bg-gold-deep hover:text-navy',
  outline:
    'border border-navy text-navy hover:bg-navy hover:text-beige',
  'outline-cream':
    'border border-cream text-cream hover:bg-cream hover:text-navy',
  ghost:
    'text-navy hover:text-gold-deep',
};

const sizes: Record<Size, string> = {
  sm: 'px-6 py-3 text-xs',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-5 text-sm',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', className, children, ...rest },
    ref
  ) {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if ('href' in rest && rest.href) {
      const { href, external, ...anchorRest } = rest as ButtonAsLink;
      if (external || /^https?:/.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me/')) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(anchorRest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
