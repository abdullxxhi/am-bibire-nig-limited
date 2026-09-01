/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Landing Hero Section */}
        <Hero />

        {/* 2. Concise Factual Company About */}
        <AboutSection />

        {/* 3. Dedicated Comprehensive Product Catalogue */}
        <ProductCatalogue />

        {/* 4. Three Core Business Services */}
        <ServicesSection />

        {/* 5. Contact & Yard Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Tap WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
