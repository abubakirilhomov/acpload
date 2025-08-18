import { useTranslation } from "react-i18next";
import img from "../../../../assets/about1.png"

export default function AboutUs() {
    const { t } = useTranslation();
  return (
    <section className="bg-slate-800 md:pt-16  px-6 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative hidden md:block">
              <img
                src={img}
                alt="Professional businessman in gray blazer"
                width={400}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <p className="text-blue-400 text-lg font-medium tracking-wide">{t("about-us.about-us")}</p>

              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                {t("about-us.title")}
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {t("about-us.description")}
            </p>

            <div className="pt-4 md:pb-0 pb-5">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold tracking-wide"
                size="lg"
              >
                {t("btn-input-texts.contact-us")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
