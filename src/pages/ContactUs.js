import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us - Laundry and Co';
  }, []);

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        <section className="w-full px-4 md:px-12 md:py-20 py-6 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-6">Contact Us</h1>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">Get in Touch</h2>
                  <p className="text-lg text-brand-dark-blue leading-relaxed mb-6">
                    Have questions or need assistance? We're here to help! Reach out to us through any of the methods below.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">📧</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:hello@laundryandco.com" className="text-brand-medium-blue hover:text-brand-blue">
                        hello@laundryandco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">📞</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-brand-medium-blue">Call us during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">📍</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <Link to="/location" className="text-brand-medium-blue hover:text-brand-blue">
                        View our location
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary !bg-[#235892] !text-brand-beige !rounded-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
