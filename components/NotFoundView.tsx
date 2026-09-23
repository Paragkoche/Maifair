"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Home, Sparkles, Calendar, Crown, MessageCircle, ArrowRight } from "lucide-react";

const recoveryLinks = [
  {
    icon: <Sparkles size={22} className="text-[#c9a84c]" />,
    title: "Signature Services",
    description: "Deep tissue, hot stone, and soothing aromatherapy rituals.",
    href: "/services",
  },
  {
    icon: <Calendar size={22} className="text-[#c9a84c]" />,
    title: "Book Experience",
    description: "Select your preferred suite, date, and bespoke treatments.",
    href: "/booking",
  },
  {
    icon: <Crown size={22} className="text-[#c9a84c]" />,
    title: "VIP Memberships",
    description: "Curated wellness tiers with exclusive luxury privileges.",
    href: "/memberships",
  },
  {
    icon: <MessageCircle size={22} className="text-[#c9a84c]" />,
    title: "Concierge Desk",
    description: "Need immediate assistance? Connect directly on WhatsApp.",
    href: "/contact",
  },
];

export default function NotFoundView() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918552022895";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi Maifair! I was browsing your website and reached an uncharted page. Could you assist me?"
  )}`;

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center py-28 px-6 grain-overlay overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.4) 0%, rgba(10, 10, 10, 0) 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[400px] h-[300px] pointer-events-none rounded-full blur-[120px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 213, 163, 0.3) 0%, rgba(10, 10, 10, 0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection direction="up">
          {/* Watermark 404 */}
          <div className="relative inline-block select-none pointer-events-none mb-2">
            <span
              className="font-display text-[clamp(6.5rem,18vw,13rem)] font-light leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#c9a84c]/30 via-[#c9a84c]/10 to-transparent block"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="section-label">Path Uncharted</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.25rem)] font-light text-[#f5f0e8] leading-[1.15] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A Sanctuary Yet <span className="italic text-gradient-gold">Unfound</span>
          </h1>

          {/* Ornamental Divider */}
          <span className="gold-divider my-6" />

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-[#d4c9b8] font-light text-base md:text-lg leading-relaxed mb-10">
            The page or ritual you are seeking has drifted into serenity or no longer exists.
            Allow our concierge to guide you back to pure wellness.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/" className="btn-gold" id="btn-404-home">
              <Home size={15} />
              <span>Return Home</span>
            </Link>

            <Link href="/services" className="btn-outline-gold" id="btn-404-services">
              <Sparkles size={15} />
              <span>Explore Services</span>
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#d4c9b8] hover:text-[#c9a84c] border border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.6)] bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
              id="btn-404-whatsapp"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>Ask Concierge</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Quick Sanctuary Navigation */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-left mt-8 pt-10 border-t border-[rgba(201,168,76,0.15)]">
            <p className="text-center font-display text-lg text-[#c9a84c] tracking-widest uppercase mb-8">
              Explore Our Popular Sanctuaries
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recoveryLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="luxury-card p-5 group flex flex-col justify-between hover:border-[rgba(201,168,76,0.5)] transition-all duration-300"
                >
                  <div>
                    <div className="mb-3 p-2.5 rounded-full w-fit bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.4)] transition-colors">
                      {item.icon}
                    </div>
                    <h2
                      className="font-display text-lg text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#d4c9b8]/80 font-light mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-[11px] font-medium uppercase tracking-widest text-[#c9a84c] opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <span>Visit</span>
                    <ArrowRight size={12} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
