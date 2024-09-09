import React from 'react';
import logo from '../../assets/logo.png'; //
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={logo}  alt="Logo" className="h-10 w-10" />
                            <span className="font-bold text-orange-700 text-xl">StayEZ</span>
                        </Link>
                    </div>
                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/home" className="py-2 px-4 text-orange-700  hover:text-orange-700 transition duration-300 ">Home</Link>
                        <Link to="/room" className="py-2 px-4  text-orange-700 hover:text-orange-700 transition duration-300">Rooms</Link>
                        <Link to="/amenities" className="py-2 px-4  text-orange-700 hover:text-orange-700 transition duration-300">Amenities</Link>
                        <Link to="/book" className="py-2 px-4  text-orange-700 hover:text-orange-700 transition duration-300">Booking</Link>
                        <Link to="/contact" className="py-2 px-4  text-orange-700 hover:text-orange-700 transition duration-300">Contact Us</Link>
                        <Link to="/dashboard" className="py-2 px-4  text-orange-700 hover:text-orange-700 transition duration-300">Dashboard</Link>
                    </div>
                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="py-2 px-4 font-medium text-white bg-orange-700 rounded hover:bg-orange-700 transition duration-300">Log Out</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
