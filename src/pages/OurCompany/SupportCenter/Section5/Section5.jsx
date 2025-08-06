import React from 'react'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'
import { BsFillQuestionSquareFill, BsNewspaper } from 'react-icons/bs'
import { LuMessageCircleQuestion } from 'react-icons/lu'

const Section5 = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-start gap-4 p-4 md:m-12">
            <div className="w-full max-w-6xl">
                <div className="flex flex-col justify-center items-center gap-5">
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
                        <p className="text-3xl sm:text-4xl md:text-5xl mb-12 font-semibold text-center">
                            How Can We Help You Today?
                        </p>
                        
                    </AnimatedContent>
                </div>

                <div className="flex flex-col lg:flex-row p-4 md:p-12 justify-center items-center gap-8 mt-6 md:mt-12">
                    {/* Left Panel */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
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
                            <div className="flex flex-col justify-center items-start">
                                <div className="flex items-start gap-4 p-6 rounded-lg">
                                    <LuMessageCircleQuestion className="text-5xl sm:text-6xl text-blue-400" />
                                    <div>
                                        <p className="font-bold">FAQs</p>
                                        <p>Find quick answers to common questions about accounts, platform features, posting, searching, and more.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 rounded-lg">
                                    <BsFillQuestionSquareFill className="text-5xl sm:text-6xl text-blue-400" />
                                    <div>
                                        <p className="font-bold">Guides & Videos</p>
                                        <p>Step-by-step instructions and video tutorials for all user roles.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 rounded-lg">
                                    <BsNewspaper className="text-5xl sm:text-6xl text-blue-400" />
                                    <div>
                                        <p className="font-bold">User Manuals</p>
                                        <p>Download comprehensive user guides for Carriers, Brokers, Dispatchers, and Shippers.</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                    {/* Right Panel: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
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
                            <div className="w-full max-w-md">
                                <img src="https://assets.nicepagecdn.com/d2cc3eaa/6493730/images/bankers-working4.jpg" alt="" className="rounded" />
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5