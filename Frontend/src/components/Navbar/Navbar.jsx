import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaClipboardList, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
                {/* Left - Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-white bg-[#432818] px-3 py-1 rounded-md text-lg font-bold">V4</span>
                    <span className="text-[#432818] font-semibold text-lg">Masters</span>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-xl text-gray-700" /> : <FaBars className="text-xl text-gray-700" />}
                    </button>
                </div>

                {/* Center - Search container */}
                <div className={`flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}>
                    <div className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300 w-full md:w-56">
                        <FaMapMarkerAlt className="text-gray-500" />
                        <input type="text" placeholder="Khargone" className="ml-2 bg-transparent outline-none text-sm flex-grow" />
                        <FaChevronDown className="text-gray-500" />
                    </div>
                    <div className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300 w-full md:w-80">
                        <FaSearch className="text-gray-500" />
                        <input type="text" placeholder="Search for ‘cook’" className="ml-2 bg-transparent outline-none text-sm flex-grow" />
                    </div>
                </div>

                {/* Right - Icons */}
                <div className={`flex flex-col md:flex-row items-center gap-6 absolute md:static top-40 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}>
                    <FaClipboardList className="text-xl text-[#432818] cursor-pointer hover:text-orange-500 transition" title="Bookings" />
                    <FaShoppingCart className="text-xl text-[#432818] cursor-pointer hover:text-orange-500 transition" title="Cart" />
                    <FaUser className="text-xl text-[#432818] cursor-pointer hover:text-orange-500 transition" title="Profile" onClick={() => setShowLogin(true)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
