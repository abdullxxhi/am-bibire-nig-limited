/**
 * WhatsApp and Contact Link Helpers for A.M. BIBIRE NIG LIMITED
 */

export const PRIMARY_WHATSAPP_NUMBER = '2348039128486';

/**
 * Builds standard WhatsApp link for general quote requests
 */
export function getGeneralQuoteWhatsAppUrl(): string {
  const message = 'Hello A.M. BIBIRE NIG LIMITED, can I get a quote for.....';
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds standard WhatsApp link for a specific product inquiry
 */
export function getProductInquiryWhatsAppUrl(productName: string): string {
  const message = `Hello A.M. BIBIRE NIG LIMITED, I would like to know more about this product; _*${productName}*_`;
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds custom WhatsApp link with specified text
 */
export function getCustomWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}

/**
 * Formats a phone number for tel: link
 */
export function getTelLink(rawPhone: string): string {
  return `tel:${rawPhone.startsWith('+') ? rawPhone : '+' + rawPhone}`;
}

/**
 * Formats an email for mailto: link
 */
export function getMailtoLink(email: string, subject = 'Inquiry - A.M. BIBIRE NIG LIMITED'): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
