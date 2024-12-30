import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesSection from './components/services/ServicesSection';
import AboutSection from './components/about/AboutSection';
import { FaInstagram } from 'react-icons/fa';

function App() {
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formsquash.io/f/VGcR020mxyfdSQvPKWlB', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', number: '', message: '' }); // Reset form
        setTimeout(() => setFormStatus(''), 3000); // Clear status after 3 seconds
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="flex-1">
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                      required
                    ></textarea>
                    <input type="hidden" name="_gotcha"></input>
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'success' && (
                    <div className="text-green-500 text-center mt-2">
                      Message sent successfully!
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="text-red-500 text-center mt-2">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Business Details */}
            <div className="flex-1 text-center lg:text-left text-white space-y-6">
              <h3 className="text-2xl font-bold">More about Us</h3>
              <p className="text-lg">
                <strong>Address:</strong> Siddipet, Telangana, India
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> +91 7815849505
              </p>
              <p className="text-lg">
                <strong>Email:</strong> contact@brandboost.buzz
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <a href="https://instagram.com/brandboost.buzz" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl text-white hover:text-gray-400 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;