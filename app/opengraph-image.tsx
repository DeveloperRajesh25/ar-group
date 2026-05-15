import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AL Group — Your Family\'s Trusted Real Estate Partner';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#E8DCC8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            letterSpacing: '0.4em',
            color: '#A88947',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          — AL GROUP
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 90,
            color: '#1F2A44',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            marginBottom: 24,
          }}
        >
          Your Family&apos;s Trusted
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 90,
            color: '#1F2A44',
            fontStyle: 'italic',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Real Estate Partner
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 50,
            fontSize: 22,
            color: '#6B6657',
          }}
        >
          RERA · VMRDA · CRDA Approved Ventures · Andhra Pradesh
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            display: 'flex',
            fontSize: 16,
            letterSpacing: '0.35em',
            color: '#A88947',
            textTransform: 'uppercase',
          }}
        >
          Envision · Invest · Grow
        </div>
      </div>
    ),
    { ...size }
  );
}
