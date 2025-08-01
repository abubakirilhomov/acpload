import React from "react";
import Calculator from "../../../components/TruckerCalc/Calculator/Calculator";
import FixedExpensesTable from "../../../components/TruckerCalc/FixedExpenses/FixedExpenses";
import ExpenseSection from "../../../components/TruckerCalc/ExpenseSection/ExpenseSection";
import ExpenseAnalysisSection from "../../../components/TruckerCalc/ExpenseAnalysisSection/ExpenseAnalysisSection";
import HeroSection from "./HeroSection/HeroSection";

const TruckerCalculator = () => {
  return (
    <>
      <HeroSection/>
      <div className="max-w-screen-xl mx-auto">
        <Calculator />
        <FixedExpensesTable />
        <ExpenseSection />
        <ExpenseAnalysisSection />
      </div>
    </>
  );
};

export default TruckerCalculator;
