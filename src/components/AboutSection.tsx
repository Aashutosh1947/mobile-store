import React from "react";
import { Store, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#090909] text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Store Photography */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src="/src/assets/images/store_interior_modern_1793859185981.jpg"
                alt="Smart Mobile Store retail boutique in Bilaspur"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Vyapar Vihar Road, Bilaspur (C.G.)</span>
                </div>
                <span className="font-semibold text-white">Walk-ins Welcome</span>
              </div>
            </div>
          </div>

          {/* Copy and Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
              <Store className="w-4 h-4 text-neutral-300" />
              <span>Our Bilaspur Store</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
              About {STORE_CONFIG.businessName}.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-6">
              Smart Mobile Store is a mobile retail and service destination in Bilaspur, Chhattisgarh. From brand-new smartphones and pre-owned devices to mobile accessories, SIM services and mobile repairs, we aim to make all your mobile needs convenient under one roof.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Whether you are shopping for the latest flagship release, seeking a cost-effective certified second-hand phone, requiring an immediate screen or battery repair, or needing SIM porting assistance, our store delivers clear recommendations without pushy sales tactics.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-neutral-300" />
                  <span>Authenticity Guaranteed</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Only authentic boxed accessories and verified handsets with clear documentation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <HeartHandshake className="w-4 h-4 text-neutral-300" />
                  <span>Honest Customer Advice</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We recommend the right phone or repair solution that truly fits your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
