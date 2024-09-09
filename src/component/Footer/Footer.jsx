import React from 'react';
import logo from '../../assets/logo.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Make sure to import Font Awesome if using icons

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="flex items-center mb-8 md:mb-0">
            <img src={logo} alt="StayEZ Logo" className="w-32 h-24 mr-4" />
            <span className="font-bold text-2xl">StayEZ</span>
          </div>

          {/* Columns */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* Booking Information */}
            <ul className="text-sm mb-6 md:mb-0 space-y-2">
              <li><a href="#" className="hover:underline transition duration-300">Book a Room</a></li>
              <li><a href="#" className="hover:underline transition duration-300">Manage Bookings</a></li>
              <li><a href="#" className="hover:underline transition duration-300">Amenities</a></li>
              <li><a href="#" className="hover:underline transition duration-300">Special Offers</a></li>
            </ul>

            {/* Guest Services */}
            <ul className="text-sm mb-6 md:mb-0 space-y-2">
              <li><a href="#" className="hover:underline transition duration-300">Customer Support</a></li>
              <li><a href="#" className="hover:underline transition duration-300">FAQs</a></li>
              <li><a href="#" className="hover:underline transition duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:underline transition duration-300">About Us</a></li>
            </ul>

            {/* Contact */}
            <div className="text-sm mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p>Available: 09:00 AM - 06:00 PM</p>
              <p>Phone: <a href="tel:+919957409437" className="hover:underline transition duration-300">+91 9360424129</a></p>
              <p>Email: <a href="mailto:support@stayezy.com" className="hover:underline transition duration-300">support@stayezy.com</a></p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-white hover:text-gray-400 text-2xl transition duration-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-gray-400 text-2xl transition duration-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-gray-400 text-2xl transition duration-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white hover:text-gray-400 text-2xl transition duration-300"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} StayEZ. All rights reserved. Website created by Ramakrishnan S.
      </div>
    </footer>
  );
};

export default Footer;
