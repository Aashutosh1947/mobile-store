import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  PhoneCall,
  Send,
  CheckCircle,
  ExternalLink,
  Store,
} from "lucide-react";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Brand New Smartphone Enquiry",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const serviceOptions = [
    "Brand New Smartphone Enquiry",
    "Second-Hand Smartphone Enquiry",
    "Display / Screen Replacement",
    "Battery / Charging Port Repair",
    "General Mobile Repair",
    "Tempered Glass / Mobile Accessories",
    "SIM Porting (MNP) / New SIM Card",
    "Old Phone Sale / Exchange Enquiry",
    "General Store Enquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and phone number to continue.");
      return;
    }

    // Compose prefilled WhatsApp message
    const formattedMessage = `Hello ${STORE_CONFIG.businessName},

I would like to enquire about your store services:
• Customer Name: ${formData.name.trim()}
• Contact Phone: ${formData.phone.trim()}
• Service Required: ${formData.service}
${formData.message.trim() ? `• Message / Phone Model: ${formData.message.trim()}` : ""}

Please share current details and availability at your Bilaspur store.`;

    const targetUrl = createWhatsAppLink(formattedMessage);

    // Open WhatsApp
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  const generalWhatsAppUrl = createWhatsAppLink(
    `Hello ${STORE_CONFIG.businessName}, I would like to visit your store in Bilaspur. Please assist with your store directions and working hours.`
  );

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white text-[#171717] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Get in Touch · Bilaspur Store
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-4 [text-wrap:balance]">
            Visit Smart Mobile Store.
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            Drop by our retail store for hands-on device trials, quick repair diagnostics, or contact us directly via WhatsApp or phone call for rapid assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Business Details & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F4F4] border border-[#E5E5E5]">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-neutral-700" />
                <span>Store Information</span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Business Name & City */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{STORE_CONFIG.businessName}</p>
                    <p className="text-[#777777] mt-0.5 leading-relaxed">{STORE_CONFIG.fullAddress}</p>
                    <p className="text-xs text-neutral-400 mt-1">Landmark: {STORE_CONFIG.landmark}</p>
                  </div>
                </div>

                {/* Phone number */}
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-200">
                  <Phone className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">Phone Call</p>
                    <p className="text-neutral-700 font-mono mt-0.5">{STORE_CONFIG.displayPhone}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Editable in storeConfig.ts</p>
                  </div>
                </div>

                {/* WhatsApp number */}
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-200">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">WhatsApp Support</p>
                    <p className="text-neutral-700 font-mono mt-0.5">{STORE_CONFIG.displayWhatsApp}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Instant response during store hours</p>
                  </div>
                </div>

                {/* Business hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-200">
                  <Clock className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">Business Hours</p>
                    <p className="text-[#777777] mt-0.5">{STORE_CONFIG.businessHours.weekdays}</p>
                    <p className="text-[#777777] mt-0.5">{STORE_CONFIG.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Call & WhatsApp Quick Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-neutral-200">
                <a
                  href={STORE_CONFIG.phoneCallUrl}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-100 border border-neutral-300 active:scale-[0.98] transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-neutral-100 shadow-sm">
              <div className="p-3 bg-neutral-900 text-white flex items-center justify-between text-xs">
                <span className="font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                  Bilaspur Store Location
                </span>
                <a
                  href="https://maps.google.com/?q=Bilaspur+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  Open Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe
                title="Smart Mobile Store Bilaspur Location"
                src={STORE_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F4F4] border border-[#E5E5E5]">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                  Send a WhatsApp Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#777777]">
                  Fill in your requirements below. Submitting will open your WhatsApp with a prefilled message addressed directly to Smart Mobile Store.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">WhatsApp Launched</p>
                    <p className="text-emerald-700 mt-0.5">
                      Your enquiry message was compiled and opened in WhatsApp. Please tap &ldquo;Send&rdquo; in WhatsApp to deliver it to our store team.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Customer Name *
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="customer-service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="customer-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="customer-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Message / Phone Model & Specific Issue
                  </label>
                  <textarea
                    id="customer-message"
                    rows={4}
                    placeholder="e.g. Looking for iPhone 15 Pro 256GB Black availability OR My Samsung S22 screen is cracked and needs replacement."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Proceed to WhatsApp with Enquiry</span>
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                    Notice: This action opens WhatsApp directly. No automated or spam messages will ever be sent.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
