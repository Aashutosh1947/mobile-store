/**
 * Centralized Store Data Arrays
 * All products, services, specifications, and sample prices can be edited here.
 * Strictly uses Indian Rupees (INR) exclusively with en-IN number formatting.
 */

import { formatINR } from "../utils/currency";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

export interface NewPhoneItem {
  id: string;
  brand: "Apple" | "Samsung" | "OnePlus" | "Vivo" | "Oppo" | "Realme" | "Xiaomi";
  model: string;
  samplePrice: number;
  samplePriceDisplay: string;
  specs: {
    processor: string;
    camera: string;
    display: string;
    storage: string;
  };
  highlight: string;
  image: string;
}

export interface UsedPhoneItem {
  id: string;
  brand: string;
  model: string;
  condition: "Like New" | "Excellent" | "Good";
  ramStorage: string;
  samplePrice: number;
  samplePriceDisplay: string;
  batteryHealth?: string;
  warrantySample: string;
  image: string;
  testedChecklist: string[];
}

export interface AccessoryItem {
  id: string;
  category: "Tempered Glass" | "Mobile Back Covers" | "Fast Chargers" | "USB Cables" | "Earphones" | "Wireless Accessories" | "Screen Protectors";
  name: string;
  description: string;
  startingPrice: number;
  samplePriceDisplay: string;
  keyFeature: string;
}

export interface RepairItem {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  samplePriceDisplay: string;
  turnaroundTime: string;
  commonSymptoms: string[];
  iconName: string;
}

export interface SimServiceItem {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  iconName: string;
  whatsappMessage: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

// 1. SERVICES (10 Services strictly adhering to Section 3)
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-brand-new",
    title: "Brand New Smartphones",
    description: "Latest 5G flagship and budget models from Apple, Samsung, OnePlus, Vivo, Oppo, Realme, and Xiaomi with full manufacturer warranty.",
    iconName: "Smartphone",
    whatsappMessage: "Hello Smart Mobile Store, I am interested in purchasing a brand-new smartphone. Please share the available models and prices.",
  },
  {
    id: "srv-second-hand",
    title: "Second-Hand Smartphones",
    description: "Quality pre-owned and verified devices thoroughly inspected across 30+ quality checkpoints, offering top performance at smart prices.",
    iconName: "Repeat",
    whatsappMessage: "Hello Smart Mobile Store, I am interested in purchasing a second-hand smartphone. Please share the available devices.",
  },
  {
    id: "srv-tempered-glass",
    title: "Tempered Glass Installation",
    description: "Edge-to-edge bubble-free precision installation of 9H tempered glass, UV curved glass, privacy filters, and matte gaming protectors.",
    iconName: "ShieldCheck",
    whatsappMessage: "Hello Smart Mobile Store, I need tempered glass installation for my smartphone. Please let me know the availability.",
  },
  {
    id: "srv-mobile-repair",
    title: "Mobile Phone Repair",
    description: "Comprehensive chip-level and hardware diagnostics and repair for all major Android and iOS smartphones by skilled technicians.",
    iconName: "Wrench",
    whatsappMessage: "Hello Smart Mobile Store, I need mobile repair services. Please contact me with details.",
  },
  {
    id: "srv-display-replacement",
    title: "Display Replacement",
    description: "High-grade OLED, AMOLED, and IPS LCD screen replacements with responsive touch calibration and vivid color restoration.",
    iconName: "Tv",
    whatsappMessage: "Hello Smart Mobile Store, I need display/screen replacement for my phone. Please share estimated options.",
  },
  {
    id: "srv-battery-replacement",
    title: "Battery Replacement",
    description: "Safe replacement of draining, swollen, or degraded phone batteries with tested high-capacity cells for sustained battery backup.",
    iconName: "BatteryCharging",
    whatsappMessage: "Hello Smart Mobile Store, my smartphone battery needs replacement. Please let me know price and availability.",
  },
  {
    id: "srv-charging-port",
    title: "Charging Port Repair",
    description: "Fast fix and replacement for loose Type-C, Lightning, and micro-USB charging sockets, slow-charging faults, and microphone pins.",
    iconName: "Zap",
    whatsappMessage: "Hello Smart Mobile Store, my phone charging port is loose/not charging. Please assist with repair details.",
  },
  {
    id: "srv-accessories",
    title: "Mobile Accessories",
    description: "Premium protective back covers, GaN fast chargers, braided USB cables, wired earphones, and wireless audio gear.",
    iconName: "Headphones",
    whatsappMessage: "Hello Smart Mobile Store, I want to enquire about mobile accessories available in your store.",
  },
  {
    id: "srv-sim-porting",
    title: "SIM Porting Services (MNP)",
    description: "Seamless Mobile Number Portability (MNP) to Jio, Airtel, and Vi while retaining your current mobile number with zero hassle.",
    iconName: "ArrowLeftRight",
    whatsappMessage: "Hello Smart Mobile Store, I would like to port my SIM card (MNP). Please guide me with the steps and documentation.",
  },
  {
    id: "srv-new-sim",
    title: "New SIM Cards",
    description: "Instant Aadhaar digital e-KYC activation for new prepaid and postpaid SIM cards with attractive first-recharge benefit plans.",
    iconName: "CreditCard",
    whatsappMessage: "Hello Smart Mobile Store, I need a new SIM card. Please share the documents needed and available offers.",
  },
];

