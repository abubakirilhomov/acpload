import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  setTotalGross,
  setWorkingDays as setWD,
  setTotalMiles as setTM,
} from "../../../../redux/slices/truckerCalculatorSlice";

const Calculator = () => {
  const { t } = useTranslation();
  const main = useSelector((state) => state.truckerCalculator.main);
  const dispatch = useDispatch();

  // Локальное форматирование только для отображения
  const [grossInput, setGrossInput] = useState(String(main.totalGross || ""));
  const [daysInput, setDaysInput] = useState(String(main.workingDays || ""));
  const [milesInput, setMilesInput] = useState(String(main.totalMiles || ""));

  useEffect(
    () => setGrossInput(String(main.totalGross || "")),
    [main.totalGross]
  );
  useEffect(
    () => setDaysInput(String(main.workingDays || "")),
    [main.workingDays]
  );
  useEffect(
    () => setMilesInput(String(main.totalMiles || "")),
    [main.totalMiles]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* TOTAL GROSS */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4">
          <p className="text-sm opacity-70">
            {t("trucker-calculator.stats.totalGross")}
          </p>
          <input
            type="text"
            value={Number(grossInput).toLocaleString("en-US")}
            onChange={(e) => {
              const raw = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1");
              setGrossInput(raw);
              dispatch(setTotalGross(Number(raw)));
            }}
            placeholder="0"
            className="input input-bordered w-full font-bold text-xl"
          />
          <div className="mt-2 bg-base-300 p-3 rounded-lg">
            <p className="text-sm">{t("trucker-calculator.stats.netProfit")}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">
                $
                {main.netProfit.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span
                className={`${
                  main.netProfitPercent < 0 ? "text-red-500" : "text-green-500"
                } text-sm`}
              >
                {main.netProfitPercent}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* WORKING DAYS */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4">
          <p className="text-sm opacity-70">
            {t("trucker-calculator.stats.workingDays")}
          </p>
          <input
            type="text"
            value={daysInput}
            onChange={(e) => {
              const n = e.target.value.replace(/\D/g, "");
              const v = Math.min(Number(n) || 0, 31);
              setDaysInput(String(v));
              dispatch(setWD(v));
            }}
            placeholder="0"
            className="input input-bordered w-full font-bold text-xl"
          />
          <div className="mt-2 bg-base-300 p-3 rounded-lg">
            <p className="text-sm">
              {t("trucker-calculator.stats.profitPerDay")}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">
                $
                {main.profitPerDay.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span
                className={`${
                  main.profitPerDayPercent < 0
                    ? "text-red-500"
                    : "text-green-500"
                } text-sm`}
              >
                {main.profitPerDayPercent}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TOTAL MILES */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4">
          <p className="text-sm opacity-70">
            {t("trucker-calculator.stats.totalMiles")}
          </p>
          <input
            type="text"
            value={Number(milesInput).toLocaleString("en-US")}
            onChange={(e) => {
              const raw = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1");
              setMilesInput(raw);
              dispatch(setTM(Number(raw)));
            }}
            placeholder="0"
            className="input input-bordered w-full font-bold text-xl"
          />
          <div className="mt-2 bg-base-300 p-3 rounded-lg">
            <p className="text-sm">
              {t("trucker-calculator.stats.mileProfit")}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">
                $
                {main.mileProfit.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span
                className={`${
                  main.mileProfitPercent < 0 ? "text-red-500" : "text-green-500"
                } text-sm`}
              >
                {main.mileProfitPercent}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GROSS/COST PER MILE */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4">
          <p className="text-sm opacity-70">
            {t("trucker-calculator.stats.grossPerMile")}
          </p>
          <h2 className="text-xl font-bold">
            $
            {main.grossPerMile.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </h2>
          <div className="mt-2 bg-base-300 p-3 rounded-lg">
            <p className="text-sm">
              {t("trucker-calculator.stats.costPerMile")}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">
                $
                {main.costPerMile.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span
                className={`${
                  main.costPerMilePercent < 0
                    ? "text-red-500"
                    : "text-green-500"
                } text-sm`}
              >
                {main.costPerMilePercent}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TOTAL EXPENSES */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 card bg-base-300 shadow-inner mt-2">
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-semibold">
            {t("trucker-calculator.stats.totalExpenses")}
          </p>
          <p className="font-bold">
            $
            {main.totalExpenses.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            ({main.totalExpensesPercent}%)
          </p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
