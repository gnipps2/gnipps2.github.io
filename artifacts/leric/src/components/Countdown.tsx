import { useState, useEffect } from "react";

const TARGET = new Date("2026-12-12T00:00:00Z").getTime();

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {blocks.map(({ label, value }, i) => (
        <div key={label} className="flex flex-col items-center">
          {/* Divider between units */}
          {i > 0 && (
            <span className="hidden md:flex items-start pt-2 text-[#D4B785]/40 text-4xl font-light select-none absolute -ml-[4.5rem] mt-0">:</span>
          )}
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-4 w-20 md:w-32 text-center tabular-nums leading-none">
            {String(value).padStart(2, "0")}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/50 font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
