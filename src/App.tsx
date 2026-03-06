/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { ProductDetail } from './pages/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';

export default function App() {
  return (
    <UIProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            <CartDrawer />
            <SearchModal />
          </div>
        </Router>
      </CartProvider>
    </UIProvider>
  );
}

