import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./components/page-layout/CategorySlice";

const store = configureStore({
  reducer: {
    category: catReducer,
  },
});

export default store;
