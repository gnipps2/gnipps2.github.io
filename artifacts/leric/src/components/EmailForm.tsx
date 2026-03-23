import { useState } from "react";

type EmailFormProps = {
  buttonText?: string;
  align?: "center" | "left";
  darkBorder?: boolean;
};

export function EmailForm({ buttonText = "Notify Me", align = "center", darkBorder = false }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = (value: string) => {
    if (!value.trim()) return "Please enter your email address.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(email);
    if (err) {
      setError(err);
      return;
    }
    const entry = { email, tag: "Debut Collection Waitlist", date: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("leric_waitlist") || "[]");
    localStorage.setItem("leric_waitlist", JSON.stringify([...existing, entry]));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 font-serif text-lg md:text-xl text-[#D4B785]">
        Thank you. You are on the list.
      </div>
    );
  }

  const borderColor = darkBorder
    ? "border-[rgba(0,0,0,0.35)] focus:border-[#D4B785]"
    : "border-[rgba(255,255,255,0.4)] focus:border-[#D4B785]";

  const placeholderColor = darkBorder ? "placeholder:text-[#1a1a1a]/40" : "placeholder:text-[#f0ead6]/50";
  const textColor = darkBorder ? "text-[#1a1a1a]" : "text-[#f0ead6]";

  return (
    <div className={`w-full ${align === "center" ? "max-w-md mx-auto" : ""}`}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col sm:flex-row items-stretch gap-0 w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
          placeholder="Enter your email address"
          className={`flex-1 min-w-0 bg-transparent border-b ${borderColor} ${placeholderColor} ${textColor} py-[14px] px-0 outline-none font-sans text-sm transition-colors duration-300 rounded-none sm:mr-6`}
        />
        <button
          type="submit"
          className="mt-4 sm:mt-0 shrink-0 px-8 py-[14px] bg-[#D4B785] text-black uppercase tracking-[0.2em] text-xs font-bold hover:opacity-90 active:opacity-80 transition-opacity duration-200 whitespace-nowrap w-full sm:w-auto"
        >
          {buttonText}
        </button>
      </form>
      {error && (
        <p className="mt-3 text-xs text-red-400 font-sans tracking-wide">{error}</p>
      )}
    </div>
  );
}
