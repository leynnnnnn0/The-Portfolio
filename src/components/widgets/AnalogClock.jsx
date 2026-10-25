import useNow from '../../hooks/useNow';

const TICKS = Array.from({ length: 12 }, (_, index) => index * 30);

function AnalogClock() {
  const now = useNow();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  return (
    <section
      className="flex aspect-square w-full max-w-[150px] items-center justify-center rounded-[17px] bg-white shadow-[0_18px_35px_rgba(0,0,0,0.10)]"
      aria-label={`Manila time ${now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`}
    >
      <svg viewBox="0 0 120 120" className="h-[88%] w-[88%]" aria-hidden="true">
        <text x="60" y="34" textAnchor="middle" className="fill-[#858585] text-[9px] font-semibold">MANILA</text>
        {TICKS.map((rotation) => (
          <line key={rotation} x1="60" y1="12" x2="60" y2={rotation % 90 === 0 ? 17 : 15} stroke="#a2a2a2" strokeWidth={rotation % 90 === 0 ? 3 : 1.5} transform={`rotate(${rotation} 60 60)`} />
        ))}
        <line x1="60" y1="60" x2="60" y2="36" stroke="#050505" strokeWidth="4" strokeLinecap="round" transform={`rotate(${hours * 30} 60 60)`} />
        <line x1="60" y1="60" x2="60" y2="24" stroke="#050505" strokeWidth="3" strokeLinecap="round" transform={`rotate(${minutes * 6} 60 60)`} />
        <line x1="60" y1="64" x2="60" y2="25" stroke="#ff4e36" strokeWidth="1.4" transform={`rotate(${seconds * 6} 60 60)`} />
        <circle cx="60" cy="60" r="3" fill="#050505" />
      </svg>
    </section>
  );
}

export default AnalogClock;
