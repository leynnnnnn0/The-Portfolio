function FooterIcon({ type }) {
  if (type === 'linkedin') {
    return <span className="text-[22px] font-extrabold tracking-[-0.08em] text-white">in</span>;
  }

  if (type === 'facebook') {
    return <span className="font-serif text-[27px] font-bold leading-none text-white">f</span>;
  }

  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="#ea4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 6.5v11h17v-11" fill="none" stroke="#4285f4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m3.5 17.5 6.1-6.6M20.5 17.5l-6.1-6.6" fill="none" stroke="#34a853" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth="2" aria-hidden="true">
      <path d="M7.1 3.8 4.6 5.4c-.9.6-1.2 1.8-.7 2.8 2.6 5.3 6.6 9.3 11.9 11.9 1 .5 2.2.2 2.8-.7l1.6-2.5c.5-.8.3-1.9-.5-2.5l-3-2.1c-.7-.5-1.7-.4-2.3.2l-1.1 1.1a14.2 14.2 0 0 1-2.9-2.9l1.1-1.1c.6-.6.7-1.6.2-2.3l-2.1-3c-.6-.8-1.7-1-2.5-.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default FooterIcon;
