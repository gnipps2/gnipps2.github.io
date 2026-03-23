import { useState } from "react";

export function EmailForm({ buttonText = "Notify Me", align = "center" }: { buttonText?: string; align?: "center" | "left" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("leric_waitlist", email);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-[#c9a96e] font-serif italic text-lg md:text-xl">
        Merci. Vous serez informé(e) en avant-première.
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col sm:flex-row items-center gap-6 w-full max-w-md animate-in fade-in duration-1000 delay-300 fill-mode-both ${align === "center" ? "mx-auto" : ""}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="w-full bg-transparent border-b border-[#c9a96e]/40 focus:border-[#c9a96e] py-3 px-2 text-[#f0ead6] placeholder:text-[#f0ead6]/40 outline-none font-sans transition-colors rounded-none"
      />
      <button
        type="submit"
        className="whitespace-nowrap px-10 py-4 bg-[#c9a96e] text-[#0f0f0f] uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#f0ead6] transition-all duration-500 w-full sm:w-auto"
      >
        {buttonText}
      </button>
    </form>
  );
}