// 2. BRAND NEW SMARTPHONES (Sample demo data in Indian Rupees INR exclusively)
export const NEW_PHONES_DATA: NewPhoneItem[] = [
  {
    id: "new-apple-15pro",
    brand: "Apple",
    model: "iPhone 15 Pro",
    samplePrice: 124900,
    samplePriceDisplay: `${formatINR(124900)}*`,
    specs: {
      processor: "A17 Pro 3nm Chip",
      camera: "48MP Triple Lens with 3x Optical",
      display: "6.1\" Super Retina XDR 120Hz",
      storage: "128GB / 256GB / 512GB",
    },
    highlight: "Aerospace Titanium Design",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-samsung-s24u",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    samplePrice: 129999,
    samplePriceDisplay: `${formatINR(129999)}*`,
    specs: {
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP Quad ProVisual Engine",
      display: "6.8\" Dynamic AMOLED 2X Flat",
      storage: "256GB / 512GB / 1TB",
    },
    highlight: "Galaxy AI & Built-in S-Pen",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-oneplus-12",
    brand: "OnePlus",
    model: "OnePlus 12 5G",
    samplePrice: 64999,
    samplePriceDisplay: `${formatINR(64999)}*`,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      camera: "4th Gen Hasselblad Camera System",
      display: "6.82\" 2K 120Hz ProXDR",
      storage: "16GB RAM + 512GB ROM",
    },
    highlight: "100W SUPERVOOC Fast Charge",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-vivo-x100",
    brand: "Vivo",
    model: "Vivo X100 Pro 5G",
    samplePrice: 89999,
    samplePriceDisplay: `${formatINR(89999)}*`,
    specs: {
      processor: "Dimensity 9300 Flagship",
      camera: "ZEISS 1-inch Main Sensor + APO Telephoto",
      display: "6.78\" 120Hz LTPO AMOLED",
      storage: "16GB RAM + 512GB Storage",
    },
    highlight: "ZEISS Optical Professional Lens",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-oppo-reno11",
    brand: "Oppo",
    model: "Oppo Reno 11 Pro 5G",
    samplePrice: 37999,
    samplePriceDisplay: `${formatINR(37999)}*`,
    specs: {
      processor: "MediaTek Dimensity 8200",
      camera: "32MP Telephoto Portrait Camera",
      display: "6.7\" 3D Curved AMOLED 120Hz",
      storage: "12GB RAM + 256GB Storage",
    },
    highlight: "Ultra-Clear Portrait Camera",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-realme-12pro",
    brand: "Realme",
    model: "Realme 12 Pro+ 5G",
    samplePrice: 29999,
    samplePriceDisplay: `${formatINR(29999)}*`,
    specs: {
      processor: "Snapdragon 7s Gen 2",
      camera: "64MP Periscope Portrait Camera",
      display: "120Hz Curved Vision Display",
      storage: "8GB / 12GB RAM + 256GB",
    },
    highlight: "Luxury Watch Dial Design",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
  {
    id: "new-xiaomi-14",
    brand: "Xiaomi",
    model: "Xiaomi 14 5G",
    samplePrice: 69999,
    samplePriceDisplay: `${formatINR(69999)}*`,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      camera: "Leica Summilux Optical 50MP",
      display: "6.36\" Compact 1.5K AMOLED",
      storage: "12GB RAM + 512GB Storage",
    },
    highlight: "Co-engineered with Leica",
    image: "/src/assets/images/hero_smartphones_flagship_1793859184652.jpg",
  },
];

