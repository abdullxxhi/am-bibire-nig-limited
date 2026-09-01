import { ContactInfo, ServiceItem } from '../types';

export const COMPANY_DETAILS: ContactInfo = {
  companyName: 'A.M. BIBIRE NIG LIMITED',
  abbreviation: 'A.M.B.N.L',
  tagline: 'Industrial & Building Materials You Can Rely On',
  address: {
    street: '2B Olorunshogo Street, off Alagba Street',
    landmark: 'Beside Fidelity Bank',
    area: 'Orile Iganmu',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    fullFormatted: '2B Olorunshogo Street, off Alagba Street, beside Fidelity Bank, Orile Iganmu, Lagos, Nigeria.',
  },
  phones: [
    {
      display: '08039128486',
      raw: '2348039128486',
      isPrimaryWhatsApp: true,
    },
    {
      display: '08182078320',
      raw: '2348182078320',
      isPrimaryWhatsApp: false,
    },
  ],
  primaryWhatsAppNumber: '2348039128486',
  email: 'ambibire@gmail.com',
  openingHours: {
    days: 'Monday – Saturday',
    hours: '8:00 AM – 7:00 PM',
    closedDay: 'Sunday: Closed',
  },
  // Clean Google Maps search link targeting the exact verified address in Orile Iganmu Lagos
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=2B+Olorunshogo+Street+off+Alagba+Street+Orile+Iganmu+Lagos+Nigeria',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'materials-supply',
    title: 'Industrial & Building Materials Supply',
    shortDescription: 'Comprehensive procurement and distribution of certified building, structural, and civil construction materials for projects across Lagos and Nigeria.',
    details: [
      'Scaffolding frameworks, steel planks & accessories',
      'H20 timber formwork beams and shuttering boards',
      'Marine film-faced boards & yellow formwork panels',
      'Heavy-duty tie rods, wing nuts and super plates',
      'Direct-to-site logistical dispatch and supply',
    ],
    icon: 'Layers',
  },
  {
    id: 'steel-stocking',
    title: 'Steel Stocking',
    shortDescription: 'Dedicated warehousing and ready-to-dispatch inventory of prime industrial black pipes, galvanised tubes, structural steel components, and clamps.',
    details: [
      'Black mild steel pipes in multiple standard diameters and gauges',
      'Hot-dipped galvanised steel tubes with high corrosion resistance',
      'Rigid fixed clamps, swivel turning clamps, and sleeve couplers',
      'Adjustable U-head and flat-head acrow screw jacks',
      'Bulk supply options for industrial builders and site engineers',
    ],
    icon: 'Boxes',
  },
  {
    id: 'general-contracting',
    title: 'General Contracting',
    shortDescription: 'Reliable execution, material provisioning, and structural subcontracting services backed by strong industrial supply chain reliability.',
    details: [
      'Scaffolding setup support and structural temporary works material supply',
      'Formwork engineering material provisioning for multi-storey concrete slabs',
      'Commercial and residential construction site material support',
      'Site delivery coordination throughout Lagos metropolis and beyond',
      'Custom contractor material packages tailored to engineering bills of quantities',
    ],
    icon: 'HardHat',
  },
];
