import React from 'react'
import AnimatedContent from '../../../components/ReactBits/AnimatedContent'
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsFillQuestionSquareFill, BsNewspaper } from "react-icons/bs";
import { FiMail, FiUsers } from 'react-icons/fi';

const topics = [
  "Account Registration & Verification",
  "Password Recovery & Security",
  "Posting & Managing Loads",
  "Searching for Loads or Trucks",
  "Ratings, Reviews, and Disputes",
  "Billing & Subscription Questions",
  "Technical Issues & Bug Reporting",
  "Profile & Company Information Updates",
  "API & Partner Integration Support"
];


const SupportCenter = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center text-white text-start p-8 relative"
        style={{
          backgroundImage: "url('https://assets.nicepagecdn.com/11a8ddce/3543521/images/pexels-christina-morillo-1181435.jpg')"
        }}>
        <div className="absolute inset-0 bg-[#081621] opacity-40"></div>
        <AnimatedContent
          distance={100}
          direction="Vertical"
          reverse={false}
          duration={2}
          initialOpacity={0}
          animateOpacity={true}
          initialScale={1}
          threshold={0}
          delay={0}
        >
          <div className="relative z-10 max-w-5xl mx-auto space-y-6 md:px-8 bg-white/40 rounded-r-2xl ml-20 p-8">
            <p className='text-2xl font-bold'>Support Center</p>
            <p className="text-6xl font-bold mb-6">Welcome to the ACP Loads Support Center</p>
            <p className="text-lg mb-4">
              At ACP Loads, your satisfaction and success are our highest priorities. Whether you’re a Carrier, Broker,
              Dispatcher, or Shipper, our dedicated Support Center is here to provide you with fast, effective assistance—
              so you can keep your logistics operations running smoothly.
            </p>
          </div>
        </AnimatedContent>
      </div>

      {/* How Can We Help */}
      <div className="bg-blue-400/10 flex flex-wrap items-center justify-center text-white text-start p-12 relative">
        <div className="">
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={3}
            initialOpacity={2}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >
            <p className="text-5xl mb-4 font-semibold">
              How Can We Help You Today?
            </p>
          </AnimatedContent>
        </div>

        {/* Support Team Info and FAQs */}
        <div className="flex p-12 justify-center items-center">
          {/* Left Panel: Contact Info */}
          <div className="flex flex-col items-start gap-5 border-r-2 border-blue-300 h-80 pr-10">
            <AnimatedContent
              distance={100}
              direction="Vertical"
              reverse={false}
              duration={2}
              initialOpacity={0}
              animateOpacity={true}
              initialScale={1}
              threshold={0}
              delay={0}
            >
              <p className='text-3xl'>Our Support Team:</p>
              <p className='text-lg mb-2'><b>Email Support:</b> Reach us at <a href="#" className="underline">support@acpload.com</a></p>
              <p className='text-lg mb-4'><b>Phone Support:</b> Call us at 111-111-1111 for urgent matters or troubleshooting.</p>
              <button className='bg-blue-400 text-white py-2 px-6 rounded hover:bg-blue-500 transition'>
                Contact us
              </button>
            </AnimatedContent>
          </div>

          {/* Right Panel: FAQ Cards */}
          <div className="border-l-2 border-blue-300 h-80 flex flex-col justify-center items-center  p-6">
            <AnimatedContent
              distance={100}
              direction="Vertical"
              reverse={false}
              duration={2}
              initialOpacity={0}
              animateOpacity={true}
              initialScale={1}
              threshold={0}
              delay={0}
            >

              <div className="flex items-start gap-4 p-6 rounded-lg">
                <LuMessageCircleQuestion className='text-6xl text-blue-400' />
                <div className="flex flex-col items-start">
                  <p className='font-bold'>FAQs</p>
                  <p>Find quick answers to common questions about accounts, platform features, posting, searching, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg">
                <BsFillQuestionSquareFill className='text-6xl text-blue-400' />
                <div className="flex flex-col items-start">
                  <p className='font-bold'>Guides & Videos</p>
                  <p>Step-by-step instructions and video tutorials for all user roles.

                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg">
                <BsNewspaper className='text-6xl text-blue-400' />
                <div className="flex flex-col items-start">
                  <p className='font-bold'>User Manuals</p>
                  <p>Download comprehensive user guides for Carriers, Brokers, Dispatchers, and Shippers.</p>
                </div>
              </div>

            </AnimatedContent>
          </div>
        </div>
      </div>

      {/* Popular Support Topics */}
      <div className="flex flex-col items-center justify-center text-white text-start p-12 relative">
        <AnimatedContent
          distance={100}
          direction="Vertical"
          reverse={false}
          duration={2}
          initialOpacity={0}
          animateOpacity={true}
          initialScale={1}
          threshold={0}
          delay={0}
        >
          <div className="text-3xl font-semibold mb-12">
            Popular Support Topics
          </div>
          <div className="flex flex-wrap items-start justify-center gap-12">
            {/* Left: Image */}
            <div className="max-w-sm rounded-lg flex-col items-center gap-4">
              <img
                className='rounded-lg border-2 border-blue-400 shadow-sm shadow-white'
                src="/images/think.png"
                alt="support"
              />
            </div>

            {/* Right: Topic List */}
            <div className="max-w-md flex flex-col items-start gap-8">
              {topics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <IoCheckmarkCircle className='text-blue-400 text-3xl' />
                  <p className='text-white text-2xl'>{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

      </div>
      <div class="bg-blue-400/10 flex  justify-center items-start p-16">

        <div className="flex flex-col items-start justify-center mt-12">
          <h1 class="text-4xl font-semibold mb-12">Submit a Request</h1>


          <div class="bg-[#3e5364] p-8 max-w-md mt-12 mr-12">

            <p class="text-base leading-relaxed">
              If you can’t find the answer you need in our FAQs or guides, please fill out our
              <a href="#" class="text-[#cce6ff] underline">Support Request Form</a>
              with details about your issue. Our team strives to respond to all inquiries within one business day.
            </p>
          </div>
        </div>


        <div class="bg-[#4e7394] p-8 w-[400px]">
          <form class="space-y-4">
            <div>
              <label for="name" class="block font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                class="w-full p-2 text-gray-800 bg-white rounded-sm outline-none"
              />
            </div>
            <div>
              <label for="email" class="block font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter a valid email address"
                class="w-full p-2 text-gray-800  bg-white rounded-sm outline-none"
              />
            </div>
            <div>
              <label for="message" class="block font-semibold mb-1">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Enter your message"
                class="w-full p-2 text-gray-800 bg-white rounded-sm outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#5a9bd8] text-white px-4 py-2 mt-2 hover:bg-[#488dc7] transition">
              Submit
            </button>
          </form>
        </div>



      </div>
      <div className=" flex flex-wrap items-center justify-center text-white text-start p-12 relative m-12">
        <div className="">
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={3}
            initialOpacity={2}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >
            <p className="text-5xl mb-12 font-semibold">
              How Can We Help You Today?
            </p>
          </AnimatedContent>
        </div>

        {/* Support Team Info and FAQs */}
        <div className="flex p-12 justify-center items-center mt-12">
          {/* Left Panel: Contact Info */}
          <div className="flex flex-col items-start gap-5  h-80 pr-10">
            <AnimatedContent
              distance={100}
              direction="Vertical"
              reverse={false}
              duration={2}
              initialOpacity={0}
              animateOpacity={true}
              initialScale={1}
              threshold={0}
              delay={0}
            >
              <div className="h-60 flex flex-col justify-center items-start  p-8">


                <div className="flex items-start gap-4 p-6 rounded-lg">
                  <LuMessageCircleQuestion className='text-6xl text-blue-400' />
                  <div className="flex flex-col items-start">
                    <p className='font-bold'>FAQs</p>
                    <p>Find quick answers to common questions about accounts, platform features, posting, searching, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg">
                  <BsFillQuestionSquareFill className='text-6xl text-blue-400' />
                  <div className="flex flex-col items-start">
                    <p className='font-bold'>Guides & Videos</p>
                    <p>Step-by-step instructions and video tutorials for all user roles.

                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg">
                  <BsNewspaper className='text-6xl text-blue-400' />
                  <div className="flex flex-col items-start">
                    <p className='font-bold'>User Manuals</p>
                    <p>Download comprehensive user guides for Carriers, Brokers, Dispatchers, and Shippers.</p>
                  </div>
                </div>


              </div>
            </AnimatedContent>
          </div>

          {/* Right Panel: FAQ Cards */}
          <div className=" h-80 flex flex-col justify-center items-center  p-6">
            <AnimatedContent
              distance={100}
              direction="Vertical"
              reverse={false}
              duration={2}
              initialOpacity={0}
              animateOpacity={true}
              initialScale={1}
              threshold={0}
              delay={0}
            >
              <div className="max-w-md">
                <img src="https://assets.nicepagecdn.com/d2cc3eaa/6493730/images/bankers-working4.jpg" alt="" />
              </div>
            </AnimatedContent>

          </div>
        </div>
      </div>

      <div className="bg-[#0c1e35] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl w-full">
          {/* Заголовок */}
          <h1 className="text-white text-4xl font-bold mb-12 flex items-center">
            <span className="border-l-4 border-blue-500 mr-3 h-10"></span>
            Stay Connected
          </h1>

          {/* Блоки */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Блок 1: Newsletter */}
            <div className="bg-[#2f3f54] p-8 rounded-md relative">
              <div className="absolute -top-6 left-6 bg-[#3b5d7c] p-3 rounded-md">
                <FiMail className="text-white text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg mt-6">Newsletter Subscription:</h2>
              <p className="text-gray-300 mt-2">
                Sign up to receive updates, platform tips, and industry news straight to your inbox.
              </p>
              <button className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
                READ MORE
              </button>
            </div>

            {/* Блок 2: Community */}
            <div className="bg-[#2f3f54] p-8 rounded-md relative">
              <div className="absolute -top-6 left-6 bg-[#3b5d7c] p-3 rounded-md">
                <FiUsers className="text-white text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg mt-6">Community Forums:</h2>
              <p className="text-gray-300 mt-2">
                Join our online community to connect with other users, share advice, and get the most out of ACP Loads.
              </p>
              <button className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
                READ MORE
              </button>
            </div>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            <p className="font-semibold">ACP Loads Support Center — Your Trusted Partner in US Trucking Logistics</p>
            <p className="italic mt-1">We’re here to help. Your questions and feedback drive our commitment to excellence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportCenter
