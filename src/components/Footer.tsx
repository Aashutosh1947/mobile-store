import React from "react";
import { Smartphone, MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Globe } from "lucide-react";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090909] text-white border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1 & 2: Logo and Brand overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-sm">
                <Smartphone className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span>{STORE_CONFIG.businessName}</span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Your trusted mobile destination in Bilaspur, Chhattisgarh. Offering brand new smartphones, verified second-hand devices, premium accessories, expert repairs, and convenient SIM services under one roof.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STORE_CONFIG.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Google Maps Business Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => scrollTo("hero")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("new-phones")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Brand New Phones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("used-phones")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Second-Hand Phones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("accessories")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mobile Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => scrollTo("repairs")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Display Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("repairs")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Battery Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("repairs")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Charging Port Fix
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("sim-services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  SIM Porting (MNP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("sim-services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  New SIM Card
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tempered Glass Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Store Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Store Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <p>Vyapar Vihar Road, Bilaspur, Chhattisgarh</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-300 shrink-0" />
                <a href={STORE_CONFIG.phoneCallUrl} className="hover:text-white transition-colors font-mono">
                  {STORE_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={createWhatsAppLink(`Hello ${STORE_CONFIG.businessName}, I have a general enquiry.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {STORE_CONFIG.displayWhatsApp}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-neutral-800">
                <Clock className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <p>Mon–Sat: 10AM–9PM <br /> Sun: 11AM–7PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {STORE_CONFIG.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Bilaspur, Chhattisgarh</span>
            <span aria-hidden="true">·</span>
            <span>Retail & Repair Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
