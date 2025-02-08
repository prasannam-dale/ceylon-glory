import React from 'react';
import { motion } from 'framer-motion';
import {Check, Leaf, Sparkles, Shield, ShieldPlus} from 'lucide-react';
import slSpicesImg from '../assets/banner-images/2.jpg';

const SriLankanSpices = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
              src={slSpicesImg}
              alt="About hero"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className="text-4xl md:text-6xl font-bold mb-4"
          >
            Sri Lankan Spices – A Journey of Flavors, Richness, and Tradition
          </motion.h1>
          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              className="text-xl"
          >
            Sri Lanka, often referred to as the "Spice Island," is renowned for its rich history and fertile lands,
            which have made it one of the world's leading sources of high-quality spices. For centuries, these spices
            have been a cornerstone of not only Sri Lankan cuisine but also global culinary traditions. Our Sri Lankan
            Spices are carefully cultivated, handpicked, and processed to bring you the finest, most aromatic spices,
            each carrying the authentic essence of the island.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
          <motion.div
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Why Choose Sri Lankan Spices</h2>
            <ul className="list-inside py-5 space-y-2">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Rich Heritage:</b>
                  <p>Sri Lanka has a centuries-old spice trade tradition, dating back to ancient times when traders from
                    around the world would seek out the island's prized spices. These spices are an integral part of Sri
                    Lanka's culinary culture and are celebrated for their bold, unique flavors.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Perfect Growing Conditions:</b>
                  <p>The tropical climate, fertile soil, and ideal altitudes of Sri Lanka create the perfect conditions
                    for growing spices. The island's diverse ecosystem provides a unique environment for the cultivation
                    of high-quality, aromatic spices.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Sustainability and Ethical Practices:</b>
                  <p>Sri Lankan farmers follow sustainable farming practices to preserve the environment and produce
                    spices that are free from harmful chemicals. Many of these spices are cultivated through organic
                    methods, ensuring the purity and integrity of every product.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
          <motion.div
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Key Sri Lankan Spices</h2>
            <ul className="list-inside py-5 space-y-2">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Ceylon Cinnamon</b>
                  <p>Ceylon Cinnamon, known as "True Cinnamon," is the most prized form of cinnamon worldwide. It has a
                    delicate, sweet flavor and is more aromatic and less bitter than Cassia (often found in
                    supermarkets). Sri Lanka is the birthplace of Ceylon cinnamon, where it is grown in small
                    family-owned farms using traditional methods.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Curry Leaves</b>
                  <p>Essential in Sri Lankan cuisine, Curry Leaves provide a fragrant, citrusy flavor that is widely used in curries, rice dishes, soups, and more. They are also valued for their health benefits, including their antioxidant properties.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Clove</b>
                  <p>Sri Lanka is a major producer of Clove, a spice prized for its intense, warm aroma and slightly bitter flavor. It is commonly used in both savory and sweet dishes, as well as in traditional herbal remedies.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Cardamom</b>
                  <p>Cardamom, known as the “queen of spices,” is grown in Sri Lanka’s highland regions. Its sweet, aromatic flavor enhances a variety of dishes and beverages, from teas and desserts to savory dishes and spice blends.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>BlackPepper&WhitePepper</b>
                  <p>Sri Lanka is famous for producing premium-quality Black Pepper and White Pepper. The island’s peppercorns are known for their intensity, making them ideal for seasoning and flavoring both local and international dishes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Turmeric</b>
                  <p>Turmeric is widely cultivated in Sri Lanka and is a key ingredient in curries, giving them their vibrant yellow color. Rich in curcumin, turmeric is also celebrated for its medicinal properties, particularly its anti-inflammatory and antioxidant effects.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Ginger</b>
                  <p>Known for its strong, zesty flavor, Ginger is grown throughout Sri Lanka and is used in both culinary and medicinal applications. It is commonly used in teas, curries, and sweet treats, as well as in traditional herbal remedies.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mr-2 self-start"/>
                <div>
                  <b>Nutmeg</b>
                  <p>Sri Lanka produces some of the finest Nutmeg in the world. Its warm, slightly sweet flavor enhances both sweet and savory dishes, while its essential oils are used in aromatherapy and natural remedies.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health Benefits of Sri Lankan Spices
            </h2>
            <p className="text-xl text-gray-600">
              Sri Lankan spices are not only known for their incredible flavors but also their remarkable health benefits. Many of these spices have been used in traditional medicine for centuries and are celebrated for their antioxidant, anti-inflammatory, and digestive properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12 text-orange-600" />,
                title: "Anti-inflammatory Properties",
                description: "Spices like Turmeric, Cinnamon, and Ginger are known for their anti-inflammatory properties, helping with conditions like arthritis and digestive issues."
              },
              {
                icon: <Sparkles className="w-12 h-12 text-orange-600" />,
                title: "Rich in Antioxidants",
                description: "Clove, Cardamom, and Nutmeg are packed with antioxidants that help fight free radicals and protect the body from oxidative stress."
              },
              {
                icon: <ShieldPlus className="w-12 h-12 text-orange-600" />,
                title: "Digestive Aid",
                description: "Curry Leaves, Pepper, and Ginger are renowned for their ability to promote digestion, relieve nausea, and improve overall gut health."
              },
              {
                icon: <Shield className="w-12 h-12 text-orange-600" />,
                title: "Boost Immunity",
                description: "Many of Sri Lanka's spices, such as Turmeric, Cinnamon, and Cardamom, are known to have immune-boosting properties, helping to support the body's natural defense systems."
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
              Whether you’re looking to add authentic flavor to your cooking or reap the health benefits of natural ingredients, Sri Lankan spices oYer an unparalleled combination of quality, taste, and wellness. From the finest Ceylon Cinnamon to the zesty Curry Leaves, our selection of Sri Lankan Spices brings the best of the island’s spice heritage straight to your table. Experience the essence of Sri Lanka with every spice, and embrace the island's rich culinary and medicinal traditions.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SriLankanSpices;