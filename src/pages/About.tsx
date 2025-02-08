import React from 'react';
import { motion } from 'framer-motion';
import {Target, Award, Stars, Leaf, ShieldCheck, Check} from 'lucide-react';
import aboutImg from '../assets/banner-images/6.jpg';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Welcome to Ceylon Glory PVT Ltd, where tradition meets excellence in the world of Ceylon spices. Rooted in the fertile soils of Sri Lanka, our company embodies the spirit of a land renowned for its unmatched contributions to the global spice trade. For centuries, Ceylon spices have been prized for their quality, aroma, and flavor—a legacy we proudly uphold.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Target className="w-12 h-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is simple yet profound: to share the true essence of Ceylon spices with the world while fostering sustainable and ethical practices. At Ceylon Glory PVT Ltd, we strive to bridge the gap between Sri Lanka’s rich agricultural heritage and modern culinary excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global ambassador of Sri Lanka’s spice heritage, promoting Ceylon spices as the benchmark of quality and flavor across the culinary world.
                At Ceylon Glory PVT Ltd, we invite you to embark on a flavorful journey—one that celebrates tradition, supports sustainability, and inspires culinary creativity. Join us in savoring the magic of Ceylon spices!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-600">
                Founded with a passion for delivering the finest spices, Ceylon Glory Pit Ltd collaborates with local farmers across Sri Lanka. We work closely with these communities to ensure.
              </p>
              <ul className="list-inside py-5 space-y-2">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Sustainable farming practices
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Ethical sourcing of spices
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Preservation of traditional cultivation methods By combining these values with state-of-the-art processing facilities, we guarantee that every product meets international quality standards while retaining its authentic character
                </li>
              </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-600">
                From the aromatic allure of Ceylon cinnamon to the robust heat of black pepper, our diverse product range reflects the heart and soul of Sri Lanka. Whether you are a home cook, professional chef, or wholesale buyer, our spices bring an unparalleled depth of flavor to your creations. Our offerings include.
              </p>

              <ul className="list-inside py-5 space-y-2">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Cinnamon (quills, powder, and oils)
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Black Pepper (whole and ground)
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Cloves (whole and powder)
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Cardamom (pods and seeds)
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start" />
                  Specialty spice blends and value-added products
                </li>
              </ul>

            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stars className="w-12 h-12 text-orange-600" />,
                title: "Authenticity",
                description: "We deliver 100% genuine Ceylon spices, directly from the source."
              },
              {
                icon: <Leaf className="w-12 h-12 text-orange-600" />,
                title: "Sustainability",
                description: "Our commitment to ethical and eco-friendly practices benefits both the environment and the communities we work with."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-orange-600" />,
                title: "Quality Assurance",
                description: "Every spice is carefully inspected and processed to preserve its natural essence and ensure it meets global standards."
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

export default About;