/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaClipboardList, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Left - Logo */}
            <div className="logo">
                <span className="logo-icon">V4</span>
                <span className="logo-text">Masters</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
            </div>

            {/* Center - Search container (Hidden in mobile) */}
            <div className={`search-container ${menuOpen ? "show" : ""}`}>
                <div className="location-bar">
                    <FaMapMarkerAlt className="icon" />
                    <input type="text" placeholder="Khandwa" />
                    <FaChevronDown className="dropdown-icon" />
                </div>
                <div className="search-bar">
                    <FaSearch className="icon" />
                    <input type="text" placeholder="Search for ‘cook’" />
                </div>
            </div>

            {/* Right - Icons (Hidden in mobile) */}
            <div className={`icons ${menuOpen ? "show" : ""}`}>
                <FaClipboardList className="icon" title="Bookings" />
                <FaShoppingCart className="icon" title="Cart" />
                <FaUser className="icon" title="Profile" />
            </div>
        </nav>
    );
};

export default Navbar;
