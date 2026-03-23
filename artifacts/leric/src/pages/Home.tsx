import { EmailForm } from "@/components/EmailForm";
import { Countdown } from "@/components/Countdown";
import { Scissors, Feather, Activity, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-[#0f0f0f] text-[#f0ead6] flex flex-col items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
        {/* Subtle background glow/texture to add depth without imagery */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-widest text-[#f0ead6] leading-none mb-4 md:mb-0">
            LÉRIC
          </h1>
          <p className="font-serif italic text-xl md:text-3xl lg:text-4xl text-[#c9a96e] mt-2 md:mt-8 tracking-wide">
            L'Art du Mouvement
          </p>
          
          <div className="w-16 md:w-24 h-[1px] bg-[#c9a96e] my-10 md:my-16 opacity-70" />
          
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-12 opacity-80 font-medium">
            Coming Soon &mdash; Bientôt Disponible
          </p>
          
          <EmailForm buttonText="Notify Me" />
        </div>
      </section>

      {/* 2. MANIFESTO SECTION */}
      <section className="bg-[#f5f0e8] text-[#1a1a1a] py-24 md:py-40 px-6 md:px-12 flex justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Where Performance <br className="hidden md:block" /> Meets Elegance
          </h2>
          <div className="space-y-6 font-sans text-base md:text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            <p>
              Born from a desire to merge the timeless sophistication of French fashion with uncompromising athletic performance, LÉRIC represents a new paradigm in luxury activewear.
            </p>
            <p>
              Designed for the discerning athlete. Fabrics of exceptional quality. Silhouettes that move gracefully with the body. Performance that never compromises on beauty.
            </p>
          </div>
          <div className="mt-16 md:mt-24">
            <p className="font-serif italic text-2xl md:text-4xl text-[#c9a96e] leading-snug">
              "Habillé pour bouger, fait pour durer."
            </p>
            <p className="mt-4 uppercase tracking-[0.2em] text-xs opacity-50 font-bold">
              — The LÉRIC Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* 3. PILLARS SECTION */}
      <section className="bg-[#0f0f0f] text-[#f0ead6] py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="w-12 h-[1px] bg-[#c9a96e] mb-8 transition-all duration-500 group-hover:w-20" />
            <Scissors className="w-8 h-8 text-[#c9a96e] mb-6 stroke-[1.5]" />
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Savoir-Faire</h3>
            <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed">
              Crafted with artisanal precision. Every seam, stitch, and panel is engineered for flawless fit and structural integrity.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="w-12 h-[1px] bg-[#c9a96e] mb-8 transition-all duration-500 group-hover:w-20" />
            <Feather className="w-8 h-8 text-[#c9a96e] mb-6 stroke-[1.5]" />
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Matières Nobles</h3>
            <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed">
              Sourced from the world's finest mills. We utilize exceptional, sustainable fabrics that feel like a second skin.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="w-12 h-[1px] bg-[#c9a96e] mb-8 transition-all duration-500 group-hover:w-20" />
            <Activity className="w-8 h-8 text-[#c9a96e] mb-6 stroke-[1.5]" />
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Élégance Active</h3>
            <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed">
              Silhouettes designed for perpetual motion. Transition seamlessly from the studio to the street with effortless grace.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COUNTDOWN SECTION */}
      <section className="bg-[#f5f0e8] text-[#1a1a1a] py-24 md:py-40 px-6 border-b border-[#c9a96e]/20">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-center">
            The Collection Arrives
          </h2>
          <Countdown />
        </div>
      </section>

      {/* 5. WAITLIST SECTION */}
      <section className="bg-[#0f0f0f] text-[#f0ead6] py-24 md:py-40 px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Be the First</h2>
        <p className="font-sans text-base opacity-80 mb-12 max-w-md mx-auto">
          Join the exclusive waitlist to receive early access to the inaugural LÉRIC collection.
        </p>
        <EmailForm buttonText="Join Waitlist" />
        
        <div className="mt-24 flex items-center gap-10">
          <a href="#" className="text-[#f0ead6] hover:text-[#c9a96e] transition-colors duration-300 flex items-center gap-2 group">
            <Instagram className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs font-medium">Instagram</span>
          </a>
          <a href="#" className="text-[#f0ead6] hover:text-[#c9a96e] transition-colors duration-300 flex items-center gap-2 group">
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <span className="uppercase tracking-widest text-xs font-medium">TikTok</span>
          </a>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#050505] text-[#f0ead6]/40 py-16 px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f0ead6] mb-8 tracking-widest">
          LÉRIC
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs uppercase tracking-widest mb-12">
          <span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Paris</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-[#c9a96e]" />
          <span className="hover:text-[#c9a96e] transition-colors cursor-pointer">New York</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-[#c9a96e]" />
          <span className="hover:text-[#c9a96e] transition-colors cursor-pointer">London</span>
        </div>
        <div className="text-xs space-y-3 opacity-60">
          <p className="uppercase tracking-[0.2em]">Luxury Activewear &mdash; Coming Soon</p>
          <p>&copy; {new Date().getFullYear()} LÉRIC. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
