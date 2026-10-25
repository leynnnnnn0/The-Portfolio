function AchievementIcon({ type }) {
  const sharedClassName = 'h-12 w-12';

  if (type === 'users') {
    return (
      <svg className={sharedClassName} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="25" cy="24" r="8" />
        <circle cx="43" cy="27" r="6" />
        <path d="M10 49c2-10 7-15 15-15s13 5 15 15M38 39c7-1 12 3 14 10" />
      </svg>
    );
  }

  if (type === 'code') {
    return (
      <svg className={sharedClassName} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 14 10 32l12 18M42 14l12 18-12 18M37 10 27 54" />
      </svg>
    );
  }

  if (type === 'trophy') {
    return (
      <svg className={sharedClassName} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10h24v13c0 10-5 16-12 16s-12-6-12-16V10Z" />
        <path d="M20 15H11v5c0 7 4 11 11 12M44 15h9v5c0 7-4 11-11 12M32 39v10M22 54h20M27 49h10" />
      </svg>
    );
  }

  if (type === 'medal') {
    return (
      <svg className={sharedClassName} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m20 8 12 18L44 8M23 8h18" />
        <circle cx="32" cy="39" r="13" />
        <path d="m26 39 4 4 8-9" />
      </svg>
    );
  }

  return (
    <svg className={sharedClassName} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="32" cy="28" r="15" />
      <path d="m23 40-3 15 12-6 12 6-3-15M32 19v18M25 28h14" />
    </svg>
  );
}

export default AchievementIcon;
