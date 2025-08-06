import React from 'react'
import AnimatedContent from '../../../../components/ReactBits/AnimatedContent'

const Section1 = () => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center text-white relative px-4"
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
                <div className="relative z-10 w-full max-w-2xl space-y-6 bg-white/40 rounded-xl p-6 sm:p-8 md:ml-[-8rem]">
                    <p className="text-xl font-bold">Support Center</p>
                    <p className="text-3xl sm:text-4xl font-bold mb-4">Welcome to the ACP Loads Support Center</p>
                    <p>
                        At ACP Loads, your satisfaction and success are our highest priorities. Whether you’re a Carrier, Broker,
                        Dispatcher, or Shipper, our dedicated Support Center is here to provide you with fast, effective assistance—
                        so you can keep your logistics operations running smoothly.
                    </p>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Section1