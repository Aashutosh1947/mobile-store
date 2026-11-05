import React, { useState } from "react";
import { MessageCircle, CheckCircle2, Battery, HardDrive, Info, Sparkles } from "lucide-react";
import { USED_PHONES_DATA } from "../data/storeData";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";
import { formatINR } from "../utils/currency";

export const UsedPhonesSection: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>("All");

  const conditions = ["All", "Like New", "Excellent", "Good"];

  const filteredPhones =
    selectedCondition === "All"
      ? USED_PHONES_DATA
      : USED_PHONES_DATA.filter((p) => p.condition === selectedCondition);

  return (
    <section id="used-phones" className="py-20 sm:py-24 bg-white text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Verified Pre-Owned Inventory
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-3 [text-wrap:balance]">
              Premium Smartphones. Smarter Prices.
            </h2>
            <p className="text-sm sm:text-base text-[#777777]">
              Every pre-owned device at Smart Mobile Store undergoes a rigorous hardware inspection, diagnostic testing, and clean IMEI verification.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F4F4F4] border border-[#E5E5E5] text-xs text-neutral-600 shadow-sm shrink-0">
            <Info className="w-4 h-4 text-neutral-500 shrink-0" />
            <span>Sample listings · Visit store or WhatsApp for live stock</span>
          </div>
        </div>

        {/* Condition Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <span className="text-xs font-medium text-neutral-400 mr-2 shrink-0">Condition:</span>
          {conditions.map((cond) => (
            <button
              key={cond}
              type="button"
              onClick={() => setSelectedCondition(cond)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedCondition === cond
                  ? "bg-neutral-900 text-white"
                  : "bg-[#F4F4F4] text-neutral-600 hover:text-black border border-neutral-200"
              }`}
            >
              {cond}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhones.map((phone) => {
            const waMessage = `Hello ${STORE_CONFIG.businessName}, I am interested in the pre-owned ${phone.model} (${phone.ramStorage}, Condition: ${phone.condition}). Is this or similar unit currently in stock in Bilaspur?`;
            const waLink = createWhatsAppLink(waMessage);

            return (
              <div
                key={phone.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E5E5E5] hover:border-neutral-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div>
                  {/* Image container */}
                  <div className="relative w-full h-52 bg-[#090909] overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={phone.image}
                      alt={phone.model}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Condition unboxed badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md bg-white/95 text-black shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{phone.condition}</span>
                    </div>

                    {/* Battery indicator */}
                    {phone.batteryHealth && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/80 text-neutral-200 border border-neutral-700">
                        <Battery className="w-3 h-3 text-emerald-400" />
                        <span>{phone.batteryHealth}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-1">
                      <span>{phone.brand}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <HardDrive className="w-3 h-3 text-neutral-400" />
                        {phone.ramStorage}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
                      {phone.model}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-extrabold text-neutral-950 font-mono tabular-nums">
                        {formatINR(phone.samplePrice)}*
                      </span>
                      <span className="text-xs text-neutral-400">Sample Price</span>
                    </div>

                    {/* Verified Checklist */}
                    <div className="space-y-1.5 pt-4 border-t border-neutral-100 mb-2">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                        Pre-Inspected Highlights
                      </p>
                      {phone.testedChecklist.map((check, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enquire Availability & Real Photos</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4F4F4] border border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">Want to sell or exchange your old phone?</p>
              <p className="text-xs text-neutral-500">Get an instant valuation at our Bilaspur store for smart upgrade discounts.</p>
            </div>
          </div>
          <a
            href={createWhatsAppLink("Hello Smart Mobile Store, I want to sell or exchange my old phone. Please let me know how to get an evaluation in Bilaspur.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors whitespace-nowrap"
          >
            Exchange Enquiry →
          </a>
        </div>
      </div>
    </section>
  );
};
