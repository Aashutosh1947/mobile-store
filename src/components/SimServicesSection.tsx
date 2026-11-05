import React from "react";
import { ArrowLeftRight, CreditCard, HelpCircle, MessageCircle, CheckCircle2, Shield } from "lucide-react";
import { SIM_SERVICES_DATA } from "../data/storeData";
import { createWhatsAppLink } from "../config/storeConfig";

export const SimServicesSection: React.FC = () => {
  return (
    <section id="sim-services" className="py-20 sm:py-24 bg-[#F4F4F4] text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Telecom & Connectivity Hub
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
            Quick and Convenient SIM Services.
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            Get hassle-free SIM activation, seamless operator porting (MNP), and duplicate SIM assistance with biometric instant verification at Smart Mobile Store in Bilaspur.
          </p>
        </div>

        {/* 3 SIM Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SIM_SERVICES_DATA.map((sim) => {
            const Icon =
              sim.iconName === "ArrowLeftRight"
                ? ArrowLeftRight
                : sim.iconName === "CreditCard"
                ? CreditCard
                : HelpCircle;

            const waLink = createWhatsAppLink(sim.whatsappMessage);

            return (
              <div
                key={sim.id}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E5E5E5] hover:border-neutral-400 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-3">
                    {sim.title}
                  </h3>

                  <p className="text-sm text-[#777777] leading-relaxed mb-6">
                    {sim.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 mb-6">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                      Required for e-KYC:
                    </p>
                    <ul className="space-y-2">
                      {sim.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enquire SIM on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operator Badge Row with unboxed styling */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Shield className="w-4 h-4 text-neutral-400" />
            <span>Authorized Telecom Assistance for All Major Indian Networks:</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-bold text-neutral-900">
            <span>Jio 5G</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Airtel 5G Plus</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Vodafone Idea (Vi)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
