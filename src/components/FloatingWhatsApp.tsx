import React, { useState } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { STORE_CONFIG, createWhatsAppLink } from "../config/storeConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const quickEnquiries = [
    {
      title: "New Phones",
      message: `Hello ${STORE_CONFIG.businessName}, I am interested in purchasing a brand-new smartphone. Please share the available models and prices.`,
    },
    {
      title: "Second-Hand Phones",
      message: `Hello ${STORE_CONFIG.businessName}, I am interested in purchasing a second-hand smartphone. Please share the available devices.`,
    },
    {
      title: "Mobile Repairs",
      message: `Hello ${STORE_CONFIG.businessName}, I need mobile repair services. Please contact me.`,
    },
    {
      title: "Accessories",
      message: `Hello ${STORE_CONFIG.businessName}, I want to enquire about mobile accessories.`,
    },
  ];

  const defaultWhatsAppUrl = createWhatsAppLink(
    `Hello ${STORE_CONFIG.businessName}, I am visiting your website and have an enquiry regarding mobile phones and services in Bilaspur.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Action Drawer Popup */}
      {showTooltip && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-4 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-white">Smart Mobile Store</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-md"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
            Need quick assistance in Bilaspur? Choose an enquiry topic to chat instantly on WhatsApp:
          </p>

          <div className="space-y-1.5">
            {quickEnquiries.map((q, idx) => (
              <a
                key={idx}
                href={createWhatsAppLink(q.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowTooltip(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-200 transition-colors"
              >
                <span>{q.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-neutral-800">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>General WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!showTooltip && (
          <button
            onClick={() => setShowTooltip(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900/90 text-white text-xs font-medium border border-neutral-700 shadow-lg backdrop-blur-md hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>Need Help? Chat with Us</span>
          </button>
        )}

        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 cursor-pointer"
          aria-label="Open WhatsApp Quick Enquiry"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>
    </div>
  );
};
