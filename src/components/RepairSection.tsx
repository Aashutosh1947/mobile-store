import React from "react";
import {
  Wrench,
  Tv,
  BatteryCharging,
  Zap,
  Mic,
  Cpu,
  MessageCircle,
  Clock,
  AlertCircle,
  LucideIcon,
  CheckCircle,
} from "lucide-react";
import { REPAIR_SERVICES_DATA } from "../data/storeData";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";
import { formatINR } from "../utils/currency";

const iconMap: Record<string, LucideIcon> = {
  Tv,
  BatteryCharging,
  Zap,
  Mic,
  Cpu,
  Wrench,
};

export const RepairSection: React.FC = () => {
  return (
    <section id="repairs" className="py-20 sm:py-24 bg-white text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Professional Diagnostic & Hardware Lab
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
            Expert Care for Your Smartphone.
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            From shattered AMOLED screens and depleted batteries to micro-soldering and software recovery, our technicians provide careful handling and genuine component repairs in Bilaspur.
          </p>
        </div>

        {/* 6 Repair Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REPAIR_SERVICES_DATA.map((repair) => {
            const Icon = iconMap[repair.iconName] || Wrench;
            const waMessage = `Hello ${STORE_CONFIG.businessName}, I need ${repair.title} service for my smartphone (indicative starting from ${formatINR(repair.startingPrice)}). Please provide diagnosis and repair information.`;
            const waLink = createWhatsAppLink(waMessage);

            return (
              <div
                key={repair.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#F4F4F4] hover:bg-neutral-900 border border-[#E5E5E5] hover:border-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-neutral-800 border border-neutral-200 group-hover:border-neutral-700 flex items-center justify-center text-neutral-900 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 group-hover:text-neutral-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{repair.turnaroundTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-white tracking-tight mb-1.5 transition-colors">
                    {repair.title}
                  </h3>

                  {/* Indicative Starting Estimate in Indian Rupees */}
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-400 font-medium">Starting from</span>
                    <span className="text-base font-extrabold text-neutral-900 group-hover:text-white font-mono tabular-nums transition-colors">
                      {formatINR(repair.startingPrice)}*
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#777777] group-hover:text-neutral-400 leading-relaxed mb-5 transition-colors">
                    {repair.description}
                  </p>

                  {/* Common symptoms list */}
                  <div className="pt-3 border-t border-neutral-200/70 group-hover:border-neutral-800 mb-6 transition-colors">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 group-hover:text-neutral-400 mb-2">
                      Common Symptoms Handled:
                    </p>
                    <ul className="space-y-1.5">
                      {repair.commonSymptoms.map((sym, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-neutral-700 group-hover:text-neutral-300 transition-colors"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-500 shrink-0" />
                          <span>{sym}</span>
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
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 group-hover:text-black bg-white group-hover:bg-white active:scale-[0.98] rounded-xl border border-neutral-300 group-hover:border-transparent transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Enquire Repair on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote note */}
        <p className="mb-14 text-center text-xs text-neutral-500">
          *Indicative repair estimates in Indian Rupees (INR). Final charges depend on model variant, replacement component grade, and in-person hardware diagnosis.
        </p>

        {/* 4-Step Repair Process Flow */}
        <div className="p-8 rounded-2xl bg-neutral-950 text-white border border-neutral-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              Our Transparent Repair Workflow
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              No hidden surprises. We keep your device and private data safe every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500">01</span>
              <p className="text-sm font-bold text-white">Free Initial Inspection</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We physically assess the issue and run quick diagnostics right in front of you.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500">02</span>
              <p className="text-sm font-bold text-white">Upfront Estimate</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Clear quote on parts and labor provided before any repair work commences.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500">03</span>
              <p className="text-sm font-bold text-white">Precision Repair</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Careful component replacement in anti-static environment by experienced hands.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500">04</span>
              <p className="text-sm font-bold text-white">Post-Repair QC Check</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Comprehensive touch, sensor, speaker, and charging test before device handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
