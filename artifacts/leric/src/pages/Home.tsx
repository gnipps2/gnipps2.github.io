import { EmailForm } from "@/components/EmailForm";
import { Countdown } from "@/components/Countdown";
import { Scissors, Feather, Activity, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full font-sans antialiased overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-[#0A0A0A] text-[#f0ead6] flex flex-col justify-between px-6 md:px-12 lg:px-20 py-10 overflow-hidden">

        {/* Background texture overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Fabric-like noise grain via SVG filter */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
          {/* Radial gold hint */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(212,183,133,0.06)_0%,transparent_70%)]" />
          {/* Deep black mask for text legibility */}
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Top Navigation */}
        <nav className="relative z-10 flex items-center justify-between w-full">
          <span className="font-serif font-bold text-base tracking-[0.3em] text-[#f0ead6]">LÉRIC</span>
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#f0ead6]/45 font-medium hidden md:block">
            Luxury Activewear
          </span>
          <a
            href="#countdown"
            onClick={(e) => { e.preventDefault(); document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" }); }}
            className="uppercase tracking-[0.3em] text-[10px] text-[#D4B785]/80 font-medium border border-[#D4B785]/40 px-3 py-1.5 hover:border-[#D4B785] hover:text-[#D4B785] transition-all duration-300 cursor-pointer"
          >
            Coming Soon
          </a>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 py-12 w-full max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.45em] text-[10px] text-[#D4B785] mb-8 font-medium">
            The Debut Collection
          </p>

          <h1 className="font-serif font-bold text-[clamp(4.5rem,13vw,13rem)] leading-[0.9] text-[#f0ead6] tracking-tight mb-10">
            LÉRIC
          </h1>

          <div className="w-10 h-[1px] bg-[#D4B785] mb-10 opacity-70" />

          <p className="text-[#f0ead6]/75 text-sm md:text-base font-light leading-relaxed max-w-sm tracking-wide" style={{ marginBottom: "56px" }}>
            Premium activewear for the discerning few.<br />
            Engineered for performance. Worn for distinction.
          </p>

          <div className="w-full max-w-md">
            <EmailForm buttonText="Get Early Access" align="center" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex items-center gap-2 text-[#f0ead6]/25 pb-1">
          <div className="w-[1px] h-8 bg-[#D4B785]/30" />
          <span className="uppercase tracking-[0.35em] text-[9px]">Scroll</span>
        </div>
      </section>

      {/* 2. MANIFESTO SECTION */}
      <section className="bg-[#f5f0e8] text-[#1a1a1a] py-28 md:py-44 px-6 md:px-12 flex justify-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Where Performance<br className="hidden md:block" /> Meets Elegance
          </h2>
          <div className="space-y-6 text-base md:text-lg text-[#1a1a1a]/65 leading-relaxed max-w-2xl font-light">
            <p>
              LÉRIC was born from a single belief — that athletic wear should never ask you to choose between performance and beauty.
            </p>
            <p>
              Designed for the discerning athlete. Fabrics of exceptional quality. Silhouettes that move with the body. Performance that never compromises on beauty.
            </p>
          </div>

          <div className="mt-20 md:mt-28 border-l-2 border-[#D4B785] pl-8">
            <p className="text-[#1a1a1a] text-2xl md:text-3xl font-light tracking-wide leading-snug">
              Quiet Confident.
            </p>
            <p className="mt-5 uppercase tracking-[0.25em] text-[10px] text-[#1a1a1a]/40 font-medium">
              The LÉRIC Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* 3. PILLARS SECTION */}
      <section className="bg-[#0A0A0A] text-[#f0ead6] py-28 md:py-44 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-16 font-medium text-center">Our Pillars</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
            <div className="group border-t border-[#f0ead6]/10 pt-10 hover:border-[#D4B785]/50 transition-colors duration-500">
              <Scissors className="w-6 h-6 text-[#D4B785] mb-8 stroke-[1.5]" />
              <h3 className="font-serif text-xl md:text-2xl mb-4 font-bold">Craftsmanship</h3>
              <p className="text-sm md:text-base text-[#f0ead6]/55 leading-relaxed font-light">
                Every seam, stitch, and panel engineered for flawless fit and structural integrity.
              </p>
            </div>
            <div className="group border-t border-[#f0ead6]/10 pt-10 hover:border-[#D4B785]/50 transition-colors duration-500">
              <Feather className="w-6 h-6 text-[#D4B785] mb-8 stroke-[1.5]" />
              <h3 className="font-serif text-xl md:text-2xl mb-4 font-bold">Noble Materials</h3>
              <p className="text-sm md:text-base text-[#f0ead6]/55 leading-relaxed font-light">
                Sourced from the world's finest mills. Exceptional, sustainable fabrics that feel like a second skin.
              </p>
            </div>
            <div className="group border-t border-[#f0ead6]/10 pt-10 hover:border-[#D4B785]/50 transition-colors duration-500">
              <Activity className="w-6 h-6 text-[#D4B785] mb-8 stroke-[1.5]" />
              <h3 className="font-serif text-xl md:text-2xl mb-4 font-bold">Active Elegance</h3>
              <p className="text-sm md:text-base text-[#f0ead6]/55 leading-relaxed font-light">
                Silhouettes designed for perpetual motion. From the studio to the street, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COUNTDOWN SECTION */}
      <section id="countdown" className="bg-[#f5f0e8] text-[#1a1a1a] py-28 md:py-44 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Mark Your Calendar</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center">
            The Collection Arrives
          </h2>
          <Countdown />
        </div>
      </section>

      {/* 5. WAITLIST SECTION */}
      <section className="bg-[#0A0A0A] text-[#f0ead6] py-28 md:py-44 px-6 flex flex-col items-center text-center">
        <p className="uppercase tracking-[0.4em] text-[10px] text-[#D4B785] mb-8 font-medium">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5">Be the First</h2>
        <p className="text-[#f0ead6]/55 text-base font-light leading-relaxed max-w-sm mx-auto" style={{ marginBottom: "56px" }}>
          Join the waitlist for early access to the inaugural LÉRIC collection.
        </p>
        <div className="w-full max-w-md">
          <EmailForm buttonText="Join the Waitlist" align="center" />
        </div>

        <div className="mt-20 flex items-center gap-10">
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

      {/* 6. FOOTER */}
      <footer className="bg-[#050505] text-[#f0ead6]/25 py-14 px-6 text-center">
        <span className="font-serif text-xl font-bold text-[#f0ead6]/70 tracking-[0.3em] block mb-8">LÉRIC</span>
        <div className="flex items-center justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-widest mb-8">
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
