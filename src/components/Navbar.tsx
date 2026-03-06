import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { setIsSearchOpen } = useUI();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 sm:flex-none sm:justify-start">
            <Link to="/" className="font-serif text-3xl tracking-tight font-medium text-black">
              AURA.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/shop" className={`text-sm font-medium transition-colors ${isActive('/shop') ? 'text-black' : 'text-stone-500 hover:text-black'}`}>Shop</Link>
            <Link to="/collections" className={`text-sm font-medium transition-colors ${isActive('/collections') ? 'text-black' : 'text-stone-500 hover:text-black'}`}>Collections</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-black' : 'text-stone-500 hover:text-black'}`}>About</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-stone-600 hover:text-black transition-colors"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-stone-600 hover:text-black transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-stone-200 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/shop" className="block px-3 py-4 text-base font-medium text-stone-900 border-b border-stone-100" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="block px-3 py-4 text-base font-medium text-stone-900 border-b border-stone-100" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="block px-3 py-4 text-base font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

