const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function CalendarWidget() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  return (
    <section className="h-[150px] w-full max-w-[150px] overflow-hidden rounded-[17px] bg-white px-4 py-[15px] shadow-[0_18px_35px_rgba(0,0,0,0.10)]" aria-label="Calendar">
      <p className="m-0 text-[9px] font-bold uppercase tracking-[0.02em] text-[#ff4936]">
        {today.toLocaleDateString('en-US', { weekday: 'long' })}
      </p>
      <p className="m-0 mt-0.5 text-[27px] font-bold leading-none text-black">{today.getDate()}</p>
      <div className="mt-1.5 grid grid-cols-7 gap-y-[2px] text-center text-[7px] leading-none text-[#999]">
        {WEEKDAYS.map((day, index) => <span key={`${day}-${index}`} className="font-medium">{day}</span>)}
        {cells.map((day, index) => (
          <span key={`${day}-${index}`} className={`flex h-[9px] items-center justify-center rounded-full ${day === today.getDate() ? 'bg-black font-semibold text-white' : ''}`}>
            {day}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CalendarWidget;
