// src/components/layouts/MainLayout.jsx
import React from 'react';
import { Header, User, Features, Testimonials, Footer } from './components/index';

const MainLayout = () => {
  return (
    <> 
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Header />
      </div>
      <User />
      <Features />
      <Testimonials />
      <Footer />
    </> 
  );
};

export default MainLayout;
// bg cover 