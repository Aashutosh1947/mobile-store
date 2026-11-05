import React from "react";
import {
  Smartphone,
  Repeat,
  ShieldCheck,
  Wrench,
  Tv,
  BatteryCharging,
  Zap,
  Headphones,
  ArrowLeftRight,
  CreditCard,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../data/storeData";
import { createWhatsAppLink } from "../config/storeConfig";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Repeat,
  ShieldCheck,
  Wrench,
  Tv,
  BatteryCharging,
  Zap,
  Headphones,
  ArrowLeftRight,
  CreditCard,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Store Capabilities & Offerings
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
            Everything Your Smartphone Needs.
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            From buying a new phone to repairing your existing one, we have got you covered.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Smartphone;
            const waLink = createWhatsAppLink(service.whatsappMessage);

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#F4F4F4] hover:bg-neutral-900 border border-[#E5E5E5] hover:border-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-neutral-800 border border-neutral-200 group-hover:border-neutral-700 flex items-center justify-center text-neutral-900 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-500 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-white tracking-tight mb-2 transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777777] group-hover:text-neutral-400 leading-relaxed mb-6 transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 group-hover:border-neutral-800 transition-colors duration-200">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-neutral-900 group-hover:text-white py-2 transition-colors duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-400" />
                      Enquire on WhatsApp
                    </span>
                    <span className="text-neutral-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
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
