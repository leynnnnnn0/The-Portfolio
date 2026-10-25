import { useEffect, useState } from 'react';

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

function getCurrentMinute() {
  return new Date();
}

function TopBar({ initials, name, role }) {
  const [currentTime, setCurrentTime] = useState(getCurrentMinute);

  useEffect(() => {
    const updateClock = () => setCurrentTime(getCurrentMinute());
    const now = new Date();
    const millisecondsUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let intervalId;
    const timeoutId = window.setTimeout(() => {
      updateClock();
      intervalId = window.setInterval(updateClock, 60_000);
    }, millisecondsUntilNextMinute);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="relative z-10 hidden min-h-[30px] items-center justify-between gap-6 border-b border-[#e3e3e3] border-t-2 border-t-[#2e3037] bg-white/90 px-[17px] pl-[15px] text-[11px] font-semibold leading-none text-[#747474] xl:flex">
      <div
        className="flex min-w-0 items-center gap-[17px] whitespace-nowrap max-[480px]:gap-2.5"
        aria-label={`${name}, ${role}`}
      >
        <span
          className="text-[10px] font-bold text-[#5f5f5f]"
          aria-hidden="true"
        >
          {initials}
        </span>
        <span className="overflow-hidden text-ellipsis">{name}</span>
        <span className="overflow-hidden text-ellipsis font-medium text-[#a2a2a2] max-[480px]:hidden">
          {role}
        </span>
      </div>

      <time
        className="shrink-0 whitespace-nowrap"
        dateTime={currentTime.toISOString()}
      >
        {DATE_TIME_FORMATTER.format(currentTime)}
      </time>
    </header>
  );
}

export default TopBar;
