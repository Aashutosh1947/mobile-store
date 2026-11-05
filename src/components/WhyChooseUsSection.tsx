import React from "react";
import { Smartphone, Tag, Wrench, ShieldCheck, HeartHandshake, LucideIcon } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data/storeData";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Tag,
  Wrench,
  ShieldCheck,
  HeartHandshake,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            The Smart Mobile Store Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
            Why Smart Mobile Store?
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            We are dedicated to providing Bilaspur with honest guidance, authentic hardware, fair pricing, and dependable after-sales care.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WHY_CHOOSE_US_DATA.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Smartphone;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#F4F4F4] border border-[#E5E5E5] hover:border-neutral-400 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Commitment</span>
                  <span className="tabular-nums">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
