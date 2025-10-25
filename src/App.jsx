import React from 'react';
import Hero from './components/Hero';
import HotelList from './components/HotelList';
import RoomGallery from './components/RoomGallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Hero />
      <HotelList />
      <RoomGallery />
      <Footer />
    </div>
  );
};

export default App;
