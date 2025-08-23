import { useState } from 'react';
import { Search, Truck, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FreightLoadboard() {
  const { t } = useTranslation();
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

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.div
        className="relative min-h-[60vh] sm:min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('loadboard.title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              {t('loadboard.sub-title')}
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mb-8 sm:mb-12 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {t('loadboard.description')}
          </motion.p>

          <motion.div
            className="b bg-opacity-60 border-1 rounded-lg p-4 sm:p-6 w-full max-w-4xl"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-end">
              <div className="flex-1 w-full">
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
                    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-900 bg-opacity-80 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
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
                    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-900 bg-opacity-80 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-white text-sm font-medium mb-2">
                  Types
                </label>
                <div className="relative">
                  <Truck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={freightType}
                    onChange={(e) => setFreightType(e.target.value)}
                    className="w-full pl-10 pr-8 py-2 sm:py-3 bg-gray-900 bg-opacity-80 text-white rounded-md border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none cursor-pointer transition-all duration-300"
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

              <motion.div
                className="flex-shrink-0 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleSearch}
                  className="bg-[#3f96d1] hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Results Section */}
      <div className="bg-gray-900 py-8 sm:py-12">
        <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between mb-6 sm:mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Explore Live Opportunities</h3>
            <motion.button
              className="flex items-center gap-2 bg-[#3f96d1] hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </motion.button>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-lg overflow-x-auto border border-gray-500"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="hidden sm:block bg-[#3f96d1] px-4 sm:px-6 py-4 rounded-t-lg">
              <div className="grid grid-cols-10 gap-2 sm:gap-4 text-white font-semibold text-xs sm:text-sm">
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

            <AnimatePresence>
              {mockResults.map((load, index) => (
                <motion.div
                  key={load.id}
                  className="px-4 sm:px-6 py-4 hover:bg-gray-800 transition-all duration-300 bg-gray-900 sm:border-none border-b border-gray-700 rounded-lg mx-2 my-2"
                  variants={tableRow}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-10 gap-4 text-sm sm:text-base">
                    <div className="sm:flex sm:items-center sm:gap-1 flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Age:</span>
                      <div className="flex items-center gap-1 text-gray-300">
                        <Clock className="h-3 w-3" />
                        {load.age}
                      </div>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">PU Date:</span>
                      <span className="text-gray-300">{load.puDate}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Type:</span>
                      <span className="text-white font-semibold">{load.type}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Origin:</span>
                      <span className="text-white">{load.origin}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Distance:</span>
                      <span className="text-gray-300">{load.distance}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Destination:</span>
                      <span className="text-white">{load.destination}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Length:</span>
                      <span className="text-gray-300">{load.length}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Weight:</span>
                      <span className="text-gray-300">{load.weight}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Price:</span>
                      <span className="text-green-500 font-bold">{load.price}</span>
                    </div>
                    <div className="sm:flex sm:items-center flex justify-between">
                      <span className="sm:hidden font-semibold text-white">Contact:</span>
                      <motion.button
                        className="text-[#3f96d1] hover:text-blue-700 underline text-sm transition-colors duration-300"
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
        className="relative py-12 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-10 max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-left"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('loadboard.key-benefits.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
            {[
              {
                key: 'card-1',
                title: t('loadboard.key-benefits.card-1.title'),
                description: t('loadboard.key-benefits.card-1.description')
              },
              {
                key: 'card-2',
                title: t('loadboard.key-benefits.card-2.title'),
                description: t('loadboard.key-benefits.card-2.description')
              },
              {
                key: 'card-3',
                title: t('loadboard.key-benefits.card-3.title'),
                description: t('loadboard.key-benefits.card-3.description')
              },
              {
                key: 'card-4',
                title: t('loadboard.key-benefits.card-4.title'),
                description: t('loadboard.key-benefits.card-4.description')
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.key}
                className="bg-[#3f96d1] bg-opacity-90 rounded-2xl p-6 sm:p-8"
                variants={scaleUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{benefit.title}</h3>
                <p className="text-white text-base sm:text-lg leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-12 sm:py-20">
        <div className="max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('loadboard.get-started.title')}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {t('loadboard.get-started.description')}
          </motion.p>

          <motion.button
            className="bg-[#3f96d1] hover:bg-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl shadow-xl"
            variants={bounce}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP NOW
          </motion.button>

          <motion.p
            className="text-white font-semibold text-base sm:text-lg mt-4 sm:mt-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {t('loadboard.get-started.sub-text')}
          </motion.p>
        </div>
      </div>
    </div>
  );
}