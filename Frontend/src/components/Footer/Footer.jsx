import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import AppStore from "../../assets/download/AppStore.png";
import PlayStore from "../../assets/download/PlayStore.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-10">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-black text-white font-bold text-xl p-2 rounded">
              <span className="text-white">V4</span>
            </div>
            <div className="ml-2">
              <div className="font-bold text-lg">Urban</div>
              <div className="font-bold text-lg -mt-1">Company</div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Anti-discrimination policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">UC impact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
            </ul>
          </div>

          {/* For customers */}
          <div>
            <h3 className="font-bold text-lg mb-4">For customers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">UC reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Categories near you</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact us</a></li>
            </ul>
          </div>

          {/* For partners */}
          <div>
            <h3 className="font-bold text-lg mb-4">For partners</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Register as a professional</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social links</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-gray-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-gray-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-gray-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-gray-200">
                <Linkedin size={20} />
              </a>
            </div>

            {/* App Store and Google Play */}
            <div className="space-y-2">
              <a href="#" className="block ">
                <img src={AppStore} alt="App Store" className="h-10 w-29" />
              </a>
              <a href="#" className="block">
                <img src={PlayStore} alt="Google Play" className="h-10 w-30" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-gray-600 text-sm">
          © Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413
        </div>
      </div>
    </footer>
  );
};

export default Footer;