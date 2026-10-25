import { useEffect, useState } from 'react';

function useNow(refreshRate = 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), refreshRate);
    return () => window.clearInterval(intervalId);
  }, [refreshRate]);

  return now;
}

export default useNow;
