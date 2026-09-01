import React from 'react';
import { Layers, Boxes, HardHat, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/company';
import { getGeneralQuoteWhatsAppUrl } from '../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-orange-600" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-slate-800" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-orange-600" />;
      default:
        return <Layers className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
            Our Core Business Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-slate-900">
            Professional Services & Supply Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A.M. BIBIRE NIG LIMITED provides three specialized industrial services tailored for construction engineers, commercial builders, and project managers.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon & Category Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    {getIconComponent(service.icon)}
                  </div>
                  <span className="text-xs font-black font-display text-slate-300 group-hover:text-orange-600 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title & Short Description */}
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Scope of Offerings:
                  </span>
                  <ul className="space-y-1.5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={getGeneralQuoteWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-md text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-orange-400 fill-current" />
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
