import React from 'react';
import { Building2, Boxes, HardHat, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-slate-900 rounded-xl p-7 text-white overflow-hidden shadow-lg border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-4">
                  <Logo size="lg" showText={false} />
                  <div>
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white">
                      A.M. BIBIRE NIG LIMITED
                    </h3>
                    <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">
                      RC Registered Business
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/60 space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Head Office / Yard:</strong>
                      <span>{COMPANY_DETAILS.address.fullFormatted}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Industrial & Building Materials Supply</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Steel Stocking & Tube Distribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>General Contracting Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
              About Our Company
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-slate-900 leading-tight">
              A Trusted Partner for <br />
              <span className="text-slate-700">Building Materials & Steel Supplies</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">A.M. BIBIRE NIG LIMITED</strong> is an established industrial and building materials supplier, steel stockist, and general contractor serving customers across Lagos and beyond.
              </p>
              <p>
                We stock and supply high-quality scaffolding frameworks, H20 formwork beams, adjustable jacks, industrial steel pipes, scaffolding clamps, marine boards, and essential construction components directly to commercial builders, site engineers, and project developers.
              </p>
              <p>
                Located conveniently at Orile Iganmu, Lagos, our operational base allows us to coordinate prompt dispatch, verify product standards, and ensure contractors receive the exact specifications needed for safe and structurally sound construction works.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
                <Building2 className="w-6 h-6 text-orange-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Building Materials</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">Full formwork & scaffolding equipment supply.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
                <Boxes className="w-6 h-6 text-slate-800 mb-2" />
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Steel Stockist</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">Black & galvanised steel tubes in multiple sizes.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
                <HardHat className="w-6 h-6 text-orange-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">General Contracting</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">Contractor supply packages and site execution.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
