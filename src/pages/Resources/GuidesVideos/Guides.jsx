import React from "react";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import Button from "../../../components/Button/Button"; // Assuming you have a Button component

const Guides = () => {
  return (
    <div>
      {/* First Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[url('/images/guides-videos-showcase.png')] bg-cover bg-center flex items-center justify-start">
        <SectionContainer>
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <div className="relative z-10 text-start py-12 max-w-3xl">
            <CustomText type="title" className="font-bold mb-6 text-white">
              LEARN HOW TO GET MOST FROM ACP LOADS
            </CustomText>
            <CustomText type="text" className="mb-8 text-white">
              Whether you're new to freight logistics or a seasoned industry
              pro, this page is your go-to source for practical tutorials,
              walkthroughs, and step-by-step guides. Discover how to get the
              most out of ACP Loads, based on your role in the trucking
              ecosystem.
            </CustomText>
            <button className="btn btn-info text-white rounded-full">
              IT'S FREE, CLICK NOW
            </button>
          </div>
        </SectionContainer>
      </div>

      {/* Second Section */}
      <SectionContainer>
        <div className="text-center space-y-5 max-w-3xl mx-auto px-4">
          <CustomText type="subtitle">Choose Your Role to Begin</CustomText>
          <CustomText type="text">
            ACP Loads is built for the entire freight lifecycle. Select the role
            that fits you to explore personalized guides and instructional
            videos:
          </CustomText>
        </div>
      </SectionContainer>

      {/* Third Section - Carrier */}

      {/* Fourth Section - Carrier Dispatcher */}
      <div className="bg-gray-800">
        <SectionContainer className="text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                Carrier Dispatcher
              </CustomText>
              <CustomText type="text" className="mb-6">
                Role Overview: Find and book loads posted by brokers with ease.
                You don't need an MC number to join as a dispatcher.
              </CustomText>
              <CustomText type="text" className="mb-6">
                What You'll Learn:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>How to sign up as a dispatcher (no MC required)</li>
                  <li>Searching loads posted by brokers</li>
                  <li>Filtering by route, equipment type, or region</li>
                  <li>Contacting brokers and booking loads</li>
                  <li>Managing your dispatcher dashboard</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video w-full">
                <iframe
                  className="rounded w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <div className="bg-gray-900">
        <SectionContainer>
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video w-full">
                <iframe
                  className="rounded w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-gray-700 p-10 rounded-tr-4xl rounded-l-4xl">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                Carrier
              </CustomText>
              <CustomText type="text" className="mb-6">
                Role Overview: Access broker loads and post your empty trucks to
                receive more opportunities.
              </CustomText>
              <CustomText type="text" className="mb-6">
                What You'll Learn:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Creating a carrier profile</li>
                  <li>Finding and booking loads from brokers</li>
                  <li>
                    Posting empty trucks (visibility for brokers & shippers)
                  </li>
                  <li>Managing offers and load matches</li>
                  <li>How ratings and reviews work for carriers</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>

      <div className="bg-gray-800">
        <SectionContainer className="text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                Broker
              </CustomText>
              <CustomText type="text" className="mb-6">
                Role Overview: Post freight loads for carriers and dispatchers,
                search for trucks, and monitor shipper activity.
              </CustomText>
              <CustomText type="text" className="mb-6">
                What You'll Learn:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>How to post a load quickly</li>
                  <li>Searching empty trucks posted by carriers</li>
                  <li>Connecting with carrier dis​patchers</li>
                  <li>Tracking and reviewing shipment activity</li>
                  <li>Collaborating with shippers on posted freight</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video w-full">
                <iframe
                  className="rounded w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className="text-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 pt-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-video w-full">
              <iframe
                className="rounded w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-700 p-10 rounded-br-4xl rounded-l-4xl">
            <CustomText type="title" className="text-3xl font-bold mb-4">
              Shipper
            </CustomText>
            <CustomText type="text" className="mb-6">
              Role Overview: Post shipments that brokers can access and move
              faster across the U.S.
            </CustomText>
            <CustomText type="text" className="mb-6">
              What You'll Learn:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Registering as a shipper</li>
                <li>How to post a shipment</li>
                <li>Viewing broker interest in your loads</li>
                <li>Working with multiple brokers for capacity</li>
                <li>Tracking your shipment status</li>
              </ul>
            </CustomText>
            <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Video Section */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="border-2 border-info p-10 flex items-center justify-center mx-4">
          <div className="max-w-3xl text-center">
            <CustomText type="subtitle" className={'mb-5'}>Need Help?</CustomText>
            <CustomText>
              If you're unsure where to start or have technical questions, visit
              our Support Center or contact our team at info @acploads.com
            </CustomText>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Guides;
