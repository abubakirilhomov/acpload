import { configureStore } from "@reduxjs/toolkit";
import truckerCalculatorReducer from "./slices/truckerCalculatorSlice";

export const store = configureStore({
  reducer: {
    truckerCalculator: truckerCalculatorReducer,
  },
});

export default store;
