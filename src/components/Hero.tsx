import React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Wrench, Sparkles, MapPin } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-[#090909] text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-neutral-800/20 via-neutral-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial location kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 mb-6 font-medium">
          <MapPin className="w-3.5 h-3.5 text-neutral-300" />
          <span>Bilaspur, Chhattisgarh</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Retail · Second-Hand · Repairs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 [text-wrap:balance]">
              Your Trusted Destination for Everything Mobile.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-8 max-w-2xl">
              Discover the latest smartphones, quality pre-owned devices, mobile accessories and reliable repair services at Smart Mobile Store, Bilaspur.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-black bg-white rounded-full hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-full hover:bg-neutral-800 hover:border-neutral-600 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-neutral-300" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Clean unboxed proof points with typographic separators */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neutral-300 shrink-0" />
                <span>100% Genuine Products</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-neutral-300 shrink-0" />
                <span>Expert In-Store Repairs</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-neutral-300 shrink-0" />
                <span>Verified Pre-Owned Devices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group">
              <img
                src="/images/hero/hero-flagship.jpg"
                alt="Flagship smartphones showcase at Smart Mobile Store Bilaspur"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/fallback/phone-fallback.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              
              {/* Overlay card banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Flagship Lineup Available</p>
                  <p className="text-sm font-semibold text-white">Apple · Samsung · OnePlus & More</p>
                </div>
                <button
                  onClick={() => scrollTo("new-phones")}
                  className="px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  View Models
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
