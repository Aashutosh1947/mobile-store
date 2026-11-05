/**
 * Centralized Store Configuration
 * Editable business information for Smart Mobile Store, Bilaspur.
 * All phone numbers, addresses, and hours can be updated here.
 */

export interface StoreContactConfig {
  businessName: string;
  tagline: string;
  city: string;
  state: string;
  country: string;
  // Raw numeric string for wa.me links (with country code, no + or spaces)
  whatsappNumber: string;
  // Human readable display phone numbers
  displayWhatsApp: string;
  displayPhone: string;
  phoneCallUrl: string;
  fullAddress: string;
  addressNote: string;
  landmark: string;
  businessHours: {
    weekdays: string;
    sunday: string;
  };
  googleMapsEmbedUrl: string;
  socials: {
    facebook?: string;
    instagram?: string;
    googleBusiness?: string;
  };
}

export const STORE_CONFIG: StoreContactConfig = {
  businessName: "Smart Mobile Store",
  tagline: "Your Trusted Destination for Everything Mobile",
  city: "Bilaspur",
  state: "Chhattisgarh",
  country: "India",
  // Editable placeholder: 10-digit Indian mobile number prefixed with country code 91
  whatsappNumber: "919876543210",
  displayWhatsApp: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  phoneCallUrl: "tel:+919876543210",
  fullAddress: "Shop No. 14, Ground Floor, City Central Complex, Vyapar Vihar Road, Bilaspur, Chhattisgarh 495001",
  addressNote: "Store address placeholder – editable in storeConfig.ts",
  landmark: "Near Vyapar Vihar Main Square",
  businessHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 9:00 PM",
    sunday: "Sunday: 11:00 AM – 7:00 PM",
  },
  // Clean embed URL for Bilaspur location
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118545.92209774653!2d82.08325777473064!3d22.07973003450917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9ab6a7%3A0xc6f315a81a704764!2sBilaspur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleBusiness: "https://maps.google.com",
  },
};

/**
 * Creates properly formatted, URL-encoded WhatsApp link
 */
export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encoded}`;
}
