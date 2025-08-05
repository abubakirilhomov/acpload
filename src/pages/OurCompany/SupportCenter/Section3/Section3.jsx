import React from 'react'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Section3 = ({ topics }) => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-start p-4 md:p-12">
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
                <div className="text-3xl font-semibold mb-12 text-center">
                    Popular Support Topics
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-12 w-full">
                    {/* Left: Image */}
                    <div className="w-full lg:w-[40%] flex justify-center">
                        <img
                            className="rounded-lg border-2 border-blue-400 shadow-sm shadow-white max-w-xs sm:max-w-sm md:max-w-md"
                            src="/images/think.png"
                            alt="support"
                        />
                    </div>

                    {/* Right: Topic List */}
                    <div className="w-full lg:w-[60%] flex flex-col items-start gap-6 sm:gap-8">
                        {topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-3 sm:gap-4">
                                <IoCheckmarkCircle className="text-blue-400 text-2xl sm:text-3xl" />
                                <p className="text-lg sm:text-xl md:text-2xl">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Section3