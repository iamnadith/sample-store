import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collectionsData = [
  {
    id: 'watches',
    title: 'Timepieces',
    description: 'Precision engineering meets minimalist design.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654ece975?auto=format&fit=crop&q=80&w=1200',
    category: 'Watches'
  },
  {
    id: 'home',
    title: 'Home Essentials',
    description: 'Elevate your living space with curated objects.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    category: 'Home'
  },
  {
    id: 'apparel',
    title: 'Modern Wardrobe',
    description: 'Timeless silhouettes crafted from premium materials.',
    image: 'https://images.unsplash.com/photo-1434389678278-be4d41a5b89d?auto=format&fit=crop&q=80&w=1200',
    category: 'Apparel'
  },
  {
    id: 'accessories',
    title: 'Everyday Carry',
    description: 'Functional accessories for the modern lifestyle.',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1200',
    category: 'Accessories'
  }
];

export const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6">Collections</h1>
            <p className="text-lg text-stone-500">
              Explore our thoughtfully curated collections, categorized to help you find exactly what you're looking for.
            </p>
          </motion.div>

          <div className="space-y-24">
            {collectionsData.map((collection, index) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-stone-100">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col justify-center ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center`}>
                  <span className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-4">
                    {collection.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                    {collection.title}
                  </h2>
                  <p className="text-stone-600 text-lg mb-8 max-w-md">
                    {collection.description}
                  </p>
                  <Link 
                    to={`/shop?category=${collection.category}`}
                    className="group inline-flex items-center justify-center border border-stone-900 text-stone-900 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

