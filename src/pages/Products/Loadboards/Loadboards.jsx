import { useState } from 'react';
import { Search, Truck, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion imports

export default function FreightLoadboard() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [freightType, setFreightType] = useState('');
  const [showResults, setShowResults] = useState(false);

  const freightTypes = [
    'Dry Van',
    'Refrigerated',
    'Flatbed',
    'Step Deck',
    'Lowboy',
    'Tanker',
    'Container',
    'Auto Carrier'
  ];

  // Mock data matching the table structure
  const mockResults = Array(12).fill().map((_, index) => ({
    id: index + 1,
    age: '00:35',
    puDate: '02/18',
    type: 'V',
    origin: 'Conyers, GA',
    distance: '1403',
    destination: 'Colorado Springs, CO',
    length: '53 ft',
    weight: '12,000 lbs',
    price: '$2,400.00',
    contact: 'Sign in'
  }));

  const handleSearch = () => {
    setShowResults(true);
  };

  // Framer Motion animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const tableRow = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 }
    })
  };

  const bounce = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 0, -10],
      transition: { duration: 2, ease: 'easeInOut', repeat: Infinity }
    }
  };
//asdadsadsadas
  return (
    <div className="min-h-screen bg-gray-600">
      {/* Hero Section */}
      <motion.div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2070&q=80')`
        }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-base-100 bg-opacity-70"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Main Heading */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Live Loadboard
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Real-Time Freight Opportunities
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-4xl mb-12 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Unlock up-to-the-minute freight load details at your fingertips. Our Live 
            Loadboard is dedicated exclusively to load searching, empowering carriers and 
            owner-operators to quickly identify the ideal freight opportunities as soon as 
            they become available.
          </motion.p>

          {/* Search Form */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 w-full max-w-4xl"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col md:flex-row gap-4 items-end">
              {/* Origin Input */}
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  Origin
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Enter origin city"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Destination Input */}
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination city"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Types Dropdown */}
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  Types
                </label>
                <div className="relative">
                  <Truck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={freightType}
                    onChange={(e) => setFreightType(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 bg-gray-700 bg-opacity-80 text-white rounded-md border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer transition-all duration-300"
                  >
                    <option value="">All Types</option>
                    {freightTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleSearch}
                  className="bg-primary hover:bg-primary-focus text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 min-w-[120px] justify-center shadow-lg"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Live Opportunities Table Section */}
      <div className="bg-gray-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex items-center justify-between mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <h3 className="text-3xl font-bold    ">Explore Live Opportunities</h3>. 
            <motion.button
              className="flex items-center gap-2 bg-primary hover:bg-primary-focus text-white px-4 py-2 rounded-md transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </motion.button>
          </motion.div>
          
          {/* Table */}
          <motion.div
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-500"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {/* Table Header */}
            <div className="bg-primary px-6 py-4 rounded-t-lg">
              <div className="grid grid-cols-10 gap-4 text-white font-semibold text-sm">
                <div>Age</div>
                <div>PU Date</div>
                <div>Type</div>
                <div>Origin</div>
                <div>Distance</div>
                <div>Destination</div>
                <div>Length</div>
                <div>Weight</div>
                <div>Price</div>
                <div>Contact</div>
              </div>
            </div>

            {/* Table Body */}
            <AnimatePresence>
              {mockResults.map((load, index) => (
                <motion.div
                  key={load.id}
                  className="px-6 py-4 hover:bg-gray-600 transition-all duration-300 bg-gray-700 border border-gray-500 rounded-lg mx-2 my-2"
                  variants={tableRow}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <div className="grid grid-cols-10 gap-4 text-sm">
                    <div className="text-gray-300 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {load.age}
                    </div>
                    <div className="text-gray-300">{load.puDate}</div>
                    <div className="text-white font-semibold">{load.type}</div>
                    <div className="text-white">{load.origin}</div>
                    <div className="text-gray-300">{load.distance}</div>
                    <div className="text-white">{load.destination}</div>
                    <div className="text-gray-300">{load.length}</div>
                    <div className="text-gray-300">{load.weight}</div>
                    <div className="text-success font-bold">{load.price}</div>
                    <div>
                      <motion.button
                        className="text-primary hover:text-primary-focus underline text-sm transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {load.contact}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <motion.div
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2070&q=80')`
        }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-left"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Key Benefits
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: 'Up-to-the-Minute Information',
                description: 'Get real-time updates that keep you informed of the latest freight opportunities.'
              },
              {
                title: 'Enhanced Efficiency',
                description: 'Advanced filtering and instant notifications minimize downtime, reducing empty miles and increasing profitability.'
              },
              {
                title: 'Informed Decision-Making',
                description: 'Leverage live analytics to understand market trends and adjust your operations accordingly.'
              },
              {
                title: 'Seamless Connectivity',
                description: 'Direct communication tools help you negotiate and confirm loads quickly, fostering trust and timely transactions.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-primary bg-opacity-90 rounded-2xl p-8"
                variants={scaleUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">{benefit.title}</h3>
                <p className="text-white text-lg leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Get Started Today Section */}
      <div className="bg-gray-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Get Started Today
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Join our growing network of industry professionals and gain immediate access 
            to our Live Loadboard. Whether you're looking to post loads or find the perfect 
            freight match, our live platform is designed to streamline your operations and 
            drive success.
          </motion.p>

          <motion.button
            className="bg-primary hover:bg-primary-focus text-white px-12 py-4 rounded-lg font-bold text-xl shadow-xl"
            variants={bounce}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP NOW
          </motion.button>

          <motion.p
            className="text-white font-semibold text-lg mt-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            to start harnessing the power of real-time freight management!
          </motion.p>
        </div>
      </div>
    </div>
  );
}