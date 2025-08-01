import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Truck,
  Route,
  Clock,
  Plus,
  Minus,
} from "lucide-react";

const CalculatorSection = () => {
  const [miles, setMiles] = useState(500);
  const [ratePerMile, setRatePerMile] = useState(2.5);
  const [additionalPay, setAdditionalPay] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const calculateGrossEarnings = () => {
    const baseEarnings = miles * ratePerMile;
    const totalEarnings = baseEarnings + additionalPay;
    return {
      baseEarnings: baseEarnings.toFixed(2),
      totalEarnings: totalEarnings.toFixed(2),
      estimatedTime: (miles / 55).toFixed(1), // Assuming average speed of 55 mph
    };
  };

  const results = calculateGrossEarnings();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="container mx-auto py-12 px-4 bg-base-100">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
            Trucker <span className="text-primary">Calculator</span>
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Estimate your gross earnings and plan your routes more effectively with our specialized calculator for
            truckers.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          className="card bg-base-100/70 backdrop-blur-md shadow-xl border border-base-200/50 rounded-2xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Input Section */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-base-200/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Input Your Details
              </h2>
              <div className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center">
                      <Route className="h-4 w-4 mr-2 text-primary" />
                      Trip Distance (miles)
                    </span>
                  </label>
                  <div className="join w-full">
                    <button
                      className="join-item btn btn-outline"
                      onClick={() => setMiles(Math.max(0, miles - 50))}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      value={miles}
                      onChange={(e) => setMiles(Number(e.target.value))}
                      className="join-item input input-bordered w-full text-center"
                      min="0"
                    />
                    <button
                      className="join-item btn btn-outline"
                      onClick={() => setMiles(miles + 50)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Rate Per Mile ($)
                    </span>
                  </label>
                  <div className="join w-full">
                    <button
                      className="join-item btn btn-outline"
                      onClick={() =>
                        setRatePerMile(Math.max(0.1, Number.parseFloat((ratePerMile - 0.1).toFixed(2))))
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      step="0.01"
                      value={ratePerMile}
                      onChange={(e) => setRatePerMile(Number(e.target.value))}
                      className="join-item input input-bordered w-full text-center"
                      min="0.1"
                    />
                    <button
                      className="join-item btn btn-outline"
                      onClick={() => setRatePerMile(Number.parseFloat((ratePerMile + 0.1).toFixed(2)))}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center">
                      <Plus className="h-4 w-4 mr-2 text-primary" />
                      Additional Pay (detention, layover, etc.)
                    </span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center rounded-l-md border border-r-0 border-base-300">
                      $
                    </span>
                    <input
                      type="number"
                      value={additionalPay}
                      onChange={(e) => setAdditionalPay(Number(e.target.value))}
                      className="input input-bordered w-full"
                      min="0"
                    />
                  </div>
                </div>

                <motion.button
                  className="btn btn-primary w-full text-base-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowResults(true)}
                >
                  Calculate Earnings
                </motion.button>
              </div>
            </div>

            {/* Results Section */}
            <motion.div
              className="p-6 md:p-8 bg-gradient-to-br from-base-100/40 to-base-200/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-primary" />
                Estimated Earnings
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100/50 backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <DollarSign className="h-8 w-8" />
                    </div>
                    <div className="stat-title">Base Earnings</div>
                    <div className="stat-value text-primary">${results.baseEarnings}</div>
                    <div className="stat-desc">${ratePerMile} × {miles} miles</div>
                  </div>
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <div className="stat-title">Total Earnings</div>
                    <div className="stat-value">${results.totalEarnings}</div>
                    <div className="stat-desc">Including additional pay</div>
                  </div>
                </motion.div>

                <div className="divider">Trip Details</div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-base-100/50 p-4 rounded-box flex items-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mr-3 bg-primary/10 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm opacity-70">Est. Drive Time</div>
                      <div className="font-bold">{results.estimatedTime} hours</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-base-100/50 p-4 rounded-box flex items-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mr-3 bg-primary/10 p-2 rounded-full">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm opacity-70">Earnings Per Hour</div>
                      <div className="font-bold">${(results.totalEarnings / results.estimatedTime).toFixed(2)}</div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="btn btn-outline btn-primary w-full">Find Available Loads</button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CalculatorSection;