import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-[3/4] bg-stone-100 mb-4 block">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black shadow-sm">
            New
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-black/90 backdrop-blur-sm text-white py-3 text-sm font-medium hover:bg-black transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${product.id}`} className="font-medium text-stone-900 hover:text-stone-600 transition-colors line-clamp-1">
            {product.name}
          </Link>
          <span className="font-medium text-stone-900 ml-4">${product.price}</span>
        </div>
        <p className="text-sm text-stone-500">{product.category}</p>
      </div>
    </motion.div>
  );
};

