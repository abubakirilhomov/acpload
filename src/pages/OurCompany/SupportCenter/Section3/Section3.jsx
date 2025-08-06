import React from 'react'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Section3 = ({ topics }) => {
    return (
        <div className=" flex flex-col items-center justify-center text-white text-start p-4 md:p-12 ">
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
                <p className="text-4xl font-medium mb-12 text-center">
                    Popular Support Topics
                </p>
                <div className="flex flex-col lg:flex-row items-start justify-center  md:gap-12 w-full">
                    {/* Left: Image */}
                    
                        <img
                            className="w-1/2 border-2 border-blue-400 shadow-sm shadow-white  mx-auto sm:max-w-sm md:max-w-md"
                            src="/images/think.png"
                            alt="support"
                        />


                    {/* Right: Topic List */}
                    <div className=" lg:w-[90%] max-w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-8 m-auto">
                        {topics.map((topic, idx) => (
                            <div key={idx} className=" flex items-start justify-center gap-2 sm:gap-4">
                                <IoCheckmarkCircle className="text-blue-400  " size={35} />
                                <p className="text-sm sm:text-xl md:text-2xl">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Section3