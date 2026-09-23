"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  RefreshCw,
  Home,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ErrorViewProps {
  error?: Error & { digest?: string };
  reset?: () => void;
  statusCode?: number;
}

export default function ErrorView({
  error,
  reset,
  statusCode = 500,
}: ErrorViewProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (error) {
      console.error("Maifair Spa Application Error:", error);
    }
  }, [error]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    if (reset) {
      try {
        reset();
      } catch {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
    setTimeout(() => setIsRefreshing(false), 1200);
  };

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918552022895";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi Maifair Concierge! I encountered a technical interruption on your website (Code ${statusCode}${
      error?.digest ? `, Ref: ${error.digest}` : ""
    }). Could you assist me with my inquiry?`
  )}`;

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center py-28 px-6 grain-overlay overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.35) 0%, rgba(10, 10, 10, 0) 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[400px] h-[300px] pointer-events-none rounded-full blur-[120px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 213, 163, 0.25) 0%, rgba(10, 10, 10, 0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection direction="up">
          {/* Watermark 500 */}
          <div className="relative inline-block select-none pointer-events-none mb-2">
            <span
              className="font-display text-[clamp(6.5rem,18vw,13rem)] font-light leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#c9a84c]/30 via-[#c9a84c]/10 to-transparent block"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {statusCode}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="section-label">Serenity Interrupted</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.25rem)] font-light text-[#f5f0e8] leading-[1.15] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Restoring Our <span className="italic text-gradient-gold">Tranquility</span>
          </h1>

          {/* Ornamental Divider */}
          <span className="gold-divider my-6" />

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-[#d4c9b8] font-light text-base md:text-lg leading-relaxed mb-6">
            Our digital sanctuary is experiencing a brief technical whisper.
            Our team has been notified and harmony will be restored promptly.
            Please refresh your view or allow our concierge to assist you directly.
          </p>

          {/* Error Digest Badge (if available) */}
          {error?.digest && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-[rgba(201,168,76,0.2)] bg-[#1a1a1a]/80 text-[11px] text-[#c9a84c] font-mono tracking-wider">
              <AlertTriangle size={12} className="text-[#c9a84c]" />
              <span>Reference Code: {error.digest}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="btn-gold disabled:opacity-70 disabled:cursor-not-allowed group"
              id="btn-500-refresh"
            >
              <RefreshCw
                size={15}
                className={`transition-transform duration-700 ${
                  isRefreshing ? "animate-spin" : "group-hover:rotate-180"
                }`}
              />
              <span>{isRefreshing ? "Restoring..." : "Refresh Experience"}</span>
            </button>

            <Link href="/" className="btn-outline-gold" id="btn-500-home">
              <Home size={15} />
              <span>Return Home</span>
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#d4c9b8] hover:text-[#c9a84c] border border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.6)] bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
              id="btn-500-whatsapp"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Dedicated Concierge Support Card */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-left mt-8 pt-10 border-t border-[rgba(201,168,76,0.15)]">
            <p className="text-center font-display text-lg text-[#c9a84c] tracking-widest uppercase mb-8">
              Immediate Concierge Assistance
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Phone */}
              <a
                href="tel:+918552022895"
                className="luxury-card p-5 group flex flex-col justify-between hover:border-[rgba(201,168,76,0.5)] transition-all duration-300"
              >
                <div>
                  <div className="mb-3 p-2.5 rounded-full w-fit bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.4)] transition-colors">
                    <Phone size={20} className="text-[#c9a84c]" />
                  </div>
                  <h2
                    className="font-display text-lg text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Direct Phone
                  </h2>
                  <p className="text-xs text-[#d4c9b8]/80 font-light mt-1.5 leading-relaxed">
                    +91 85520 22895
                  </p>
                </div>
                <div className="mt-4 flex items-center text-[11px] font-medium uppercase tracking-widest text-[#c9a84c] opacity-75 group-hover:opacity-100 transition-opacity">
                  <span>Call Front Desk</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:maifairspa2@gmail.com"
                className="luxury-card p-5 group flex flex-col justify-between hover:border-[rgba(201,168,76,0.5)] transition-all duration-300"
              >
                <div>
                  <div className="mb-3 p-2.5 rounded-full w-fit bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.4)] transition-colors">
                    <Mail size={20} className="text-[#c9a84c]" />
                  </div>
                  <h2
                    className="font-display text-lg text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Spa Concierge
                  </h2>
                  <p className="text-xs text-[#d4c9b8]/80 font-light mt-1.5 leading-relaxed truncate">
                    maifairspa2@gmail.com
                  </p>
                </div>
                <div className="mt-4 flex items-center text-[11px] font-medium uppercase tracking-widest text-[#c9a84c] opacity-75 group-hover:opacity-100 transition-opacity">
                  <span>Send Email</span>
                </div>
              </a>

              {/* Hours */}
              <div className="luxury-card p-5 flex flex-col justify-between">
                <div>
                  <div className="mb-3 p-2.5 rounded-full w-fit bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)]">
                    <Clock size={20} className="text-[#c9a84c]" />
                  </div>
                  <h2
                    className="font-display text-lg text-[#f5f0e8]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Opening Hours
                  </h2>
                  <p className="text-xs text-[#d4c9b8]/80 font-light mt-1.5 leading-relaxed">
                    Mon – Sun: 10:00 AM – 8:00 PM
                  </p>
                </div>
                <div className="mt-4 text-[11px] font-medium uppercase tracking-widest text-[#d4c9b8]/60">
                  <span>Nagpur Sanctuary</span>
                </div>
              </div>

              {/* Services Alternative */}
              <Link
                href="/services"
                className="luxury-card p-5 group flex flex-col justify-between hover:border-[rgba(201,168,76,0.5)] transition-all duration-300"
              >
                <div>
                  <div className="mb-3 p-2.5 rounded-full w-fit bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.4)] transition-colors">
                    <Sparkles size={20} className="text-[#c9a84c]" />
                  </div>
                  <h2
                    className="font-display text-lg text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Spa Rituals
                  </h2>
                  <p className="text-xs text-[#d4c9b8]/80 font-light mt-1.5 leading-relaxed">
                    Explore our luxury treatment catalog.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-[11px] font-medium uppercase tracking-widest text-[#c9a84c] opacity-75 group-hover:opacity-100 transition-opacity">
                  <span>Browse Rituals</span>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
