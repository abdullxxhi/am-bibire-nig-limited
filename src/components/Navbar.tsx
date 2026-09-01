import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/company';
import { getGeneralQuoteWhatsAppUrl, getTelLink, getMailtoLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Products & Catalogue', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification / Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={getTelLink(COMPANY_DETAILS.phones[0].raw)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>Call / WhatsApp: <strong className="text-white font-semibold">{COMPANY_DETAILS.phones[0].display}</strong></span>
            </a>
            <a
              href={getTelLink(COMPANY_DETAILS.phones[1].raw)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_DETAILS.phones[1].display}</span>
            </a>
            <a
              href={getMailtoLink(COMPANY_DETAILS.email)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>{COMPANY_DETAILS.openingHours.days}: {COMPANY_DETAILS.openingHours.hours}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>Orile Iganmu, Lagos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200 ${
          isScrolled ? 'shadow-sm py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center focus:outline-hidden" aria-label="A.M. BIBIRE NIG LIMITED">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getGeneralQuoteWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-md text-sm shadow-md shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Request a Quote</span>
            </a>
          </div>

          {/* Mobile Menu & Direct WhatsApp Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralQuoteWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-3.5 py-2 rounded-md text-xs shadow-xs"
              aria-label="Request quote on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Get Quote</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto z-40 transition-all">
          <div className="px-5 py-6 space-y-4">
            <div className="flex flex-col space-y-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-base font-bold text-slate-800 hover:text-orange-600 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Mobile Contact Box */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs text-slate-600">
              <div className="font-bold text-slate-900 text-sm">A.M. BIBIRE NIG LIMITED</div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>2B Olorunshogo Street, off Alagba Street, beside Fidelity Bank, Orile Iganmu, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a href={getTelLink(COMPANY_DETAILS.phones[0].raw)} className="font-semibold text-slate-900">
                  {COMPANY_DETAILS.phones[0].display}
                </a>
                <span>/</span>
                <a href={getTelLink(COMPANY_DETAILS.phones[1].raw)} className="font-semibold text-slate-900">
                  {COMPANY_DETAILS.phones[1].display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM (Sun: Closed)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getGeneralQuoteWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-4 rounded-lg text-center shadow-md shadow-orange-600/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Request a Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
