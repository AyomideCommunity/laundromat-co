import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Location() {
  useEffect(() => {
    document.title = 'Location - Laundry and Co';
  }, []);

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        <section className="w-full px-4 md:px-12 md:py-20 py-6 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-6">Our Location</h1>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">Visit Our Laundromat</h2>
                  <p className="text-lg text-brand-dark-blue leading-relaxed mb-6">
                    Come visit us at our convenient location. We're open daily to serve all your laundry needs.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">📍</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-brand-medium-blue">
                        73-12 Austin St<br />
                        Forest Hills, NY 11375
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">🕐</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Hours</h3>
                      <div className="text-brand-medium-blue">
                        <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-brand-blue">📞</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-brand-medium-blue hover:text-brand-blue">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-73.85!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8b8c8c8c8d%3A0x8c8c8c8c8c8c8c8d!2s73-12%20Austin%20St%2C%20Forest%20Hills%2C%20NY%2011375!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Laundry and Co Location"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=73-12+Austin+St+Forest+Hills+NY+11375" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold uppercase hover:opacity-90 transition-opacity"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Location;
