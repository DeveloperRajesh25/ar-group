'use client';

/**
 * Embedded Sanity Studio at /studio
 * Studio renders only when NEXT_PUBLIC_SANITY_PROJECT_ID is configured.
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#E8DCC8',
          color: '#1F2A44',
          fontFamily: 'system-ui, sans-serif',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Sanity Studio not configured
          </h1>
          <p style={{ maxWidth: '420px', lineHeight: 1.6 }}>
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your{' '}
            <code>.env.local</code> file. Create a Sanity project at{' '}
            <a
              href="https://sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#A88947' }}
            >
              sanity.io/manage
            </a>{' '}
            and copy the project ID.
          </p>
        </div>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
