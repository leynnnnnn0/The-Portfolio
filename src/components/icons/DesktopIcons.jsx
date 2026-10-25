export function FolderIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 96 76" aria-hidden="true">
      <defs>
        <linearGradient id="folder-top" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#82dcfa" />
          <stop offset="1" stopColor="#56c4eb" />
        </linearGradient>
        <linearGradient id="folder-front" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#6fd4f6" />
          <stop offset="1" stopColor="#47b8df" />
        </linearGradient>
      </defs>
      <path d="M5 15a7 7 0 0 1 7-7h25l8 8h39a7 7 0 0 1 7 7v8H5V15Z" fill="url(#folder-top)" />
      <path d="M5 25h86v42a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6V25Z" fill="url(#folder-front)" />
      <path d="M6 66h84v2a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5v-2Z" fill="#40add3" opacity=".55" />
    </svg>
  );
}

export function PlayIcon({ playing = false, className = '' }) {
  return playing ? (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  ) : (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.7a1 1 0 0 1 1.53-.85l11 7.3a1 1 0 0 1 0 1.7l-11 7.3A1 1 0 0 1 7 19.3V4.7Z" />
    </svg>
  );
}

export function SkipIcon({ direction = 'next', className = '' }) {
  const transform = direction === 'previous' ? 'scale(-1 1) translate(-24 0)' : undefined;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <g transform={transform}>
        <path d="M5 5.7a1 1 0 0 1 1.5-.87l9.7 5.8a1.6 1.6 0 0 1 0 2.74l-9.7 5.8A1 1 0 0 1 5 18.3V5.7Z" />
        <rect x="18" y="5" width="2" height="14" rx="1" />
      </g>
    </svg>
  );
}

export function SparklesIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M24 7c1 11 7 17 18 18-11 1-17 7-18 18-1-11-7-17-18-18C17 24 23 18 24 7Z" />
      <path d="M45 30c.6 7 4.4 10.8 11.5 11.5C49.4 42.2 45.6 46 45 53c-.7-7-4.5-10.8-11.5-11.5C40.5 40.8 44.3 37 45 30Z" />
      <path d="M48 5c.4 4.5 2.8 6.8 7 7-4.2.3-6.6 2.7-7 7-.3-4.3-2.7-6.7-7-7 4.3-.2 6.7-2.5 7-7Z" />
    </svg>
  );
}

export function HeartIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 52C26 45 10 36 10 23c0-7 5-12 12-12 5 0 8 2 10 6 2-4 5-6 10-6 7 0 12 5 12 12 0 13-16 22-22 29Z" />
    </svg>
  );
}

export function ContactIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
      <rect x="15" y="11" width="34" height="42" rx="5" />
      <circle cx="32" cy="26" r="6" fill="currentColor" stroke="none" />
      <path d="M22 44c2-6 6-9 10-9s8 3 10 9" />
      <path d="M52 17h4M52 26h4M52 35h4M52 44h4" strokeLinecap="round" />
    </svg>
  );
}

export function MarkIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <text
        x="31"
        y="41"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        fontSize="25"
        fontWeight="900"
        letterSpacing="-2.5"
      >
        NA
      </text>
    </svg>
  );
}
