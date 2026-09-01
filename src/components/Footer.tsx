import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/company';
import { getGeneralQuoteWhatsAppUrl, getTelLink, getMailtoLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Product Catalogue', href: '#products' },
    { label: 'Core Services', href: '#services' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  const productCategories = [
    { label: 'Scaffolding & Support Systems', href: '#products' },
    { label: 'Steel Pipes & Metal Products', href: '#products' },
    { label: 'Formwork & Acrow Jacks', href: '#products' },
    { label: 'Clamps & Scaffolding Couplers', href: '#products' },
    { label: 'Marine & Yellow Shuttering Boards', href: '#products' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" textColor="light" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">A.M. BIBIRE NIG LIMITED</strong> is an industrial and building materials supplier, steel stockist, and general contractor serving clients across Lagos and beyond.
            </p>
            <div className="pt-1">
              <a
                href={getGeneralQuoteWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-md text-xs shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Material Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              {productCategories.map((cat, i) => (
                <li key={i}>
                  <a
                    href={cat.href}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{cat.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Contact & Yard Info
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {COMPANY_DETAILS.address.fullFormatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href={getTelLink(COMPANY_DETAILS.phones[0].raw)} className="hover:text-white font-semibold text-slate-200">
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <span>/</span>
                  <a href={getTelLink(COMPANY_DETAILS.phones[1].raw)} className="hover:text-white">
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href={getMailtoLink(COMPANY_DETAILS.email)} className="hover:text-white">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div>{COMPANY_DETAILS.openingHours.days}: {COMPANY_DETAILS.openingHours.hours}</div>
                  <div className="text-orange-400 font-medium">{COMPANY_DETAILS.openingHours.closedDay}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 A.M. BIBIRE NIG LIMITED. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Industrial & Building Materials Supplier • Lagos, Nigeria</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
