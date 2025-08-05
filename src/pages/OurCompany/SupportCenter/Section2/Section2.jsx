import React from 'react'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'
import { LuMessageCircleQuestion } from 'react-icons/lu'
import { BsFillQuestionSquareFill, BsNewspaper } from 'react-icons/bs'

const Section2 = () => {
    return (
        <div className="bg-blue-400/10 flex flex-col items-center justify-center text-white px-4 py-12">
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
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12">
                    How Can We Help You Today?
                </p>
            </AnimatedContent>

            <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
                {/* Left Panel */}
                <div className="flex flex-col items-start gap-5 border-b-2 md:border-b-0 md:border-r-2 border-blue-300 md:h-80 md:pr-10 w-full md:w-1/2">
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
                        <p className="text-2xl md:text-3xl">Our Support Team:</p>
                        <p className="text-base sm:text-lg">
                            <b>Email Support:</b> Reach us at <a href="#" className="underline">support@acpload.com</a>
                        </p>
                        <p className="text-base sm:text-lg">
                            <b>Phone Support:</b> Call us at 111-111-1111 for urgent matters or troubleshooting.
                        </p>
                        <button className="bg-blue-400 text-white py-2 px-6 rounded hover:bg-blue-500 transition mt-4">
                            Contact us
                        </button>
                    </AnimatedContent>
                </div>
                {/* Right Panel */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
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
                        {[{
                            icon: <LuMessageCircleQuestion className="text-5xl sm:text-6xl text-blue-400" />,
                            title: "FAQs",
                            text: "Find quick answers to common questions about accounts, platform features, posting, searching, and more."
                        }, {
                            icon: <BsFillQuestionSquareFill className="text-5xl sm:text-6xl text-blue-400" />,
                            title: "Guides & Videos",
                            text: "Step-by-step instructions and video tutorials for all user roles."
                        }, {
                            icon: <BsNewspaper className="text-5xl sm:text-6xl text-blue-400" />,
                            title: "User Manuals",
                            text: "Download comprehensive user guides for Carriers, Brokers, Dispatchers, and Shippers."
                        }].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg">
                                {item.icon}
                                <div>
                                    <p className="font-bold">{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </AnimatedContent>
                </div>
            </div>
        </div>
    )
}

export default Section2