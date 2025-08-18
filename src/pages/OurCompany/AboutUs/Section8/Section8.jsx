import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Section8 = () => {
  const { t } = useTranslation(); // грузим namespace about-us

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23374151" width="1200" height="800"/><g opacity="0.3"><rect x="800" y="300" width="300" height="150" fill="%23ef4444" rx="20"/><rect x="850" y="200" width="200" height="300" fill="%23ffffff" rx="10"/><circle cx="950" cy="500" r="30" fill="%23000000"/><circle cx="900" cy="500" r="30" fill="%23000000"/></g></svg>')`
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("about-us.contact-us.title")}
                </h2>
                <p className="text-xl text-gray-300">
                  {t("about-us.contact-us.description")}
                </p>
              </div>
              
              <hr className="border-gray-600" />
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("about-us.contact-us.office-address")}
                    </h4>
                    <p className="text-gray-300">
                      38511 S Hampton Dr<br />
                      Frankford, DE 19945 USA
                    </p>
                  </div>
                </div>

                <hr className="border-gray-600" />

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("about-us.contact-us.phone-number")}
                    </h4>
                    <p className="text-gray-300">+1 408-676-5535</p>
                  </div>
                </div>

                <hr className="border-gray-600" />

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("about-us.contact-us.email-address")}
                    </h4>
                    <p className="text-gray-300">info@acploads.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("about-us.contact-us.get-in-touch")}
                </h3>
                <p className="text-gray-300 mb-8">
                  {t("about-us.contact-us.get-in-touch-description")}
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-medium mb-2">{t("btn-input-texts.full-name")}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2">{t("btn-input-texts.email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter a valid email address"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">{t("btn-input-texts.how-can-we-help")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-vertical"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
