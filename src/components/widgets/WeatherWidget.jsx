const FORECAST = [
  { day: 'Sun', temperature: 31, condition: 'sunny' },
  { day: 'Mon', temperature: 32, condition: 'sunny' },
  { day: 'Tue', temperature: 30, condition: 'cloudy' },
  { day: 'Wed', temperature: 29, condition: 'cloudy' },
  { day: 'Thu', temperature: 31, condition: 'sunny' },
  { day: 'Fri', temperature: 32, condition: 'sunny' },
  { day: 'Sat', temperature: 28, condition: 'cloudy' },
];

function WeatherIcon({ condition }) {
  if (condition === 'sunny') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffb21a]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#aeb8c0]" fill="currentColor" aria-hidden="true">
      <path d="M7.2 18a4.7 4.7 0 0 1-.4-9.4A6.2 6.2 0 0 1 18.6 11 3.6 3.6 0 0 1 18 18H7.2Z" />
    </svg>
  );
}

function WeatherWidget() {
  return (
    <section className="w-full rounded-[17px] bg-white px-5 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.10)]" aria-label="Seven-day weather forecast for Manila">
      <h2 className="m-0 text-[11px] font-semibold text-[#747474]">Manila</h2>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {FORECAST.map(({ day, temperature, condition }) => (
          <div key={day} className="flex min-w-0 flex-col items-center gap-1 text-[8px] font-medium text-[#8c8c8c]">
            <span>{day}</span>
            <WeatherIcon condition={condition} />
            <span>{temperature}°</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherWidget;
