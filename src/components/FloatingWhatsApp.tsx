import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeneralQuoteWhatsAppUrl } from '../utils/whatsapp';
import { COMPANY_DETAILS } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-2 px-3 rounded-lg shadow-xl border border-slate-800 flex items-center gap-2 max-w-xs animate-bounce">
          <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
          <span className="text-[11px] font-medium">Need a quick quote? Chat with us on WhatsApp!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getGeneralQuoteWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-3 rounded-full shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label={`Chat with A.M. BIBIRE NIG LIMITED on WhatsApp at ${COMPANY_DETAILS.phones[0].display}`}
      >
        <MessageSquare className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
