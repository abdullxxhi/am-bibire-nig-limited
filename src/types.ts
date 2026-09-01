export type ProductCategory = 
  | 'scaffolding-support'
  | 'formwork-jacks'
  | 'clamps-connectors'
  | 'steel-pipes'
  | 'boards-materials'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  variantsOrSizes?: string[];
  imageUrl: string;
  altText: string;
  applications?: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  details: string[];
  icon: string;
}

export interface ContactInfo {
  companyName: string;
  abbreviation: string;
  tagline: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    landmark: string;
    fullFormatted: string;
  };
  phones: {
    display: string;
    raw: string;
    isPrimaryWhatsApp?: boolean;
  }[];
  primaryWhatsAppNumber: string;
  email: string;
  openingHours: {
    days: string;
    hours: string;
    closedDay: string;
  };
  googleMapsDirectionsUrl: string;
}
