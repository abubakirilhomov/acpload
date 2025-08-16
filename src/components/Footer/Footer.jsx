import { useState } from "react"
import { Link } from "react-router-dom"
import { MdOutlineAttachEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"
import { LiaTelegramPlane } from "react-icons/lia"
import { IoLogoApple } from "react-icons/io5"
import { FaGooglePlay } from "react-icons/fa"

const Footer = () => {
  const [copied, setCopied] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@acploads.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-base-300 text-base-content py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section: Logo, Description, and Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div>
              <img src="/images/acp-logo.png" alt="ACP Loads" className="h-12" />
            </div>
            <p className="text-sm opacity-80">
              Feel free to get in touch with us at ACP Loads to unlock a world of efficient and reliable logistics
              services. We understand the importance of seamless communication in the logistics industry.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MdOutlinePhone className="text-lg" />
                <span>Phone Number: +1 408-676-5535</span>
              </div>
              <div className="flex items-center gap-2 relative">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                >
                  <MdOutlineAttachEmail className="text-lg" />
                  <span>Email: info@acploads.com</span>
                </button>
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-base-200 text-base-content text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-lg" />
                <span>Location: 38511 S Hampton Dr, Frankford, DE 19945 USA</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Platform Column */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2">Platform</h3>
              <Link to="#" className="text-sm hover:text-primary">
                How It Works
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Features
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Live Loadboard
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Freight Rate Calculator
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Terms and Conditions
              </Link>
            </div>

            {/* Products Column */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2">Products</h3>
              <Link to="#" className="text-sm hover:text-primary">
                Loadboard
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                ACP TMS
              </Link>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2">Solutions</h3>
              <Link to="#" className="text-sm hover:text-primary">
                Carrier Dispatchers
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Broker
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Carrier
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Shipper
              </Link>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2">Resources</h3>
              <Link to="#" className="text-sm hover:text-primary">
                Freight & Logistics Blog
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Partnership & Affiliate
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Newsletter Subscription
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Guides
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Videos
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                FAQs
              </Link>
            </div>

            {/* Our Company Column */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2">Our Company</h3>
              <Link to="#" className="text-sm hover:text-primary">
                About Us
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Leadership
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Testimonials & Reviews
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Support Center
              </Link>
              <Link to="#" className="text-sm hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline normal-case justify-start gap-2 text-base-content hover:text-base-content"
              >
                <IoLogoApple className="text-xl" />
                <div className="flex flex-col items-start text-xs">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline normal-case justify-start gap-2 text-base-content hover:text-base-content"
              >
                <FaGooglePlay className="text-xl" />
                <div className="flex flex-col items-start text-xs">
                  <span className="text-xs">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-start gap-1 mt-2">
              <span className="text-xs">Review us on</span>
              <div className="flex items-center gap-1">
                <img src="/images/trustpilot.png" alt="Trustpilot" className="h-6" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-success" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Social Icons */}
        <div className="divider my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-70">© ACP Loads Group. Since 2022</p>
          <div className="flex gap-2">
          <button
            onClick={copyEmailToClipboard}
            className="relative p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <MdOutlineAttachEmail size={24} />
            {copied && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                Copied!
              </span>
            )}
          </button>
          <Link
            to="https://anycappro.com"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <LiaTelegramPlane size={24} />
          </Link>
          <Link
            to="https://www.instagram.com/acploads/"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to="https://www.youtube.com/@acploads"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/acp-loads-155277302/"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer