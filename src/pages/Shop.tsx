import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync URL with category
  useEffect(() => {
    if (activeCategory === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', activeCategory);
    }
    setSearchParams(searchParams);
  }, [activeCategory, searchParams, setSearchParams]);

  const filteredAndSortedProducts = React.useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break; // featured (default order)
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const FilterSidebar = () => (
    <div className="space-y-10">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input 
                type="radio" 
                name="category" 
                value={category}
                checked={activeCategory === category}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-4 h-4 text-stone-900 border-stone-300 focus:ring-stone-900 cursor-pointer"
              />
              <span className={`ml-3 text-sm transition-colors ${activeCategory === category ? 'text-stone-900 font-medium' : 'text-stone-500 group-hover:text-stone-900'}`}>
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-stone-500">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Shop All</h1>
            <p className="text-stone-500">Discover our complete collection of thoughtfully designed essentials.</p>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center space-x-4">
            <button 
              className="md:hidden flex items-center text-sm font-medium text-stone-900"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
            </button>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-stone-500 mr-3 hidden sm:block">Sort by:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-stone-300 rounded-none focus:ring-stone-900 focus:border-stone-900 py-2 pl-3 pr-10 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-24">
                <h3 className="text-lg font-medium text-stone-900 mb-2">No products found</h3>
                <p className="text-stone-500">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setPriceRange([0, 1000]);
                  }}
                  className="mt-6 inline-flex items-center justify-center border border-stone-300 bg-white px-6 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
              >
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-6 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4 mb-6">
              <h2 className="text-lg font-medium text-stone-900">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="text-stone-400 hover:text-stone-500">
                <X size={24} />
              </button>
            </div>
            <div className="px-4">
              <FilterSidebar />
            </div>
            <div className="mt-auto px-4 pt-6">
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-stone-900 text-white py-3 text-sm font-medium hover:bg-stone-800"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

