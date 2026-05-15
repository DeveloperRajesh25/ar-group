import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-6 py-20">
      <div className="text-center max-w-xl">
        <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-6">
          — 404
        </p>
        <h1 className="font-cormorant text-6xl md:text-7xl font-light text-navy leading-tight tracking-display">
          Page Not <em className="italic font-normal text-gold-deep">Found</em>
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to exploring our ventures.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy text-sm tracking-widest uppercase hover:bg-gold-deep transition-all duration-400 font-inter font-medium"
        >
          Return Home
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
