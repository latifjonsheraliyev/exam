import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const CheckoutFromMap = () => {
    useEffect(() => {
        // Create a new script element to load the Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        document.head.appendChild(script);
    
        console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

        script.onload = () => {
            
          // Initialize the map after the script is loaded
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        };
    
        // Cleanup function to remove the script when the component is unmounted
        return () => {
          document.head.removeChild(script);
        };
      }, []);
    
  return (
    <div>
      <h1>Google Maps</h1>
      {/* Map container, make sure it has width and height */}
      <div
        id="map"
        style={{ width: '100%', height: '400px', border: '1px solid black' }}
      ></div>
    </div>
  );
};

export default CheckoutFromMap;



// import.meta.env.VITE_GOOGLE_MAPS_API_KEY