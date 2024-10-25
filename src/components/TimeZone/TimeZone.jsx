import { useState, useEffect } from "react";

export default function TimeZone() {
    const [melbourneTime, setMelbourneTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setMelbourneTime(formatter.format(new Date()));
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
}, []);
    return (
        <p>Timezone: {melbourneTime} </p>
    )
}