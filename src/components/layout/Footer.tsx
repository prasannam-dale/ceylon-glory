import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CEYLON GLORY</h3>
            <p className="text-gray-400">
              Empowering Flavorful Journeys Through Sustainable Practices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/#/sri-lankan-spices" className="text-gray-400 hover:text-white">Sri Lankan Spices</a></li>
              <li><a href="/#/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/#/products" className="text-gray-400 hover:text-white">Our Products</a></li>
              <li><a href="/#/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/#/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/#/international-return-and-refund-policy" className="text-gray-400 hover:text-white">International Return & Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-gray-400">123 Business Street, City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-gray-400">info@ceylonglory.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 CEYLON GLORY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;