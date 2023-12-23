import React from 'react';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';

const Layout = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Other sections/components */}
      <Login />
      <Footer />
    </div>
  );
};

export default Layout;
