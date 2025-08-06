import { CheckCircle } from "lucide-react"

const Section4 = () => {
  const reviewSteps = [
    {
      title: "Submit Your Experience",
      description:
        "After every transaction, users are invited to leave a review for their counterpart—helping everyone choose trusted partners.",
    },
    {
      title: "Criteria-Based Ratings",
      description:
        "Rate your experience on service, communication, honesty, payment speed, and load/truck information accuracy.",
    },
    {
      title: "Public & Private Feedback",
      description: "Share comments with the community or send private feedback to our support team for further review.",
    },
    {
      title: "Dispute Resolution",
      description:
        "If you encounter issues with a review or a partner, our support center is ready to help resolve disputes fairly and efficiently.",
    },
  ]

  return (
    <section className="bg-slate-700 py-16 px-4 my-10 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-300">How Our Review System Works</h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviewSteps.map((step, index) => (
            <div key={index} className="bg-slate-600 rounded-2xl p-8 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
