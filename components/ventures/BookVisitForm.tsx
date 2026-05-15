'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, Loader2 } from 'lucide-react';
import { FORM_IDS } from '@/lib/constants';
import { whatsappLink } from '@/lib/utils';

interface BookVisitFormProps {
  ventureName: string;
}

export function BookVisitForm({ ventureName }: BookVisitFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('venture', ventureName);

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_IDS.visit}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  const wa = whatsappLink(`Hi, I'd like to book a site visit for ${ventureName}.`);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="bg-beige-soft border border-gold p-10 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold mb-6">
              <Check className="w-6 h-6 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-cormorant text-3xl text-navy font-medium">
              Thank You
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm mx-auto">
              We&apos;ve received your site visit request for{' '}
              <span className="text-navy font-medium">{ventureName}</span>. Our team will reach out shortly.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-gold-deep hover:text-navy transition-colors font-inter font-medium"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Continue on WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            noValidate
          >
            <FormField label="Full Name" name="name" required />
            <FormField label="Phone Number" name="phone" type="tel" required />
            <FormField label="Email" name="email" type="email" />
            <FormField label="Preferred Date" name="date" type="date" />
            <FormSelect
              label="Preferred Time"
              name="time"
              options={['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 7 PM)']}
            />
            {error && (
              <p className="text-xs text-red-300 tracking-widest uppercase" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy text-sm tracking-widest uppercase font-inter font-medium hover:bg-gold-deep transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                  Submitting…
                </>
              ) : (
                'Request Site Visit'
              )}
            </button>
            <p className="text-[11px] tracking-widest uppercase text-beige/50 text-center font-inter font-medium">
              We respect your privacy. No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-beige/60 font-inter font-medium mb-2">
        {label}
        {required && <span className="text-gold-soft ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-beige/30 focus:border-gold-soft text-beige placeholder:text-beige/40 py-3 outline-none transition-colors duration-300"
      />
    </label>
  );
}

function FormSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-beige/60 font-inter font-medium mb-2">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-beige/30 focus:border-gold-soft text-beige py-3 outline-none transition-colors duration-300 cursor-pointer"
      >
        <option value="" disabled className="bg-navy-deep text-beige">
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy-deep text-beige">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
