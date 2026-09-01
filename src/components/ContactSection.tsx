import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Send, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { getGeneralQuoteWhatsAppUrl, getTelLink, getMailtoLink, getCustomWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryProduct, setInquiryProduct] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSendCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello A.M. BIBIRE NIG LIMITED,%0A%0AMy Name: ${inquiryName || 'Customer'}%0AProduct/Service: ${inquiryProduct || 'General Quote'}%0AMessage: ${inquiryMessage || 'Can I get a quote for building materials?'}`;
    const url = getCustomWhatsAppUrl(decodeURIComponent(formatted));
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-slate-900">
            Contact & Yard Location
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions about material specifications, stock availability, or pricing? Reach out directly via WhatsApp, phone, email, or visit our yard in Orile Iganmu, Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-2xs space-y-5">
              <div>
                <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-900">
                  {COMPANY_DETAILS.companyName}
                </h3>
                <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider mt-1">
                  Industrial & Building Materials Supplier • Steel Stockist • General Contractor
                </p>
              </div>

              <div className="space-y-4 divide-y divide-slate-200/80 text-sm">
                
                {/* Physical Address */}
                <div className="pt-3 first:pt-0 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider">
                      Physical Address & Yard:
                    </strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {COMPANY_DETAILS.address.fullFormatted}
                    </p>
                    <a
                      href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 mt-1"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone Numbers */}
                <div className="pt-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider">
                      Telephone & WhatsApp:
                    </strong>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <a
                        href={getTelLink(COMPANY_DETAILS.phones[0].raw)}
                        className="inline-flex items-center gap-2 font-bold text-xs text-slate-900 hover:text-orange-600 bg-white px-2.5 py-1.5 rounded-md border border-slate-200 shadow-2xs"
                      >
                        <Phone className="w-3 h-3 text-orange-600" />
                        <span>{COMPANY_DETAILS.phones[0].display}</span>
                        <span className="text-[9px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.2 rounded ml-0.5">WhatsApp</span>
                      </a>

                      <a
                        href={getTelLink(COMPANY_DETAILS.phones[1].raw)}
                        className="inline-flex items-center gap-2 font-bold text-xs text-slate-900 hover:text-orange-600 bg-white px-2.5 py-1.5 rounded-md border border-slate-200 shadow-2xs"
                      >
                        <Phone className="w-3 h-3 text-slate-600" />
                        <span>{COMPANY_DETAILS.phones[1].display}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="pt-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider">
                      Email Address:
                    </strong>
                    <a
                      href={getMailtoLink(COMPANY_DETAILS.email)}
                      className="font-semibold text-xs sm:text-sm text-slate-800 hover:text-orange-600 transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="pt-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider">
                      Opening Hours:
                    </strong>
                    <div className="text-xs sm:text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">{COMPANY_DETAILS.openingHours.days}:</span>{' '}
                      {COMPANY_DETAILS.openingHours.hours}
                    </div>
                    <div className="text-xs text-orange-600 font-semibold">
                      {COMPANY_DETAILS.openingHours.closedDay}
                    </div>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Card Button */}
              <div className="pt-2">
                <a
                  href={getGeneralQuoteWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md text-center text-xs shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp: {COMPANY_DETAILS.phones[0].display}</span>
                </a>
              </div>
            </div>

            {/* Map / Directions Display */}
            <div className="bg-slate-900 text-white rounded-lg p-5 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <h4 className="font-bold font-display text-xs sm:text-sm uppercase tracking-wide">
                    Orile Iganmu Location Map
                  </h4>
                </div>
                <a
                  href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas / Clean Embed Frame */}
              <div className="relative w-full h-44 rounded-md overflow-hidden bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="relative z-10 space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    2B Olorunshogo Street, off Alagba Street
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Beside Fidelity Bank, Orile Iganmu, Lagos
                  </div>
                  <a
                    href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-slate-900 hover:bg-slate-100 font-bold px-3 py-1.5 rounded-md text-xs mt-1 shadow-2xs"
                  >
                    <span>View Interactive Map & Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Quick WhatsApp Quote Message Composer */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-lg p-6 sm:p-7 border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
              
              <div className="space-y-5">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">
                    Instant Inquiry Form
                  </span>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-slate-900">
                    Request Quotation or Availability
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Fill in your project requirements below to launch an immediate WhatsApp conversation with our sales desk.
                  </p>
                </div>

                <form onSubmit={handleSendCustomInquiry} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name / Company:
                    </label>
                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Engr. Babatunde / Apex Construction"
                      className="w-full px-3.5 py-2 bg-white rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Material or Product Required:
                    </label>
                    <input
                      type="text"
                      value={inquiryProduct}
                      onChange={(e) => setInquiryProduct(e.target.value)}
                      placeholder="e.g. H20 Beams, Scaffolding Clamps, Steel Pipes..."
                      className="w-full px-3.5 py-2 bg-white rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Quantities & Specific Details:
                    </label>
                    <textarea
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Please specify quantities, delivery location, or sizes needed (e.g. 50 pcs H20 beam 3.9m delivered to Lekki, Lagos)..."
                      className="w-full px-3.5 py-2 bg-white rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-orange-600 focus:border-orange-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 rounded-md text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </form>
              </div>

              {/* Trust Indicators */}
              <div className="pt-5 mt-5 border-t border-slate-200 text-xs text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Direct quote response during working hours (Mon – Sat: 8AM – 7PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Bulk contractor discounts and delivery coordination in Lagos</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
