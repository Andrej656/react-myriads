import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Login from './Login';
import Footer from './Footer';

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
