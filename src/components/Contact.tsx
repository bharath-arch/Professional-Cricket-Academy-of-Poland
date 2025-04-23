import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-purple-100 p-1 bg-purple-50">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'inquiries'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
              }`}
            >
              General Inquiries
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'locations'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
              }`}
            >
              Our Locations
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'feedback'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
              }`}
            >
              Send Feedback
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* General Inquiries Tab */}
          {activeTab === 'inquiries' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-600">
                  Have questions about our programs or services? Our team is here to help.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-semibold">Email Us</h4>
                  </div>
                  <a href="mailto:info@pcap.pl" className="text-purple-600 hover:text-purple-700">
                    info@pcap.pl
                  </a>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-semibold">Call Us</h4>
                  </div>
                  <a href="tel:+48123456789" className="text-purple-600 hover:text-purple-700">
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-purple-600 italic">
                  Serving cricket enthusiasts in Warsaw and Krakow, Poland
                </p>
              </div>
            </div>
          )}

          {/* Locations Tab */}
          {activeTab === 'locations' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Locations</h3>
                <p className="text-gray-600">
                  Find us at one of our cricket academy centers across Poland.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Warsaw Center</h4>
                      <p className="text-gray-500">Main Training Facility</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-600">123 Cricket Street</p>
                    <p className="text-gray-600">Warsaw, Poland</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Krakow Center</h4>
                      <p className="text-gray-500">Training & Development Hub</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-600">456 Sports Avenue</p>
                    <p className="text-gray-600">Krakow, Poland</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Feedback Tab */}
          {activeTab === 'feedback' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Send Us Feedback</h3>
                <p className="text-gray-600">
                  We value your feedback. Let us know how we can improve our services.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your feedback"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;