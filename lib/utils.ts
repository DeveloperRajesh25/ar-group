import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WHATSAPP_NUMBER = '917416011507';

export function whatsappLink(message: string, phone = WHATSAPP_NUMBER) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone = '+91 7416011507') {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function mailLink(email: string) {
  return `mailto:${email}`;
}

export function formatPhone(phone: string) {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
