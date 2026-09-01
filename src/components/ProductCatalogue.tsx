import React, { useState, useMemo } from 'react';
import { Search, Filter, MessageSquare, X, Check, ArrowRight, Layers, ShieldCheck, Download, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES_LIST } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { getGeneralQuoteWhatsAppUrl, getCustomWhatsAppUrl, getProductInquiryWhatsAppUrl } from '../utils/whatsapp';

export const ProductCatalogue: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [selectedQuoteItems, setSelectedQuoteItems] = useState<Product[]>([]);
  const [showQuoteDrawer, setShowQuoteDrawer] = useState<boolean>(false);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.variantsOrSizes &&
          product.variantsOrSizes.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Toggle multi-item quote selection
  const handleToggleQuoteItem = (product: Product) => {
    setSelectedQuoteItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Generate WhatsApp message for bulk/multi-item quote
  const handleSendMultiQuoteWhatsApp = () => {
    if (selectedQuoteItems.length === 0) return;
    
    const itemList = selectedQuoteItems.map((p, idx) => `${idx + 1}. ${p.name}`).join('%0A');
    const customMessage = `Hello A.M. BIBIRE NIG LIMITED, I would like to get a quotation for the following materials:%0A%0A${itemList}%0A%0APlease let me know the availability, pricing, and delivery options to Lagos.`;
    
    const url = getCustomWhatsAppUrl(decodeURIComponent(customMessage));
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
              Inventory & Materials Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-slate-900">
              Building & Industrial Products
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Browse our stock of scaffolding systems, acrow props, formwork beams, couplers, steel pipes, and construction shuttering boards. Click any item to request instant WhatsApp quotations.
            </p>
          </div>

          {/* Quick Bulk Quote Status Badge */}
          {selectedQuoteItems.length > 0 && (
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-500 shadow-sm">
              <div className="text-xs">
                <span className="font-bold text-slate-900">{selectedQuoteItems.length}</span> items in bulk request
              </div>
              <button
                type="button"
                onClick={handleSendMultiQuoteWhatsApp}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Send Bulk Quote</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. H20 Beam, Jack, Clamps, Pipes)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-xs font-semibold text-slate-500 self-center lg:self-auto">
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 pt-3">
            {CATEGORIES_LIST.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPreviewImage={(prod) => setPreviewProduct(prod)}
                onToggleInquiryItem={handleToggleQuoteItem}
                isMarkedForInquiry={selectedQuoteItems.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 space-y-4 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="text-sm text-slate-500">
              Try adjusting your search query or choosing a different category tab.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-md hover:bg-orange-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Fast Quote Banner */}
        <div className="mt-14 bg-slate-900 rounded-xl p-7 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight">
              Need custom sizes or project quantities?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Contact our sales desk directly on WhatsApp for full bill of quantity pricing, bulk discounts, and express logistics dispatch across Lagos.
            </p>
          </div>

          <a
            href={getGeneralQuoteWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-md text-sm shadow-md shadow-orange-600/20 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Image Modal Preview */}
      {previewProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                  {previewProduct.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                  {previewProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewProduct(null)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-100">
              <img
                src={previewProduct.imageUrl}
                alt={previewProduct.altText}
                referrerPolicy="no-referrer"
                className="w-full h-80 object-contain bg-white rounded-lg shadow-inner"
              />
            </div>

            <div className="p-5 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {previewProduct.shortDescription}
              </p>

              {previewProduct.variantsOrSizes && (
                <div className="text-xs space-y-1">
                  <span className="font-bold text-slate-700">Available Specifications:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {previewProduct.variantsOrSizes.map((v, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-medium border border-slate-200">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-md"
                >
                  Close
                </button>
                <a
                  href={getProductInquiryWhatsAppUrl(previewProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-md text-xs shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Ask About This on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
