import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-10 px-6 bg-neutral-700">
      <div className="w-full max-w-screen-xl m-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8">
        <div className="flex flex-col text-white text-sm md:min-w-80 md:items-start items-center">
          <svg 
            width="930" 
            height="234" 
            viewBox="0 0 930 234" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 mb-4"
            style={{ overflow: 'visible' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <text x="465" y="150" fontFamily="Brush Script MT, Lucida Handwriting, cursive" fontSize="200" fontWeight="normal" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">Laundry &amp; Co</text>
          </svg>
          <span>Copyright 2025,</span>
          <span>Laundry and Co LLC</span>
        </div>
        <div className="flex md:flex-row flex-col md:flex-1 md:gap-0 gap-4">
          <div className="flex-1 flex flex-col text-brand-beige gap-2 md:py-0 md:px-8 md:items-start items-center">
            <Link className="font-bold" to="/company">Company</Link>
            <Link aria-description="About" to="/about-us">About</Link>
            <Link aria-description="Policies" to="/policies">Policies</Link>
            <Link aria-description="FAQ's" to="/">FAQ's</Link>
          </div>
          <div className="flex-1 flex flex-col text-brand-beige gap-2 md:py-0 md:px-8 md:items-start items-center">
            <Link className="font-bold" to="/services">Services</Link>
            <Link aria-description="Delivery" to="/services/delivery">Delivery</Link>
            <Link aria-description="Drop-Off" to="/services/drop-off">Drop-Off</Link>
            <Link aria-description="Self-Service" to="/services/self-service">Self-Service</Link>
          </div>
          <div className="flex-1 flex flex-col text-brand-beige gap-2 md:py-0 md:px-8 md:items-start items-center">
            <Link className="font-bold" to="/more">More of Us</Link>
            <Link aria-description="How it Works" to="/services/delivery">How it Works</Link>
            <Link aria-description="Commitments" to="/about-us">Commitments</Link>
            <Link aria-description="Get 30% off" to="/order-now">Get 30% off</Link>
          </div>
        </div>
        <div className="min-w-80 flex flex-col gap-8 md:items-start items-center">
          <div className="w-full flex flex-col gap-2 md:justify-end md:items-end justify-center items-center">
            <h4 className="text-lg font-bold text-white uppercase">Sign up for our Newsletter</h4>
            <form>
              <div className="relative max-w-72">
                <input placeholder="E-mail" required className="w-full block py-2 pl-2 pr-8 bg-white rounded-md" type="email" name="email" />
                <div className="absolute top-0 right-0 text-neutral-500 h-full w-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-8 md:gap-3">
            <div className="w-full flex gap-3 md:justify-end md:items-center md:flex-row flex-col items-center">
              <div className="uppercase font-black text-white">Follow Us</div>
              <div className="flex gap-3 items-center">
                <a href="https://www.instagram.com/laundryandco" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@laundryandco?_t=8sIlNVNk9i2&_r=1" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/laundryandco" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </a>
                <a href="https://x.com/laundryandco" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/LaundryAndCo/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full flex gap-3 md:justify-end md:items-center md:flex-row flex-col items-center">
              <div className="uppercase font-black text-white">Contact Us</div>
              <div className="flex gap-3 items-center text-white underline">
                <a href="mailto:hello@laundryandco.com">hello@laundryandco.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
