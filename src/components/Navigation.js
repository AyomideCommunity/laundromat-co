import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  // Check if a path is active
  const isActive = (path) => {
    if (path === '/services') {
      // Services is active if we're on /services or any sub-route
      return pathname === '/services' || pathname.startsWith('/services/');
    }
    return pathname === path;
  };

  // Get active class for nav links
  const getActiveClass = (path) => {
    return isActive(path)
      ? 'btn btn-ghost btn-md !rounded-full !text-white !bg-brand-blue hidden md:flex whitespace-nowrap'
      : 'btn btn-ghost btn-md !rounded-full !text-brand-blue hidden md:flex whitespace-nowrap';
  };

  return (
    <nav className="w-full fixed z-50 h-20 md:h-24 top-0 left-0 bg-brand-beige flex items-center px-4 md:px-8">
      {/* Left: Primary actions / revenue drivers */}
      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="text-brand-blue text-2xl md:hidden cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </div>
        <a className="btn btn-primary btn-md !bg-[#235892] !text-brand-beige !rounded-full !text-brand-beige hidden md:flex" href="https://app.trycents.com/order/business/OWMw" target="_blank" rel="noopener noreferrer">Order Now</a>
        <Link className={getActiveClass('/services')} to="/services">Services</Link>
      </div>

      {/* Center: Brand anchor - Logo */}
      <div className="flex-1 flex justify-center items-center px-4">
        <Link className="flex items-center justify-center flex-shrink-0" to="/">
          <svg 
            width="930" 
            height="234" 
            viewBox="0 0 930 234" 
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 md:h-20 w-auto" 
            style={{ maxWidth: 'none' }}
          >
            <text x="465" y="150" fontFamily="Brush Script MT, Lucida Handwriting, cursive" fontSize="200" fontWeight="normal" fill="#000000" textAnchor="middle" letterSpacing="1">Laundry &amp; Co</text>
          </svg>
        </Link>
      </div>

      {/* Right: Secondary / informational pages */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <Link className={getActiveClass('/about-us')} to="/about-us">About Us</Link>
        <Link className={getActiveClass('/pickup-and-delivery')} to="/pickup-and-delivery">Pickup & Delivery</Link>
        <Link className={getActiveClass('/location')} to="/location">Location</Link>
        <Link className={getActiveClass('/contact-us')} to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navigation;
