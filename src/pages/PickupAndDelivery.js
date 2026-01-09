import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function PickupAndDelivery() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Pickup & Delivery - Laundry and Co';
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your hours of operation?",
      answer: "Our pickup and delivery service operates Monday through Sunday. Pickup times are available from 8:00 AM to 8:00 PM, and we deliver within 24-48 hours of pickup. For specific hours and availability in your area, please check our scheduling system."
    },
    {
      question: "Where are you located?",
      answer: "We're located in New York and serve multiple neighborhoods throughout the city. Use our address search feature above to see if we deliver to your area. Our main facility is centrally located to ensure fast and efficient service."
    },
    {
      question: "Do you offer wash-and-fold service?",
      answer: "Yes! Our wash-and-fold service is one of our most popular offerings. We'll wash, dry, and fold your laundry with care, returning it to you fresh and neatly organized. This service is perfect for busy individuals and families."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely through our online platform when you schedule your pickup. We also offer subscription plans for regular customers."
    },
    {
      question: "Are your machines modern and well-maintained?",
      answer: "Absolutely! We use state-of-the-art commercial-grade washing machines and dryers that are regularly maintained and serviced. Our facilities are clean, modern, and equipped with the latest technology to ensure your laundry receives the best care possible."
    }
  ];

  const testimonials = [
    {
      name: "Maria L.",
      text: "I love Laundry & Co! The staff is friendly, the place is spotless, and my wash-and-fold always comes back perfectly folded and smelling amazing. So glad I found this spot!",
      location: "New York, NY"
    },
    {
      name: "Daniel R.",
      text: "Super convenient location and great hours. I drop off my laundry on the way to work and pick it up after fast, reliable, and very reasonably priced.",
      location: "New York, NY"
    },
    {
      name: "Jasmine P.",
      text: "Clean machines, never a long wait, and the team goes above and beyond. They even helped me remove a stain I thought was impossible. Highly recommend!",
      location: "New York, NY"
    }
  ];

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase">Pickup & Delivery</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">Laundry Delivery Service in New York</h2>
              <p className="text-lg md:text-xl text-brand-dark-blue leading-relaxed max-w-3xl m-auto">
                Simplify your laundry routine with Laundry & Co Pickup and Delivery Service in New York. Schedule a pickup, and we'll clean and deliver your items right to your door—no hassle, just convenience!
              </p>
              <div className="pt-4">
                <a 
                  href="https://app.trycents.com/order/business/OWMw" 
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-lg"
                >
                  Schedule Pickup
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Search Section */}
        <section className="w-full px-4 md:px-12 py-12 bg-brand-beige">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-4">View Services & Pricing</h2>
              <p className="text-lg text-gray-700 mb-6">
                See if you're in our pickup and delivery service area. Search your address to see available services in your area.
              </p>
              <div className="max-w-2xl m-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter your address" 
                    className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-brand-blue focus:outline-none text-lg"
                  />
                  <a 
                    href="https://app.trycents.com/order/business/OWMw"
                    className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-center"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80" 
                alt="Laundry pickup and delivery service" 
                className="w-full rounded-xl object-cover aspect-square"
              />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">Convenient Pickup & Delivery</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue">Laundry Made Easy!</h3>
              <p className="text-lg text-brand-dark-blue leading-relaxed">
                Our Pickup and Delivery Service is designed to save you time. Choose a pickup time that fits your schedule, and we'll collect your laundry, dry cleaning, or linens. After cleaning, we'll return your items to your doorstep. With real-time tracking and flexible options, we make laundry effortless!
              </p>
              <div className="pt-4">
                <a 
                  href="https://app.trycents.com/order/business/OWMw" 
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity"
                >
                  Schedule Pickup
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Three Steps Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-brand-beige">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">It's Easy to Avoid the Laundry Hassle</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-blue">Laundry Done in Just Three Simple Steps</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-3xl font-bold">1</div>
                <h4 className="text-2xl font-bold text-gray-900">Create an Online Account</h4>
                <p className="text-brand-medium-blue leading-relaxed">
                  To create an account, just enter your name and phone number, then complete a one-time verification sent to your phone.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-3xl font-bold">2</div>
                <h4 className="text-2xl font-bold text-gray-900">Choose Your Pickup & Delivery Dates</h4>
                <p className="text-brand-medium-blue leading-relaxed">
                  Select your preferred dates for pickup and delivery to schedule when you'd like your laundry to be collected and returned.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-3xl font-bold">3</div>
                <h4 className="text-2xl font-bold text-gray-900">Sit Back & Relax</h4>
                <p className="text-brand-medium-blue leading-relaxed">
                  Enjoy the convenience and let us handle everything, from washing to delivery, while you unwind.
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <a 
                href="https://app.trycents.com/order/business/OWMw" 
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity"
              >
                Schedule Pickup
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase mb-4">Still Have Questions?</h2>
            </div>
            <div className="w-full flex flex-col border-t border-gray-300">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center gap-4 py-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 font-semibold text-lg md:text-xl text-brand-dark-blue">
                      {faq.question}
                    </div>
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-brand-blue">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        fill="currentColor" 
                        viewBox="0 0 256 256"
                        className={`text-2xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}
                      >
                        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="pb-6 px-4">
                      <p className="text-brand-medium-blue leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-brand-beige">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase mb-4">Testimonials</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-blue">Why Customers Love Us</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-md">
                  <p className="text-gray-700 leading-relaxed flex-1">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">{testimonial.name}</span>
                      <span className="text-sm text-gray-600">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="text-brand-blue font-semibold hover:underline">View more</button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full px-4 md:px-12 md:py-20 py-12 bg-white">
          <div className="w-full max-w-screen-xl m-auto flex flex-col gap-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase">Transform Your Laundry Day</h2>
            <p className="text-xl md:text-2xl text-brand-dark-blue font-semibold">Schedule a Pickup Now for Hassle-Free Laundry</p>
            <div className="pt-4">
              <a 
                href="https://app.trycents.com/order/business/OWMw" 
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-10 py-5 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-lg md:text-xl"
              >
                Schedule Pickup
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PickupAndDelivery;
