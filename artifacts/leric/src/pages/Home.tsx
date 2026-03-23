import { EmailForm } from "@/components/EmailForm";
import { Countdown } from "@/components/Countdown";
import { Scissors, Feather, Activity, Instagram } from "lucide-react";

/**
 * Spacing system — 8px base unit (Tailwind scale: 1 unit = 4px)
 * ─────────────────────────────────────────────────────────────
 * Page margins:    px-8 md:px-12 lg:px-16  →  32 / 48 / 64px
 * Section padding: py-24 md:py-40          →  96 / 160px
 * Component gap:   gap-4 / gap-6 / gap-8   →  16 / 24 / 32px
 * Button:          px-10 py-4              →  40px / 16px (2.5× ratio)
 * Nav button:      px-3 py-2               →  12px / 8px  (1.5× ratio)
 * Inline margins:  mb-4/6/8/12/16          →  16/24/32/48/64px
 */

export default function Home() {
  return (
    <div className="w-full font-sans antialiased overflow-x-hidden">

      {/* ─── 1. HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#0A0A0A] text-[#f0ead6] flex flex-col justify-between px-8 md:px-12 lg:px-16 py-8 overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(212,183,133,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Nav — py-0 (contained by parent py-8), items spaced by justify-between */}
        <nav className="relative z-10 flex items-center justify-between w-full">
          <span className="font-serif font-bold text-base tracking-[0.3em] text-[#f0ead6]">LÉRIC</span>
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#f0ead6]/45 font-medium hidden md:block">
            Luxury Activewear
          </span>
          {/* Nav button: px-3 (12px) py-2 (8px) — meets min 12h / 8v spec */}
          <a
            href="#countdown"
            onClick={(e) => { e.preventDefault(); document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" }); }}
            className="uppercase tracking-[0.3em] text-[10px] text-[#D4B785]/80 font-medium border border-[#D4B785]/40 px-3 py-2 hover:border-[#D4B785] hover:text-[#D4B785] transition-all duration-300 cursor-pointer"
          >
            Coming Soon
          </a>
        </nav>

        {/* Hero content — py-8 (32px) top/bottom breathing room inside flex-1 */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 py-8 w-full max-w-5xl mx-auto">
          {/* Eyebrow: mb-6 = 24px */}
          <p className="uppercase tracking-[0.45em] text-[10px] text-[#D4B785] mb-6 font-medium">
            The Debut Collection
          </p>

          {/* Wordmark: mb-6 = 24px */}
          <h1 className="font-serif font-bold text-[clamp(4.5rem,13vw,13rem)] leading-[0.9] text-[#f0ead6] tracking-tight mb-6">
            LÉRIC
          </h1>

          {/* Divider: mb-8 = 32px */}
          <div className="w-10 h-[1px] bg-[#D4B785] mb-8 opacity-70" />

          {/* Tagline: mb-12 = 48px */}
          <p className="text-[#f0ead6]/75 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-xl mb-12">
            Premium activewear for the discerning few — engineered for performance, worn for distinction.
          </p>

          {/* Form container */}
          <div className="w-full max-w-lg">
            <EmailForm buttonText="Get Early Access" align="center" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex items-center gap-2 text-[#f0ead6]/25">
          <div className="w-[1px] h-8 bg-[#D4B785]/30" />
          <span className="uppercase tracking-[0.35em] text-[9px]">Scroll</span>
        </div>
      </section>

      {/* ─── 2. MANIFESTO ───────────────────────────────────── */}
      {/* Section: py-24 md:py-40 = 96 / 160px, px-8 md:px-12 lg:px-16 = 32/48/64px */}
      <section className="bg-[#f5f0e8] text-[#1a1a1a] py-24 md:py-40 px-8 md:px-12 lg:px-16 flex justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Eyebrow: mb-8 = 32px */}
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Our Mission</p>
          {/* Heading: mb-12 = 48px */}
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Where Performance<br className="hidden md:block" /> Meets Elegance
          </h2>
          {/* Body text: space-y-6 = 24px between paragraphs */}
          <div className="space-y-6 text-base md:text-lg text-[#1a1a1a]/65 leading-relaxed max-w-2xl font-light">
            <p>
              LÉRIC was born from a single belief — that athletic wear should never ask you to choose between performance and beauty.
            </p>
            <p>
              Designed for the discerning athlete. Fabrics of exceptional quality. Silhouettes that move with the body. Performance that never compromises on beauty.
            </p>
          </div>

          {/* Quote block: mt-16 = 64px, pl-8 = 32px */}
          <div className="mt-16 md:mt-24 border-l-2 border-[#D4B785] pl-8">
            <p className="text-[#1a1a1a] text-2xl md:text-3xl font-light tracking-wide leading-snug">
              Quiet Confident.
            </p>
            {/* Attribution: mt-4 = 16px */}
            <p className="mt-4 uppercase tracking-[0.25em] text-[10px] text-[#1a1a1a]/40 font-medium">
              The LÉRIC Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. PILLARS ─────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-[#f0ead6] py-24 md:py-40 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow: mb-16 = 64px */}
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-16 font-medium text-center">Our Pillars</p>
          {/* Grid: gap-16 mobile, gap-8 md, gap-16 lg = 64 / 32 / 64px */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
            {[
              { Icon: Scissors, title: "Craftsmanship", body: "Every seam, stitch, and panel engineered for flawless fit and structural integrity." },
              { Icon: Feather,  title: "Noble Materials", body: "Sourced from the world's finest mills. Exceptional, sustainable fabrics that feel like a second skin." },
              { Icon: Activity, title: "Active Elegance", body: "Silhouettes designed for perpetual motion. From the studio to the street, effortlessly." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="group border-t border-[#f0ead6]/10 pt-8 hover:border-[#D4B785]/50 transition-colors duration-500">
                {/* Icon: mb-8 = 32px */}
                <Icon className="w-6 h-6 text-[#D4B785] mb-8 stroke-[1.5]" />
                {/* Title: mb-4 = 16px */}
                <h3 className="font-serif text-xl md:text-2xl mb-4 font-bold">{title}</h3>
                <p className="text-sm md:text-base text-[#f0ead6]/55 leading-relaxed font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. COUNTDOWN ───────────────────────────────────── */}
      <section id="countdown" className="bg-[#f5f0e8] text-[#1a1a1a] py-24 md:py-40 px-8 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Eyebrow: mb-8 = 32px */}
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Mark Your Calendar</p>
          {/* Heading: mb-16 = 64px */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">
            The Collection Arrives
          </h2>
          <Countdown />
        </div>
      </section>

      {/* ─── 5. WAITLIST ────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-[#f0ead6] py-24 md:py-40 px-8 md:px-12 lg:px-16 flex flex-col items-center text-center">
        {/* Eyebrow: mb-8 = 32px */}
        <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Exclusive Access</p>
        {/* Heading: mb-4 = 16px */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Be the First</h2>
        {/* Body: mb-12 = 48px */}
        <p className="text-[#f0ead6]/55 text-base font-light leading-relaxed max-w-sm mx-auto mb-12">
          Join the waitlist for early access to the inaugural LÉRIC collection.
        </p>
        <div className="w-full max-w-md">
          <EmailForm buttonText="Join the Waitlist" align="center" />
        </div>

        {/* Social links: mt-16 = 64px, gap-8 = 32px */}
        <div className="mt-16 flex items-center gap-8">
          <a href="#" className="text-[#f0ead6]/40 hover:text-[#D4B785] transition-colors duration-300 flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px] font-medium">Instagram</span>
          </a>
          <a href="#" className="text-[#f0ead6]/40 hover:text-[#D4B785] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <span className="uppercase tracking-widest text-[10px] font-medium">TikTok</span>
          </a>
        </div>
      </section>

      {/* ─── 6. FOOTER ──────────────────────────────────────── */}
      {/* py-16 = 64px, px-8 = 32px */}
      <footer className="bg-[#050505] text-[#f0ead6]/25 py-16 px-8 text-center">
        {/* Logo: mb-8 = 32px */}
        <span className="font-serif text-xl font-bold text-[#f0ead6]/70 tracking-[0.3em] block mb-8">LÉRIC</span>
        {/* Cities: gap-6 md:gap-8 = 24/32px, mb-8 = 32px */}
        <div className="flex items-center justify-center gap-6 md:gap-8 text-[10px] uppercase tracking-widest mb-8">
          <span>Paris</span>
          <span className="w-1 h-1 rounded-full bg-[#D4B785]/40" />
          <span>New York</span>
          <span className="w-1 h-1 rounded-full bg-[#D4B785]/40" />
          <span>London</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">
          &copy; {new Date().getFullYear()} LÉRIC. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
