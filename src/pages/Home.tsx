import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ShoppingBag, Crown } from 'lucide-react';
import { Carousel } from "@material-tailwind/react";

import banner1 from '../assets/banner-images/1.jpg';
import banner2 from '../assets/banner-images/2.jpg';
import banner3 from '../assets/banner-images/3.jpg';
import banner4 from '../assets/banner-images/4.jpg';
import banner5 from '../assets/banner-images/5.jpg';
import banner6 from '../assets/banner-images/6.jpg';
import banner7 from '../assets/banner-images/7.jpg';
import banner8 from '../assets/banner-images/8.jpg';

const bannerImages = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Carousel autoplay={true} loop={true} className="rounded-xl rounded-none">
          {bannerImages.map((image, index) => (
              <img
              src={image}
              alt={`banner-${index}`}
              className="h-full w-full object-cover"
              />
          ))}
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ceylon Spices
            </h2>
            <p className="text-xl text-gray-600">
              Ceylon spices are not just ingredients; they are a story of tradition, excellence, and nature's bounty. Known as the "Island of Spices," Sri Lanka has been the center of the global spice trade for centuries. The unique tropical climate and fertile soils of the island produce spices that are unmatched in quality and flavor.Ceylon spices are renowned globally for their superior aroma, taste, and purity. Carefully cultivated in Sri Lanka's rich, tropical environment, our spices represent the pinnacle of natural flavor and aroma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12 text-orange-600" />,
                title: "Our Commitment to Quality",
                description: "We work closely with local farmers to ensure sustainable and ethical farming practices. Every spice is carefully handpicked, processed, and packed to retain its natural freshness and authenticity."
              },
              {
                icon: <ShoppingBag className="w-12 h-12 text-orange-600" />,
                title: "Explore Our Range",
                description: "Whether you are looking for spices for culinary excellence, therapeutic purposes, or value- added products like powders and oils, we have it all. We cater to both individual customers and wholesale buyers with a promise of excellence."
              },
              {
                icon: <Crown className="w-12 h-12 text-orange-600" />,
                title: "Experience the Unrivaled Legacy of Ceylon Spices",
                description: "Ceylon Glory PVT Ltd is proud to uphold the legacy of Sri Lanka's spice heritage. By choosing our spices, you connect with centuries-old traditions and flavors that have delighted culinary enthusiasts worldwide."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600">
              Bringing Sri Lanka to Your Table With Ceylon Glory spices, you’re not just purchasing spices; you’re investing in a heritage of flavor and health. Let us take you on a journey to experience the exotic, the authentic, and the unforgettable.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;