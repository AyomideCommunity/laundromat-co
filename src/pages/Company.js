import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Company() {

  useEffect(() => {
    document.title = 'Company - Laundry and Co';
  }, []);

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        <div>Content not available</div>
      </main>
      <Footer />
    </div>
  );
}

export default Company;
