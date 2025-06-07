import React, { useState } from "react";

const Navbar = ({ setShowLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Add your Google API key here
  const GOOGLE_API_KEY = "AIzaSyBCmZkwAbDc8heXP54D_U4Q_ZChXcV1aGw"; // Replace with your actual API key

  // Function to get user's current location using Google Geocoding API
  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    setLocationError("");

    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser");
      setIsLoadingLocation(false);
      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Debug: Log coordinates to verify they're different
          console.log(`Current coordinates: ${latitude}, ${longitude}`);
          console.log(`Accuracy: ${position.coords.accuracy} meters`);
          
          // Use Google Geocoding API for reverse geocoding
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}&language=en`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          console.log('Google Geocoding response:', data); // Debug log
          
          if (data.status === 'OK' && data.results && data.results.length > 0) {
            // Get the most relevant result (usually the first one)
            const result = data.results[0];
            
            // Extract location components
            const addressComponents = result.address_components;
            let locationParts = [];
            
            // Find relevant components in priority order
            const findComponent = (types) => {
              return addressComponents.find(component => 
                types.some(type => component.types.includes(type))
              );
            };
            
            // Priority: locality (city/town) -> sublocality -> administrative_area_level_3 -> administrative_area_level_2
            const city = findComponent(['locality']);
            const sublocality = findComponent(['sublocality', 'sublocality_level_1']);
            const area3 = findComponent(['administrative_area_level_3']);
            const area2 = findComponent(['administrative_area_level_2']);
            const state = findComponent(['administrative_area_level_1']);
            
            // Build location string with appropriate components
            if (city) {
              locationParts.push(city.long_name);
            } else if (sublocality) {
              locationParts.push(sublocality.long_name);
            } else if (area3) {
              locationParts.push(area3.long_name);
            } else if (area2) {
              locationParts.push(area2.long_name);
            }
            
            // Add state if it's different from the main location
            if (state && !locationParts.includes(state.long_name)) {
              locationParts.push(state.long_name);
            }
            
            const finalLocation = locationParts.length > 0 
              ? locationParts.join(', ') 
              : result.formatted_address.split(',')[0]; // Fallback to first part of formatted address
            
            console.log('Final location:', finalLocation); // Debug log
            setLocation(finalLocation);
            
          } else if (data.status === 'ZERO_RESULTS') {
            throw new Error('No location data found for these coordinates');
          } else if (data.status === 'OVER_QUERY_LIMIT') {
            throw new Error('Google API quota exceeded');
          } else if (data.status === 'REQUEST_DENIED') {
            throw new Error('Google API request denied - check your API key');
          } else {
            throw new Error(`Google API error: ${data.status}`);
          }
        } catch (error) {
          console.error('Error getting location:', error);
          
          // Provide more specific error messages
          if (error.message.includes('API key')) {
            setLocationError("Invalid API key. Please check your Google API configuration.");
          } else if (error.message.includes('quota')) {
            setLocationError("API quota exceeded. Please try again later.");
          } else if (error.message.includes('HTTP error')) {
            setLocationError("Network error. Please check your connection.");
          } else {
            setLocationError("Failed to get location details");
          }
          
          // Fallback: just use coordinates
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}`, `${longitude.toFixed(4)}`);
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        setIsLoadingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied by user");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out");
            break;
          default:
            setLocationError("An unknown error occurred");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000, // Cache for 5 minutes to avoid excessive API calls
      }
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-white bg-amber-900 px-3 py-1 rounded-md text-lg font-bold">
            V4
          </span>
          <span className="text-amber-900 font-semibold text-lg">Masters</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Search and Location */}
        <div
          className={`flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {/* Location Field with Geolocation */}
          <div className="relative w-full md:w-56">
            <div className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="ml-2 bg-transparent outline-none text-sm flex-grow"
              />
              <button
                onClick={getCurrentLocation}
                disabled={isLoadingLocation}
                className="ml-2 p-1 text-gray-500 hover:text-amber-900 transition-colors disabled:opacity-50"
                title="Get current location"
              >
                {isLoadingLocation ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                )}
              </button>
              <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Error message */}
            {locationError && (
              <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-red-100 border border-red-300 rounded-md text-xs text-red-600 z-10">
                {locationError}
              </div>
            )}
          </div>

          {/* Search Field */}
          <div className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300 w-full md:w-80">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for 'cook'"
              className="ml-2 bg-transparent outline-none text-sm flex-grow"
            />
          </div>
        </div>

        {/* Icons */}
        <div
          className={`flex flex-col md:flex-row items-center gap-6 absolute md:static top-40 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <svg
            className="w-5 h-5 text-amber-900 cursor-pointer hover:text-orange-500 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            title="Bookings"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <svg
            className="w-5 h-5 text-amber-900 cursor-pointer hover:text-orange-500 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            title="Cart"
            onClick={() => console.log('Navigate to cart')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a0 0 0 00-6 0v4.01" />
          </svg>
          <svg
            className="w-5 h-5 text-amber-900 cursor-pointer hover:text-orange-500 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            title="Profile"
            onClick={() => setShowLogin && setShowLogin(true)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;