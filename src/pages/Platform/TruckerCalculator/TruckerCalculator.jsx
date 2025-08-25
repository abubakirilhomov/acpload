import React from "react";

import HeroSection from "./HeroSection/HeroSection";
import Calculator from "./Calculator/Calculator";
import FixedExpensesTable from "./FixedExpensesTable/FixedExpensesTable";
import ExpenseSection from "./ExpenseSection/ExpenseSection";
import GetStarted from "./GetStarted/GetStarted";
// import ExpenseAnalysisSection from "./ExpenseAnalysisSection/ExpenseAnalysisSection";

const TruckerCalculator = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto">
        <Calculator />
        <FixedExpensesTable />
        <ExpenseSection />
        <GetStarted/>
        {/* <ExpenseAnalysisSection /> */}
      </div>
    </>
  );
};

export default TruckerCalculator;
