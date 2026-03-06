import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
                Elevate Your Everyday.
              </h1>
              <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-xl mx-auto font-light">
                Discover our curated collection of minimalist essentials designed for modern living.
              </p>
              <button className="group inline-flex items-center justify-center bg-white text-stone-900 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-stone-100 transition-colors">
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Curated Selections</h2>
              <p className="text-stone-500 max-w-md">Explore our carefully selected pieces that blend form and function seamlessly.</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex overflow-x-auto hide-scrollbar mt-8 md:mt-0 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 space-x-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap pb-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 border-b-2 ${
                    activeCategory === category 
                      ? 'border-stone-900 text-stone-900' 
                      : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </section>

        {/* Brand Story / Banner */}
        <section className="py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-square bg-stone-200 overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Brand Story" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">The Art of Less.</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  We believe that true luxury lies in simplicity. Every piece in our collection is thoughtfully designed and meticulously crafted to bring lasting beauty to your everyday life. We partner with artisans who share our commitment to quality and sustainability.
                </p>
                <button className="border-b border-stone-900 pb-1 text-sm font-medium uppercase tracking-widest text-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors">
                  Read Our Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