// 3. SECOND-HAND SMARTPHONES (Demo listings in Indian Rupees INR exclusively)
export const USED_PHONES_DATA: UsedPhoneItem[] = [
  {
    id: "used-ip14pro",
    brand: "Apple",
    model: "iPhone 14 Pro (Space Black)",
    condition: "Like New",
    ramStorage: "128GB Storage",
    samplePrice: 68500,
    samplePriceDisplay: `${formatINR(68500)}*`,
    batteryHealth: "89% Health",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["Original Screen", "Face ID 100% Functional", "Clean IMEI / iCloud Clean", "Zero Scratches"],
  },
  {
    id: "used-s23u",
    brand: "Samsung",
    model: "Galaxy S23 Ultra 5G (Green)",
    condition: "Excellent",
    ramStorage: "12GB RAM · 256GB ROM",
    samplePrice: 62000,
    samplePriceDisplay: `${formatINR(62000)}*`,
    batteryHealth: "Excellent (Tested >90%)",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["Original S-Pen Included", "100x Space Zoom Tested", "Clean Motherboard", "Fast Charging Verified"],
  },
  {
    id: "used-op11",
    brand: "OnePlus",
    model: "OnePlus 11 5G (Titan Black)",
    condition: "Like New",
    ramStorage: "16GB RAM · 256GB ROM",
    samplePrice: 34500,
    samplePriceDisplay: `${formatINR(34500)}*`,
    batteryHealth: "Superb Dual-Cell Backup",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["Original 100W Warp Charger", "Hasselblad Camera Tested", "No Display Line Issue", "Alert Slider Working"],
  },
  {
    id: "used-ip13",
    brand: "Apple",
    model: "iPhone 13 (Midnight Blue)",
    condition: "Good",
    ramStorage: "128GB Storage",
    samplePrice: 36900,
    samplePriceDisplay: `${formatINR(36900)}*`,
    batteryHealth: "87% Health",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["TrueTone Active", "Cameras Spotless", "Original Box Available", "Minimal Bezel Wear"],
  },
  {
    id: "used-vivo-v29",
    brand: "Vivo",
    model: "Vivo V29 5G (Himalayan Blue)",
    condition: "Like New",
    ramStorage: "8GB RAM · 128GB ROM",
    samplePrice: 20500,
    samplePriceDisplay: `${formatINR(20500)}*`,
    batteryHealth: "Original Battery 100%",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["Smart Aura Light Tested", "Curved AMOLED Flawless", "Original FlashCharge adapter", "Single Owner Device"],
  },
  {
    id: "used-pixel-7a",
    brand: "Google",
    model: "Pixel 7a 5G (Charcoal)",
    condition: "Excellent",
    ramStorage: "8GB RAM · 128GB ROM",
    samplePrice: 24000,
    samplePriceDisplay: `${formatINR(24000)}*`,
    batteryHealth: "Full Day Battery Health",
    warrantySample: "Store Testing Warranty Included",
    image: "/src/assets/images/refurbished_smartphones_lineup_1793859185286.jpg",
    testedChecklist: ["Google Tensor G2 Chip", "Pure Pixel Camera Verified", "Wireless Charging Active", "Original Type-C Cable"],
  },
];

