import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesSection from './components/services/ServicesSection';
import AboutSection from './components/about/AboutSection';
import { FaInstagram } from 'react-icons/fa';

// Define the type for the form data
interface FormData {
  name: string;
  number: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({ name: '', number: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({}); // Partial allows only some fields to have errors

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Mobile Number is required';
    } else if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = 'Mobile Number must be a valid 10-digit number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      e.currentTarget.submit();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <ServicesSection />
      <AboutSection />

      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <div className="max-w-md mx-auto">
                <form
                  action="https://formsquash.io/f/VGcR020mxyfdSQvPKWlB"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      placeholder="Mobile Number"
                      value={formData.number}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        errors.number ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300`}
                    />
                    {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        errors.message ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

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
