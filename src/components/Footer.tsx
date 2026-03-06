import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl text-white mb-6">AURA.</h2>
            <p className="text-stone-400 max-w-sm text-sm leading-relaxed">
              Curating the finest minimalist lifestyle products. We believe in quality over quantity, and design that stands the test of time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?sort=newest" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aura. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

