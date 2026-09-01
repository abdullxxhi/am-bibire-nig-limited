import React, { useState } from 'react';
import { MessageSquare, ZoomIn, Check, Sparkles, Tag, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { getProductInquiryWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onPreviewImage?: (product: Product) => void;
  onToggleInquiryItem?: (product: Product) => void;
  isMarkedForInquiry?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPreviewImage,
  onToggleInquiryItem,
  isMarkedForInquiry = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const whatsappUrl = getProductInquiryWhatsAppUrl(product.name);

  // Fallback fallback styling if image fails
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f1f5f9"/><text x="50%" y="50%" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23475569" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(product.name)}</text></svg>`;

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-4/3 bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        )}
        
        <img
          src={imageError ? fallbackSvg : product.imageUrl}
          alt={product.altText}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Category Pill Over Image */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-white uppercase tracking-wider backdrop-blur-xs shadow-xs">
            {product.categoryLabel}
          </span>
        </div>

        {/* Quick Zoom Button */}
        {onPreviewImage && (
          <button
            type="button"
            onClick={() => onPreviewImage(product)}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs"
            title="Enlarge photograph"
            aria-label={`Enlarge photo of ${product.name}`}
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Product Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Product Name */}
          <h3 className="font-bold font-display text-sm sm:text-base text-slate-900 uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Factual Description (1-2 sentences) */}
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Available Sizes / Variants Pill */}
          {product.variantsOrSizes && product.variantsOrSizes.length > 0 && (
            <div className="pt-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-orange-500" />
                <span>Specs / Sizes:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {product.variantsOrSizes.map((variant, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-[10px] font-semibold bg-slate-50 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200"
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product WhatsApp Action Button */}
        <div className="pt-3 border-t border-slate-100 space-y-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2.5 px-3 rounded-md shadow-xs shadow-orange-600/10 transition-colors"
            aria-label={`Ask about ${product.name} on WhatsApp`}
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Ask via WhatsApp</span>
          </a>

          {/* Multi-item Quote Toggle Checkbox */}
          {onToggleInquiryItem && (
            <button
              type="button"
              onClick={() => onToggleInquiryItem(product)}
              className={`w-full flex items-center justify-center gap-1.5 text-[10px] font-bold py-1.5 px-2 rounded-md border transition-colors ${
                isMarkedForInquiry
                  ? 'bg-orange-50 text-orange-700 border-orange-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {isMarkedForInquiry ? (
                <>
                  <Check className="w-3 h-3 text-orange-600" />
                  <span>Added to Multi-Quote</span>
                </>
              ) : (
                <span>+ Add to Bulk Quote</span>
              )}
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