// 4. MOBILE ACCESSORIES (Section 6 - Indian Rupees INR)
export const ACCESSORIES_DATA: AccessoryItem[] = [
  {
    id: "acc-tempered",
    category: "Tempered Glass",
    name: "9H Edge-to-Edge Tempered Glass",
    description: "Oleophobic anti-fingerprint coating with reinforced shatterproof curved edges for all popular smartphone models.",
    startingPrice: 99,
    samplePriceDisplay: `From ${formatINR(99)}`,
    keyFeature: "Oleophobic 9H Hardness",
  },
  {
    id: "acc-covers",
    category: "Mobile Back Covers",
    name: "Premium Matte & Silicone Cases",
    description: "Shock-absorbent slim fit cases, MagSafe compatible rings, rugged military-drop covers, and transparent anti-yellowing shells.",
    startingPrice: 149,
    samplePriceDisplay: `From ${formatINR(149)}`,
    keyFeature: "Drop Protection & Grip",
  },
  {
    id: "acc-chargers",
    category: "Fast Chargers",
    name: "GaN Fast Power Adapters (20W – 100W)",
    description: "Compact dual-port Type-C power delivery chargers supporting PD 3.0, QC 4+, and SUPERVOOC fast charging protocols safely.",
    startingPrice: 499,
    samplePriceDisplay: `From ${formatINR(499)}`,
    keyFeature: "Overheating Protection",
  },
  {
    id: "acc-cables",
    category: "USB Cables",
    name: "Braided Fast Charging & Data Cables",
    description: "Heavy-duty nylon braided Type-C to Type-C, Lightning, and 3-in-1 universal cables rated for up to 100W power delivery.",
    startingPrice: 199,
    samplePriceDisplay: `From ${formatINR(199)}`,
    keyFeature: "10,000+ Bend Tested",
  },
  {
    id: "acc-earphones",
    category: "Earphones",
    name: "Hi-Res Type-C & 3.5mm Earphones",
    description: "Tangle-free in-ear wired earphones with built-in HD microphone, deep bass acoustic drivers, and clear calling clarity.",
    startingPrice: 299,
    samplePriceDisplay: `From ${formatINR(299)}`,
    keyFeature: "HD Mic & Deep Bass",
  },
  {
    id: "acc-wireless",
    category: "Wireless Accessories",
    name: "TWS Earbuds & Magnetic Car Mounts",
    description: "Low-latency wireless earbuds with active noise cancellation alongside magnetic car mounts and desktop charging stands.",
    startingPrice: 899,
    samplePriceDisplay: `From ${formatINR(899)}`,
    keyFeature: "Bluetooth 5.3 & Low Latency",
  },
  {
    id: "acc-screen-protectors",
    category: "Screen Protectors",
    name: "Privacy & UV Curved Protectors",
    description: "Specialized two-way privacy screen films and liquid optical UV glue protectors for curved Samsung, Vivo, and OnePlus screens.",
    startingPrice: 199,
    samplePriceDisplay: `From ${formatINR(199)}`,
    keyFeature: "Two-Way Privacy Shield",
  },
];

// 5. MOBILE REPAIRING (Section 7 - Indian Rupees INR)
export const REPAIR_SERVICES_DATA: RepairItem[] = [
  {
    id: "rep-display",
    title: "Display & Screen Replacement",
    description: "Cracked glass, black screen lines, touch flickering, or broken OLEDs repaired using precision laminating machinery.",
    startingPrice: 1499,
    samplePriceDisplay: `From ${formatINR(1499)}*`,
    turnaroundTime: "Same-Day Service available for popular models",
    commonSymptoms: ["Cracked outer glass", "Vertical colored lines", "Unresponsive touch spots", "Blank black display"],
    iconName: "Tv",
  },
  {
    id: "rep-battery",
    title: "Battery Replacement",
    description: "Fast-draining batteries, unexpected shutdowns, and swollen back panels replaced with fresh tested battery units.",
    startingPrice: 799,
    samplePriceDisplay: `From ${formatINR(799)}*`,
    turnaroundTime: "Quick 30–60 minutes service",
    commonSymptoms: ["Battery drains in few hours", "Phone heats up while idling", "Back cover lifting up", "Shuts down at 20%"],
    iconName: "BatteryCharging",
  },
  {
    id: "rep-port",
    title: "Charging Port Repair",
    description: "Faulty Type-C, micro-USB, and Lightning pins cleaned, reflowed, or swapped to restore reliable quick charge speeds.",
    startingPrice: 349,
    samplePriceDisplay: `From ${formatINR(349)}*`,
    turnaroundTime: "Approx. 45 minutes",
    commonSymptoms: ["Cable must be held at an angle", "Slow charging notification", "Moisture detected warning", "Loose charging pin"],
    iconName: "Zap",
  },
  {
    id: "rep-sound",
    title: "Speaker & Microphone Repair",
    description: "Low earpiece volume during calls, muffled loudspeaker sound, or microphone receiver failures restored to clear audio.",
    startingPrice: 299,
    samplePriceDisplay: `From ${formatINR(299)}*`,
    turnaroundTime: "Same-day service",
    commonSymptoms: ["Caller cannot hear your voice", "Distorted music playback", "Very low call receiver sound", "Buzzing audio"],
    iconName: "Mic",
  },
  {
    id: "rep-software",
    title: "Software Troubleshooting",
    description: "Resolving bootloops, forgotten PIN/pattern locks, hanging OS updates, lagging software, and secure data backup.",
    startingPrice: 199,
    samplePriceDisplay: `From ${formatINR(199)}*`,
    turnaroundTime: "1 to 3 hours depending on diagnosis",
    commonSymptoms: ["Phone stuck on brand logo", "System UI continuously crashing", "Storage full freeze", "Corrupted firmware"],
    iconName: "Cpu",
  },
  {
    id: "rep-general",
    title: "General Mobile Repair",
    description: "Water damage recovery, power/volume button stiffness, SIM card tray ejector jams, camera glass cracked replacement.",
    startingPrice: 249,
    samplePriceDisplay: `From ${formatINR(249)}*`,
    turnaroundTime: "Post inspection turnaround",
    commonSymptoms: ["Liquid accidental spill", "Power button not clicking", "Camera glass scratched", "Network antenna drop"],
    iconName: "Wrench",
  },
];

