import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesSection from './components/services/ServicesSection';
import AboutSection from './components/about/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <ServicesSection />
      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
                ></textarea>
              </div>
              <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;