import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            {t("contact-us.contact-us-now.title")}
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-700 rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {t("contact-us.contact-us-now.contact-sales")}
                </h2>

                <div className="space-y-3 mb-8 text-white">
                  <div>
                    <span className="font-medium">
                      {t("contact-us.contact-us-now.phone")}{" "}
                    </span>
                    <span>(408) 676-5535</span>
                  </div>
                  <div>
                    <span className="font-medium">
                      {t("contact-us.contact-us-now.email")}{" "}
                    </span>
                    <a
                      href="mailto:info@acploads.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      info@acploads.com
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">
                      {t("contact-us.contact-us-now.support")}{" "}
                    </span>
                    <a
                      href="mailto:support@acploads.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      support@acploads.com
                    </a>
                  </div>
                </div>

                <hr className="border-slate-600 mb-8" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t("contact-us.contact-us-now.service-hours")}
                </h3>
                <div className="space-y-2 text-white mb-8">
                  <div>
                    <span className="font-medium">
                      {t("contact-us.contact-us-now.monday-saturday")}:{" "}
                    </span>
                    <span>8:00 AM – 6:00 PM (EST)</span>
                  </div>
                  <div>
                    <span className="font-medium">
                      {t("contact-us.contact-us-now.sunday-closed")}
                    </span>
                  </div>
                </div>

                <hr className="border-slate-600 mb-8" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t("contact-us.contact-us-now.office-address")}
                </h3>
                <div className="text-white space-y-1">
                  <div>38511 S Hampton Dr.</div>
                  <div>Frankford, DE 19945, United States</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {t("contact-us.contact-us-now.form-title")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("btn-input-texts.enter-name")}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder={
                    t("btn-input-texts.enter-email")
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder={t("btn-input-texts.enter-phone")}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder={t("btn-input-texts.enter-company")}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                />

                <textarea
                  name="message"
                  placeholder={t("btn-input-texts.enter-msg")}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-vertical"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-700"
                >
                  {t("btn-input-texts.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
