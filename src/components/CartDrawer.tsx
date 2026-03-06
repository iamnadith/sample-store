import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <h2 className="text-xl font-serif font-medium text-stone-900">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-3 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-stone-100 flex-shrink-0 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-stone-900 line-clamp-2">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-stone-500 mt-1">${item.price}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-stone-200 rounded-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-medium text-stone-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-100 p-6 bg-stone-50">
                <div className="flex justify-between text-base font-medium text-stone-900 mb-4">
                  <p>Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-stone-500 mb-6">Shipping and taxes calculated at checkout.</p>
                <button className="w-full bg-stone-900 text-white py-4 text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

