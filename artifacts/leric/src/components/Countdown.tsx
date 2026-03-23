import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: September 1, 2025
    const targetDate = new Date("2025-09-01T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-2 md:mb-4 w-20 md:w-32 text-center tabular-nums">
            {block.value.toString().padStart(2, "0")}
          </span>
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#1a1a1a]/60">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
