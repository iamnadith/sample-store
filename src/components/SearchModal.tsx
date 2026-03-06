import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useUI } from '../context/UIContext';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useUI();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  const results = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 results

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  const handleSelect = (id: string) => {
    handleClose();
    navigate(`/product/${id}`);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md"
        >
          <div className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 border-b border-stone-200">
            <div className="flex-1 flex items-center max-w-4xl mx-auto relative">
              <Search className="absolute left-0 w-6 h-6 text-stone-400" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search products, categories..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none text-2xl md:text-4xl font-serif text-stone-900 placeholder-stone-300 focus:ring-0 pl-12 py-4"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="absolute right-0 p-2 text-stone-400 hover:text-stone-900"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            <button 
              onClick={handleClose}
              className="ml-6 p-2 text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 max-w-4xl mx-auto w-full">
            {query && results.length === 0 ? (
              <div className="text-center text-stone-500 mt-12">
                <p className="text-xl font-serif">No results found for "{query}"</p>
                <p className="mt-2 text-sm">Try checking your spelling or using different keywords.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {results.map((product, i) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleSelect(product.id)}
                    className="flex items-center gap-6 p-4 hover:bg-stone-50 cursor-pointer transition-colors group rounded-lg"
                  >
                    <div className="w-20 h-24 bg-stone-100 flex-shrink-0 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">{product.name}</h3>
                      <p className="text-sm text-stone-500 mt-1">{product.category}</p>
                    </div>
                    <div className="text-lg font-medium text-stone-900">
                      ${product.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {!query && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-6">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {['Watches', 'Linen', 'Candle', 'Leather', 'Home'].map(term => (
                    <button 
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-stone-100 text-stone-600 text-sm hover:bg-stone-200 hover:text-stone-900 transition-colors rounded-full"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

