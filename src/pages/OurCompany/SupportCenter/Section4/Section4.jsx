import React from 'react'
import TextType from '../../../../components/ReactBits/TextType'

const Section4 = () => {
    return (
        <div className="bg-blue-400/10 flex items-center justify-center text-white px-4 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">

                {/* Left Block */}
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                    <div className="w-sm mx-auto">
                        <div className="text-4xl text-blue-500 font-semibold">
                            <TextType
                                text={["Submit a Request", "Submit a Request"]}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </div>
                        <p className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12"></p>
                        <div className="bg-[#3e5364] p-6 md:p-8 w-sm rounded">
                            <p className="text-base leading-relaxed">
                                If you can’t find the answer you need in our FAQs or guides, please fill out our{' '}
                                <a href="#" className="text-[#cce6ff] underline">Support Request Form</a>{' '}
                                with details about your issue. Our team strives to respond to all inquiries within one business day.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Block (Form) */}
                <div className="bg-[#4e7394] p-6 md:p-8 w-full lg:w-[400px] rounded">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your Name"
                                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter a valid email address"
                                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Enter your message"
                                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#5a9bd8] text-white px-4 py-2 mt-2 hover:bg-[#488dc7] transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section4
