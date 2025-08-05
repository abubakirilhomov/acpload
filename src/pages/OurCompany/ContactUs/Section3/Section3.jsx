import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = () => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Contact Us Now</h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-700 rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Sales</h2>

                <div className="space-y-3 mb-8">
                  <div className="text-white">
                    <span className="font-medium">Phone: </span>
                    <span>(408) 676-5535</span>
                  </div>
                  <div className="text-white">
                    <span className="font-medium">Email: </span>
                    <a href="mailto:info@acploads.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@acploads.com
                    </a>
                  </div>
                  <div className="text-white">
                    <span className="font-medium">Support: </span>
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
                <h3 className="text-xl font-semibold text-white mb-4">Service Hours:</h3>
                <div className="space-y-2 text-white mb-8">
                  <div>
                    <span className="font-medium">Monday – Saturday: </span>
                    <span>8:00 AM – 6:00 PM (EST)</span>
                  </div>
                  <div>
                    <span className="font-medium">Sunday: </span>
                    <span>Closed</span>
                  </div>
                </div>

                <hr className="border-slate-600 mb-8" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Office Address:</h3>
                <div className="text-white space-y-1">
                  <div>38511 S Hampton Dr.</div>
                  <div>Frankford, DE 19945, United States</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Need help? Get in touch</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone (e.g. +14155552675)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-500 text-white placeholder-slate-300 rounded border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
