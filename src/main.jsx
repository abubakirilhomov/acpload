import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home.jsx";

// Platform
import HowItWorks from "./pages/Platform/HowItWorks/HowItWorks.jsx";
import Features from "./pages/Platform/Features/Features.jsx";
import TruckerCalculator from "./pages/Platform/TruckerCalculator/TruckerCalculator.jsx";
import FreightRateCalculator from "./pages/Platform/FreightRateCalculator/FreightRateCalculator.jsx";
import TermsOfService from "./pages/Platform/TermsOfService/TermsOfService.jsx";

// Products
import Loadboard from "./pages/Products/Loadboards/Loadboards.jsx";
import ACPTMS from "./pages/Products/ACPTMS/ACPTMS.jsx";

// Solutions
import CarrierDispatcher from "./pages/Solutions/CarrierDispatcher/CarrierDispatcher.jsx";
import Broker from "./pages/Solutions/Broker/Broker.jsx";
import Carrier from "./pages/Solutions/Carrier/Carrier.jsx";
import Shipper from "./pages/Solutions/Shipper/Shipper.jsx";

// Resources
import Blog from "./pages/Resources/Blog/Blog.jsx";
import PartnershipAffiliate from "./pages/Resources/PartnershipAffiliate/PartnershipAffiliate.jsx";
import NewsletterSubscription from "./pages/Resources/NewsletterSubscription/NewsletterSubscription.jsx";
import Guides from "./pages/Resources/GuidesVideos/Guides.jsx";
import Videos from "./pages/Resources/Videos/Videos.jsx";
import FAQs from "./pages/Resources/FAQs/FAQs.jsx";

// Our Company
import AboutUs from "./pages/OurCompany/AboutUs/AboutUs.jsx";
import Leadership from "./pages/OurCompany/Leadership/Leadership.jsx";
import Testimonials from "./pages/OurCompany/Testimonials/Testimonials.jsx";
import SupportCenter from "./pages/OurCompany/SupportCenter/SupportCenter.jsx";
import ContactUs from "./pages/OurCompany/ContactUs/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      // Platform
      { path: "/platform/how-it-works", element: <HowItWorks /> },
      { path: "/platform/features", element: <Features /> },
      { path: "/platform/trucker-calculator", element: <TruckerCalculator /> },
      {
        path: "/platform/freight-rate-calculator",
        element: <FreightRateCalculator />,
      },
      { path: "/platform/terms-of-service", element: <TermsOfService /> },

      // Products
      { path: "/products/loadboard", element: <Loadboard /> },
      { path: "/products/acp-tms", element: <ACPTMS /> },

      // Solutions
      { path: "/solutions/carrier", element: <Carrier /> },
      { path: "/solutions/carrier-dispatcher", element: <CarrierDispatcher /> },
      { path: "/solutions/broker", element: <Broker /> },
      { path: "/solutions/shipper", element: <Shipper /> },

      // Resources
      { path: "/resources/freight-logistics-blog", element: <Blog /> },
      {
        path: "/resources/partnership-affiliate",
        element: <PartnershipAffiliate />,
      },
      {
        path: "/resources/newsletter-subscription",
        element: <NewsletterSubscription />,
      },
      { path: "/resources/guides", element: <Guides /> },
      { path: "/resources/videos", element: <Videos /> },
      { path: "/resources/faqs", element: <FAQs /> },

      // Our Company
      { path: "/our-company/about-us", element: <AboutUs /> },
      { path: "/our-company/leadership", element: <Leadership /> },
      { path: "/our-company/testimonials-reviews", element: <Testimonials /> },
      { path: "/our-company/support-center", element: <SupportCenter /> },
      { path: "/our-company/contact-us", element: <ContactUs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
