'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, Loader2 } from 'lucide-react';
import { FORM_IDS } from '@/lib/constants';
import { whatsappLink } from '@/lib/utils';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_IDS.contact}`, {
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

  const wa = whatsappLink("Hi AL Group, I'd like to enquire about your real estate ventures.");

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="ok"
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
            We&apos;ve received your enquiry. A member of our team will get back to you shortly.
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
          <Field label="Full Name" name="name" required />
          <Field label="Phone Number" name="phone" type="tel" required />
          <Field label="Email Address" name="email" type="email" required />
          <Select
            label="Preferred Location"
            name="location"
            options={['Vizag', 'Bhogapuram', 'Other']}
          />
          <Select
            label="Property Type"
            name="propertyType"
            options={['Villa', 'Plotted Development', 'Both']}
          />
          <Textarea label="Your Message" name="message" rows={4} />
          {error && (
            <p className="text-xs text-red-500 tracking-widest uppercase" role="alert">
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
                Sending…
              </>
            ) : (
              'Submit Inquiry'
            )}
          </button>
          <p className="text-[11px] tracking-widest uppercase text-muted text-center font-inter font-medium">
            We respect your privacy. No spam, ever.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
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
      <span className="block text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-2">
        {label}
        {required && <span className="text-gold-deep ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-line text-navy placeholder:text-muted/60 py-3 outline-none focus:border-gold transition-colors duration-300"
      />
    </label>
  );
}

function Select({
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
      <span className="block text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-2">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-line text-navy py-3 outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
}: {
  label: string;
  name: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-2">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        className="w-full bg-transparent border-b border-line text-navy placeholder:text-muted/60 py-3 outline-none focus:border-gold transition-colors duration-300 resize-none"
      />
    </label>
  );
}
