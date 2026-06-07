import Image from "next/image";

interface PlaceholderImageProps {
  /**
   * Real image URL. When omitted, a styled placeholder renders instead — this
   * is the single swap point for dropping in Jose's actual project photos.
   */
  src?: string;
  alt: string;
  /** Optional caption/label shown on the placeholder. */
  label?: string;
  /** Tailwind aspect ratio utility. */
  aspect?: string;
  className?: string;
  /** "Before" / "After" style badge. */
  badge?: string;
}

/**
 * Image slot used across hero & portfolio. Renders an optimized next/image
 * when `src` is provided; otherwise a tasteful gradient placeholder with a
 * paint-roller glyph so the layout reads correctly before real photos exist.
 */
export function PlaceholderImage({
  src,
  alt,
  label,
  aspect = "aspect-[4/3]",
  className = "",
  badge,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-brand-100 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-200 to-brand-400 text-brand-700"
        >
          <PaintRollerIcon className="h-10 w-10 opacity-70" />
          {label && (
            <span className="px-4 text-center text-sm font-medium text-brand-800/80">
              {label}
            </span>
          )}
          <span className="text-xs uppercase tracking-wider text-brand-700/60">
            Photo coming soon
          </span>
        </div>
      )}
      {badge && (
        <span className="absolute left-3 top-3 rounded-md bg-brand-900/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
    </div>
  );
}

function PaintRollerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="14" height="6" rx="1" />
      <path d="M17 7h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 0-1 1v2" />
      <rect x="9" y="15" width="6" height="5" rx="1" />
    </svg>
  );
}
