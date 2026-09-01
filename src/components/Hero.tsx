import React from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, Truck, Award, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { getGeneralQuoteWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const handleScrollToCatalogue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Industrial Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
            
            {/* Prominent Logo & Badge Presentation */}
            <div className="inline-flex items-center gap-3 bg-slate-800/90 border border-slate-700/80 px-4 py-2 rounded-lg shadow-sm">
              <Logo size="sm" showText={false} />
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  A.M. BIBIRE NIG LIMITED
                </span>
                <span className="hidden sm:inline text-xs text-orange-400 font-semibold ml-2">
                  • Official Industrial Stockist
                </span>
              </div>
            </div>

            {/* Core Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-white leading-[1.1]">
              Industrial & Building Materials <br className="hidden sm:block" />
              <span className="text-orange-500">
                You Can Rely On
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">A.M. BIBIRE NIG LIMITED</strong> supplies high-grade industrial and building materials, stocks prime steel products, and provides general contracting services to builders, contractors, and engineers across Lagos and Nigeria.
            </p>

            {/* Exactly Two Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Button 1: Request a Quote (WhatsApp) */}
              <a
                id="hero-cta-quote"
                href={getGeneralQuoteWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-md shadow-lg shadow-orange-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Request a Quote</span>
              </a>

              {/* Button 2: View Catalogue (Smooth Scroll) */}
              <a
                id="hero-cta-catalogue"
                href="#products"
                onClick={handleScrollToCatalogue}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-md border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Catalogue</span>
                <ArrowDown className="w-4 h-4 text-orange-400" />
              </a>
            </div>

            {/* Factual Core Value Highlights */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Steel Stockist</div>
                  <div className="text-[11px] text-slate-400">Pipes, tubes & couplers</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Formwork Systems</div>
                  <div className="text-[11px] text-slate-400">H20 beams, jacks & boards</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Scaffolding</div>
                  <div className="text-[11px] text-slate-400">Frames, planks & clamps</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Lagos & Beyond</div>
                  <div className="text-[11px] text-slate-400">Direct site deliveries</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Card - Industrial Company Profile Presentation */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-xl p-6 sm:p-7 text-slate-900 shadow-xl border border-slate-200">
              
              {/* Logo centerpiece */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-slate-200">
                <Logo size="lg" showText={false} className="mb-3" />
                <h2 className="text-base sm:text-lg font-black font-display text-slate-950 uppercase tracking-tight">
                  A.M. BIBIRE NIG LIMITED
                </h2>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider mt-2">
                  Lagos, Nigeria
                </span>
              </div>

              {/* Direct Quick Info */}
              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">Location:</span>
                  <span className="text-right text-slate-600">Orile Iganmu, Lagos</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">Working Days:</span>
                  <span className="text-slate-600 font-medium">Mon – Sat (8AM – 7PM)</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">Direct Orders:</span>
                  <span className="text-orange-700 font-bold">Fast WhatsApp Response</span>
                </div>
              </div>

              {/* Action Banner in Card */}
              <div className="pt-2">
                <a
                  href={getGeneralQuoteWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg text-center text-xs sm:text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-orange-400 fill-current" />
                  <span>Chat Direct with Sales</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
