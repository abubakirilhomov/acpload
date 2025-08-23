import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TwoColumnView from "./TwoColumnView";

const Section1 = () => {
  const { t } = useTranslation();
  const [stops, setStops] = useState([""]);
  const [showResult, setShowResult] = useState(false);
  const [formValues, setFormValues] = useState({
    origin: "",
    destination: "",
    weight: "",
    length: "",
    type: "FTL",
    fuel: "",
    toll: "",
    fees: "",
    baseRate: "",
    totalMiles: ""
  });
  const [calculation, setCalculation] = useState(null);
  const resultRef = useRef(null);

  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const miles = Number(formValues.totalMiles) || 0;
    const baseRate = Number(formValues.baseRate) || 0;
    const fuel = Number(formValues.fuel) || 0;
    const toll = Number(formValues.toll) || 0;
    const fees = Number(formValues.fees) || 0;

    const totalRate = baseRate * miles + fuel + toll + fees;
    const rpm = miles > 0 ? totalRate / miles : 0;

    setCalculation({ totalRate, rpm, miles });
    setShowResult(true);
  };

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResult]);

  return (
    <div className="flex flex-col items-center mt-10 mx-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl border p-10 rounded-3xl"
      >
        <TwoColumnView>
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            {["origin", "destination"].map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-1 font-medium">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  id={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formValues[field]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            ))}
            <div className="flex flex-col max-h-48 overflow-y-auto">
              {stops.map((stop, i) => (
                <div key={i} className="flex flex-col mb-4">
                  <label htmlFor={`stop-${i}`} className="mb-1 font-medium">
                    Stop {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`stop-${i}`}
                    placeholder={`Stop ${i + 1}`}
                    className="input input-bordered w-full"
                    value={stop}
                    onChange={(e) =>
                      setStops(stops.map((s, j) => (j === i ? e.target.value : s)))
                    }
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStops([...stops, ""])}
              className="btn btn-outline w-fit"
            >
              Add Stop
            </button>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              {["weight", "length"].map((field) => (
                <div key={field} className="flex flex-col w-full">
                  <label htmlFor={field} className="mb-1 font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1)} (
                    {field === "weight" ? "lbs" : "ft"})
                  </label>
                  <input
                    type="number"
                    name={field}
                    id={field}
                    placeholder={`${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    } (${field === "weight" ? "lbs" : "ft"})`}
                    value={formValues[field]}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <label htmlFor="type" className="mb-1 font-medium">
                Freight Type
              </label>
              <select
                name="type"
                id="type"
                value={formValues.type}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="FTL">FTL</option>
                <option value="LTL">LTL</option>
              </select>
            </div>

            {/* Base rate & miles */}
            <div className="flex space-x-4">
              {["baseRate", "totalMiles"].map((field) => (
                <div key={field} className="flex flex-col w-full">
                  <label htmlFor={field} className="mb-1 font-medium">
                    {field === "baseRate"
                      ? "Base Rate ($/mile)"
                      : "Total Miles (mi)"}
                  </label>
                  <input
                    type="number"
                    name={field}
                    id={field}
                    placeholder={
                      field === "baseRate" ? "e.g. 2.00" : "e.g. 1500"
                    }
                    value={formValues[field]}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
              ))}
            </div>

            {["fuel", "toll", "fees"].map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-1 font-medium">
                  {field.charAt(0).toUpperCase() + field.slice(1)} Charge ($)
                </label>
                <input
                  type="number"
                  name={field}
                  id={field}
                  placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} Charge $`}
                  value={formValues[field]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            ))}
          </div>
        </TwoColumnView>

        <button
          type="submit"
          className="btn bg-brand mt-8 p-5 text-white w-full"
        >
          Calculate
        </button>
      </form>

      {/* Result Section */}
      {showResult && (
        <div ref={resultRef} className="mt-8 w-full max-w-5xl border p-10 rounded-3xl">
          <p className="text-xl font-bold text-center mb-5">Result</p>
          <TwoColumnView>
            {["origin", "destination", "type", "weight", "length"].map(
              (field) => (
                <div key={field} className="flex flex-col">
                  <label
                    htmlFor={`result-${field}`}
                    className="mb-1 font-medium"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div id={`result-${field}`} className="input input-bordered w-full">
                    {formValues[field] || "-"}
                  </div>
                </div>
              )
            )}
            <div className="flex flex-col">
              <label htmlFor="result-stops" className="mb-1 font-medium">
                Stops
              </label>
              <div className="max-h-40 overflow-y-auto">
                {stops.filter(Boolean).map((stop, i) => (
                  <div
                    key={`result-stop-${i}`}
                    id={`result-stop-${i}`}
                    className="input input-bordered w-full mb-2"
                  >
                    Stop {i + 1}: {stop}
                  </div>
                ))}
                {stops.filter(Boolean).length === 0 && (
                  <div className="input input-bordered w-full">—</div>
                )}
              </div>
            </div>
            {calculation && (
              <>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium">Total Rate ($)</label>
                  <div className="input input-bordered w-full">
                    ${calculation.totalRate.toFixed(2)}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium">Total Miles</label>
                  <div className="input input-bordered w-full">
                    {calculation.miles} mi
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium">RPM ($/mile)</label>
                  <div className="input input-bordered w-full">
                    ${calculation.rpm.toFixed(2)}
                  </div>
                </div>
              </>
            )}
          </TwoColumnView>
          <button className="btn bg-brand mt-6 p-5 text-white w-full">
            Post Your Load
          </button>
        </div>
      )}

      {/* Bottom info */}
      <div className="flex flex-col mt-10 mb-10 max-w-[90%] mx-auto">
        <p className="text-2xl md:text-start mb-5 text-center">
          {t("freight-rate-calculator.get-started.title")}
        </p>
        <p className="md:max-w-[70%] text-lg text-center md:text-start">
          {t("freight-rate-calculator.get-started.description")}
          <Link className="text-info underline" to="/register">
            {" "}
            {t("freight-rate-calculator.get-started.sign-up-for-free")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Section1;