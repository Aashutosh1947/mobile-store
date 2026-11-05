import React, { useState } from "react";
import { MessageCircle, Cpu, Camera, Monitor, HardDrive, Info } from "lucide-react";
import { NEW_PHONES_DATA, NewPhoneItem } from "../data/storeData";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";
import { formatINR } from "../utils/currency";

export const NewPhonesSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("All");

  const brands = ["All", "Apple", "Samsung", "OnePlus", "Vivo", "Oppo", "Realme", "Xiaomi"];

  const filteredPhones =
    selectedBrand === "All"
      ? NEW_PHONES_DATA
      : NEW_PHONES_DATA.filter((phone) => phone.brand.toLowerCase() === selectedBrand.toLowerCase());

  return (
    <section id="new-phones" className="py-20 sm:py-24 bg-[#F4F4F4] text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Brand New Retail Devices
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-3 [text-wrap:balance]">
              Explore the Latest Smartphones.
            </h2>
            <p className="text-sm sm:text-base text-[#777777]">
              Official sealed smartphones with authentic brand warranty. Contact our Bilaspur store for real-time stock availability and current pricing.
            </p>
          </div>

          {/* Transparent sample data disclaimer badge as requested */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E5E5] text-xs text-neutral-500 shadow-sm shrink-0">
            <Info className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>Sample demo catalog · Inquire for live store stock</span>
          </div>
        </div>

        {/* Brand Filter Tabs (Segmented control buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {brands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedBrand === brand
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-black border border-neutral-200 hover:border-neutral-300"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhones.map((phone) => {
            const waMessage = `Hello ${STORE_CONFIG.businessName}, I am interested in purchasing the brand-new ${phone.brand} ${phone.model}. Please share the current store price, available storage variants, and color options in Bilaspur.`;
            const waLink = createWhatsAppLink(waMessage);

            return (
              <div
                key={phone.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E5E5E5] hover:border-neutral-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div>
                  {/* Image container */}
                  <div className="relative w-full h-52 bg-neutral-950 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={phone.image}
                      alt={`${phone.brand} ${phone.model}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider uppercase text-neutral-300 bg-neutral-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-neutral-800">
                      {phone.brand}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-200 font-medium truncate">
                      {phone.highlight}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-1">
                      {phone.model}
                    </h3>

                    {/* Price with disclaimer */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-extrabold text-neutral-950 font-mono tabular-nums">
                        {formatINR(phone.samplePrice)}*
                      </span>
                      <span className="text-[11px] text-neutral-400">Sample MRP</span>
                    </div>

                    {/* Technical Specifications */}
                    <div className="space-y-2 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{phone.specs.processor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{phone.specs.camera}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{phone.specs.display}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{phone.specs.storage}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enquire Live Price & Stock</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-neutral-500">
          *Listed prices are indicative sample manufacturer figures for demonstration. Actual store prices in Bilaspur depend on ongoing seasonal offers, bank discounts, and storage variant.
        </p>
      </div>
    </section>
  );
};
