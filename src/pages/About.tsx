import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] w-full overflow-hidden bg-stone-900 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="About Aura" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Our Story</h1>
              <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
                Designing for longevity, crafting with intention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-stone prose-lg md:prose-xl mx-auto text-stone-600 leading-relaxed"
          >
            <p className="text-2xl text-stone-900 font-serif text-center mb-16 leading-normal">
              "Aura was founded on a simple principle: surround yourself only with things that bring value, beauty, and purpose to your life."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="font-serif text-3xl text-stone-900 mb-6 mt-0">The Philosophy</h2>
                <p>
                  In a world of fast fashion and disposable goods, we take a step back. We believe in the power of minimalism—not as a rigid aesthetic, but as a mindful approach to consumption. Every item we offer is selected for its timeless design, durable materials, and ethical production.
                </p>
              </div>
              <div className="aspect-square bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row">
              <div className="aspect-square bg-stone-100 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" 
                  alt="Materials" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-3xl text-stone-900 mb-6 mt-0">Our Materials</h2>
                <p>
                  We partner directly with artisans and manufacturers who share our vision. From full-grain Italian leather to sustainable European linen, our materials are sourced responsibly. We trace the origins of our products to ensure fair labor practices and minimal environmental impact.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

