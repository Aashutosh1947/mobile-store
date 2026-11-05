import React, { useState } from "react";
import { MessageCircle, ShieldCheck, Zap, Headphones, Sparkles, Check } from "lucide-react";
import { ACCESSORIES_DATA, AccessoryItem } from "../data/storeData";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";
import { formatINR } from "../utils/currency";

export const AccessoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Tempered Glass",
    "Mobile Back Covers",
    "Fast Chargers",
    "USB Cables",
    "Earphones",
    "Wireless Accessories",
    "Screen Protectors",
  ];

  const filtered =
    activeCategory === "All"
      ? ACCESSORIES_DATA
      : ACCESSORIES_DATA.filter((acc) => acc.category === activeCategory);

  return (
    <section id="accessories" className="py-20 sm:py-24 bg-[#F4F4F4] text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Essential Additions & Protection
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
              Accessories That Complete Your Experience.
            </h2>
            <p className="text-sm sm:text-base text-[#777777] leading-relaxed max-w-xl">
              From heavy-duty drop protection to lightning-fast GaN charging, equip your smartphone with durable, premium-grade accessories tested for everyday life.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-md">
              <img
                src="/images/accessories/accessories-hero.jpg"
                alt="Premium mobile accessories at Smart Mobile Store"
                className="w-full h-48 sm:h-56 object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/fallback/phone-fallback.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <p className="text-xs font-medium text-neutral-200">
                  Ready in store: Cases · Protectors · Cables · Audio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills (Interactive Segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-black border border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessories Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => {
            const waMessage = `Hello ${STORE_CONFIG.businessName}, I want to enquire about ${item.name} (${item.category}, starting from ${formatINR(item.startingPrice)}). Do you have compatibility for my phone model?`;
            const waLink = createWhatsAppLink(waMessage);

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-neutral-400 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <div className="relative w-full h-36 bg-neutral-100 rounded-xl overflow-hidden mb-3.5 border border-neutral-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/accessories/accessories-hero.jpg";
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2 text-xs text-neutral-400 font-medium">
                    <span>{item.category}</span>
                    <span className="flex items-center gap-1 text-neutral-800 font-semibold bg-neutral-100 px-2 py-0.5 rounded-md text-[11px]">
                      <Check className="w-3 h-3 text-emerald-600" />
                      In-Store
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-black transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-baseline justify-between mb-3 pt-2.5 border-t border-neutral-100">
                    <span className="text-xs text-neutral-500 font-medium">Starting from</span>
                    <span className="text-base font-extrabold text-neutral-950 font-mono tabular-nums">
                      {formatINR(item.startingPrice)}
                    </span>
                  </div>

                  <div className="mb-4 text-xs font-medium text-neutral-600 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.keyFeature}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:scale-[0.98] rounded-xl transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enquire for Your Phone</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
