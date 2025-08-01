import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Section5 = () => {
  const messages = [
    {
      id: 1,
      quote:
        "ACP Loads is more than a platform—it's a partnership with the hard-working men and women who keep America moving. Our mission is to make your day simpler, your business more profitable, and your experience more rewarding. We invite you to join us, share your ideas, and help us build the future of logistics together.",
      author: "NICK CHARLES",
      title: "Founder & CEO",
    },
    {
      id: 2,
      quote:
        "Innovation drives everything we do. We're not just building software; we're crafting solutions that understand the real challenges of the trucking industry. Every feature we develop comes from listening to our community and understanding what truly matters to drivers and fleet owners.",
      author: "JACK ADAMS",
      title: "Chief Technology Officer",
    },
    {
      id: 3,
      quote:
        "Our customers are at the heart of every decision we make. We believe that exceptional service isn't just about solving problems—it's about anticipating needs, exceeding expectations, and building relationships that last. Your success is our success.",
      author: "EMILY DAVIS",
      title: "Head of Customer Success",
    },
    {
      id: 4,
      quote:
        "Operational excellence isn't just a goal—it's our commitment to you. We focus on reliability, efficiency, and continuous improvement because we understand that your business depends on systems that work flawlessly, every single time.",
      author: "JAMES SMITH",
      title: "Chief Operating Officer",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Message from Our Leadership
        </motion.h2>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg"></div>

          <div className="relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-600/50">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="leadership-swiper"
            >
              {messages.map((message) => (
                <SwiperSlide key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
                      "{message.quote}"
                    </blockquote>
                    <div className="space-y-2">
                      <h4 className="text-xl md:text-2xl font-bold text-white tracking-wider">{message.author}</h4>
                      <p className="text-blue-300 text-sm md:text-base font-medium">{message.title}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg"></div>
    </div>
  )
}

export default Section5
