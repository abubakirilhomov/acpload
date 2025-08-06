import React from 'react'   
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'
import { LuMessageCircleQuestion } from 'react-icons/lu'
import { BsFillQuestionSquareFill, BsNewspaper } from 'react-icons/bs'

const Section2 = () => {
    return (
        <div className="bg-blue-300/10 flex flex-col items-center justify-center text-white px-4 py-14 min-h-screen ">
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

            <div className="flex flex-col justify-center items-start md:flex-row  w-full max-w-5xl gap-10">
                {/* Left Panel */}
                <div className=" flex flex-col items-start justify-center border-b-2 md:border-b-0 md:border-r-2 border-blue-300 md:h-80 md:pr-10 w-full md:w-1/2 gap-8">
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
                        <div className="flex flex-col justify-center items-start gap-4 w-sm ml-8">
                            <p className="text-2xl md:text-3xl font-medium">Our Support Team:</p>
                            <p className="text-sm  sm:text-lg">
                                <span className='font-bold'>Email Support:</span> Reach us at <span className="underline">support@acpload.com</span> for detailed inquiries or documentation requests.
                            </p>
                            <p className="text-base sm:text-lg ">
                                <span className='font-bold'>Phone Support:</span> Call us at 111-111-1111 for urgent matters or troubleshooting.
                            </p>
                            <button className="bg-blue-400 text-white py-2 w-40  hover:bg-blue-500 transition mt-4">
                                Contact us
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
                {/* Right Panel */}
                <div className="flex flex-col  w-full md:w-1/2">
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
                            icon: <BsFillQuestionSquareFill size={40} className=" sm:text-6xl text-blue-400" />,
                            title: "Guides & Videos",
                            text: "Step-by-step instructions and video tutorials for all user roles."
                        }, {
                            icon: <BsNewspaper className="text-5xl sm:text-6xl text-blue-400" />,
                            title: "User Manuals",
                            text: "Download comprehensive user guides for Carriers, Brokers, Dispatchers, and Shippers."
                        }].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 p-4 rounded-lg  ">

                                {item.icon}

                                <div>
                                    <p className="font-bold ">{item.title}</p>
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
