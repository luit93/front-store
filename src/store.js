import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./components/page-layout/CategorySlice";
import prodReducer from "./pages/product-page/ProductSlice";
const store = configureStore({
  reducer: {
    category: catReducer,
    product: prodReducer,
  },
});

export default store;
