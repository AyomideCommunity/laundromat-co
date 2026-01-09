import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function ServicesDropOff() {

  useEffect(() => {
    document.title = 'Drop-Off Service - Laundry and Co';
  }, []);

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      <div className="w-3/4 h-full fixed top-0 left-0 bg-brand-beige z-[100] transition-all py-8 px-4 -translate-x-full"><div className="w-full flex flex-col gap-8"><div><Link className="text-2xl text-neutral-800 inline-flex" to="/">Home</Link></div><div><Link className="text-2xl text-neutral-800 inline-flex" to="/services">Services</Link></div><div><Link className="text-2xl text-neutral-800 inline-flex" to="/about-us">About Us</Link></div><div></div><div><a href="https://app.trycents.com/order/business/OWMw">Order Now</a></div></div></div>
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        <div className="w-full bg-brand-beige md:justify-center py-2 md:py-4 flex gap-6 md:px-0 px-6 md:gap-10 overflow-auto"><Link className="font-medium md:text-xl text-brand-blue flex-shrink-0 transition-colors hover:text-brand-medium-light-blue" to="/services/delivery">Delivery</Link><Link className="font-medium md:text-xl text-brand-blue flex-shrink-0 transition-colors hover:text-brand-medium-light-blue underline" to="/services/drop-off">Drop-Off</Link><Link className="font-medium md:text-xl text-brand-blue flex-shrink-0 transition-colors hover:text-brand-medium-light-blue" to="/services/self-service">Self-Service</Link><Link className="font-medium md:text-xl text-brand-blue flex-shrink-0 transition-colors hover:text-brand-medium-light-blue" to="/services/commercial">Commercial</Link></div><section className="w-full px-4 md:px-12 md:py-20 py-6 bg-white"><div className="w-full max-w-screen-xl m-auto flex flex-col"><div className="w-full flex flex-col md:flex-row gap-10 md:items-center"><div className="flex-1 flex-shrink-0 flex flex-col gap-4"><h2 className="md:text-5xl text-3xl font-black text-brand-dark-blue mb-2">Drop-Off</h2><p className="text-lg text-brand-medium-blue leading-relaxed">Experience the convenience of our fast and easy Drop-Off laundry service. Included is our organic, hypoallergenic laundry detergent and wool dryer balls for a gentle, eco-friendly clean. You also have the flexibility to choose your preferred wash and dry settings. Simply drop off your laundry at our Williamsburg location and select the service below that suits you best.</p></div><div className="flex-1 flex-shrink-0 flex flex-col"><div className="w-full rounded-xl relative overflow-hidden border-4 border-black cursor-pointer group !rounded-none !border-none"><video src="https://customer-ygqpz5wjba3ukgvl.cloudflarestream.com/6cbd8dcc53be512f5319797c62999933/downloads/default.mp4" className="w-full aspect-video object-cover" loop autoPlay /></div></div></div></div></section></main>
      <Footer />

      
    </div>
  );
}

export default ServicesDropOff;