// 6. SIM SERVICES (Section 8)
export const SIM_SERVICES_DATA: SimServiceItem[] = [
  {
    id: "sim-mnp",
    title: "SIM Porting (MNP)",
    description: "Switch your existing mobile operator to Jio, Airtel, or Vi without changing your mobile number. Quick digital paperless activation.",
    requirements: ["Active working SIM with SMS balance", "Aadhaar Card for biometric e-KYC", "UPC (Unique Porting Code) from 1900"],
    iconName: "ArrowLeftRight",
    whatsappMessage: "Hello Smart Mobile Store, I want to port my mobile number (MNP). Please assist me with the process.",
  },
  {
    id: "sim-new",
    title: "New SIM Card Activation",
    description: "Get a fresh prepaid or postpaid SIM card instantly with quick digital verification and your choice of exciting first recharge packs.",
    requirements: ["Original Aadhaar Card", "Physical presence of the SIM applicant", "Alternative emergency contact number"],
    iconName: "CreditCard",
    whatsappMessage: "Hello Smart Mobile Store, I would like to get a new SIM card. Please let me know what plans are available.",
  },
  {
    id: "sim-assistance",
    title: "SIM Related Assistance",
    description: "Assistance with lost SIM replacement (Duplicate SIM), 4G to 5G SIM upgrades, SIM format trimming (Micro/Nano), and network settings.",
    requirements: ["Registered mobile number details", "Original ID proof for verification", "Device for on-spot network APN test"],
    iconName: "HelpCircle",
    whatsappMessage: "Hello Smart Mobile Store, I need assistance regarding my SIM card (replacement / upgrade). Please help.",
  },
];

// 7. WHY CHOOSE US (Section 9)
export const WHY_CHOOSE_US_DATA: FeatureItem[] = [
  {
    title: "Wide Range of Smartphones",
    description: "From latest flagship 5G devices to budget-friendly daily drivers across Apple, Samsung, OnePlus, Vivo, Oppo, Realme, and Xiaomi.",
    iconName: "Smartphone",
  },
  {
    title: "Affordable Options",
    description: "Fair, competitive pricing on new devices, plus thoroughly tested pre-owned smartphones that deliver exceptional value.",
    iconName: "Tag",
  },
  {
    title: "Quality Repair Services",
    description: "Skilled technicians using proper diagnostic tools and quality replacement components for honest, reliable smartphone repairs.",
    iconName: "Wrench",
  },
  {
    title: "Mobile Accessories",
    description: "Curated collection of tempered glasses, rugged cases, certified GaN chargers, and high-speed data cables ready in-store.",
    iconName: "ShieldCheck",
  },
  {
    title: "Helpful Customer Support",
    description: "Friendly, direct guidance on device selection, data transfer support, and instant WhatsApp enquiry assistance for quick answers.",
    iconName: "HeartHandshake",
  },
];
