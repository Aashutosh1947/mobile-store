/**
 * Smart Mobile Store – Premium Business Website
 * Single Page Business Website for Mobile Retail, Second-Hand Devices, Accessories & Repairs
 * Located in Bilaspur, Chhattisgarh, India
 * 
 * Exact Section Structure:
 * 1. Navigation Bar
 * 2. Hero Section
 * 3. Services
 * 4. Brand New Smartphones
 * 5. Second-Hand Smartphones
 * 6. Mobile Accessories
 * 7. Mobile Repairing
 * 8. SIM Services
 * 9. Why Choose Us
 * 10. About Us
 * 11. Contact and Location
 * 12. Footer
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { NewPhonesSection } from "./components/NewPhonesSection";
import { UsedPhonesSection } from "./components/UsedPhonesSection";
import { AccessoriesSection } from "./components/AccessoriesSection";
import { RepairSection } from "./components/RepairSection";
import { SimServicesSection } from "./components/SimServicesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090909] text-[#171717] font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services */}
        <ServicesSection />

        {/* 4. Brand New Smartphones */}
        <NewPhonesSection />

        {/* 5. Second-Hand Smartphones */}
        <UsedPhonesSection />

        {/* 6. Mobile Accessories */}
        <AccessoriesSection />

        {/* 7. Mobile Repairing */}
        <RepairSection />

        {/* 8. SIM Services */}
        <SimServicesSection />

        {/* 9. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 10. About Us */}
        <AboutSection />

        {/* 11. Contact and Location */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Action Button for Inquiries */}
      <FloatingWhatsApp />
    </div>
  );
}
