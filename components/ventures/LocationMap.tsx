export function LocationMap({
  embedUrl,
  ventureName,
  height = 480,
}: {
  embedUrl: string;
  ventureName: string;
  height?: number;
}) {
  if (!embedUrl) {
    return (
      <div
        style={{ height }}
        className="w-full bg-beige-soft border border-line/60 flex items-center justify-center text-sm text-muted"
      >
        Map embed not yet configured for {ventureName}.
      </div>
    );
  }
  return (
    <div className="overflow-hidden border border-line/60">
      <iframe
        src={embedUrl}
        title={`Map of ${ventureName}`}
        style={{ height, border: 0 }}
        className="w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
