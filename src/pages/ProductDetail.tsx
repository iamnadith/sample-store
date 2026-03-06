import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link to="/" className="text-stone-500 hover:text-stone-900 underline">Return Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-stone-500 mb-8">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-stone-900">{product.category}</span>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-stone-400 truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto hide-scrollbar lg:w-24 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 lg:w-full flex-shrink-0 overflow-hidden ${activeImage === idx ? 'ring-2 ring-stone-900' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-grow aspect-[3/4] bg-stone-100 overflow-hidden relative"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">{product.name}</h1>
              <p className="text-2xl text-stone-600 mb-8">${product.price}</p>
              
              <div className="prose prose-stone text-stone-600 mb-10 leading-relaxed">
                <p>{product.description}</p>
              </div>

              <div className="space-y-6 border-t border-stone-200 pt-8">
                <button 
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-8 text-sm font-medium uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${
                    added 
                      ? 'bg-green-600 text-white' 
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={18} className="mr-2" /> Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-stone-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Free Shipping
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    30-Day Returns
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

