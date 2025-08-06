import React from 'react'
import { FiMail, FiUsers } from 'react-icons/fi'
import TextType from '../../../../components/ReactBits/TextType'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'

const Section6 = () => {
    return (
        <div className="bg-[#0c1e35] min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full p-6 md:p-12 rounded-lg">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-12 flex items-center">
                    <TextType
                        text={["Stay Connected", "Stay Connected"]}
                        typingSpeed={80}
                        deletingSpeed={40}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />

                    <span className="border-l-4 border-blue-500 mr-3 h-10"></span>

                </h1>

                <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
                    {/* Newsletter */}
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
                        <div className="bg-[#2f3f54] p-6 md:p-8 rounded-md relative flex-1">
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
                    </AnimatedContent>

                    {/* Community */}
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
                        <div className="bg-[#2f3f54] p-6 md:p-8 rounded-md relative flex-1">
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
                    </AnimatedContent>
                </div>
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
                    <div className="mt-12 text-gray-400 text-sm text-center md:text-left">
                        <p className="font-semibold">ACP Loads Support Center — Your Trusted Partner in US Trucking Logistics</p>
                        <p className="italic mt-1">We’re here to help. Your questions and feedback drive our commitment to excellence.</p>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Section6