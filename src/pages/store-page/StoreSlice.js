import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  productResponse: {},
  productList: [],
};

const productSlice = createSlice({
  name: "prodSlice",
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },
    fetchProductsSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.productList = payload;
    },
    reqFails: (state, { payload }) => {
      state.isPending = false;
      state.productResponse = payload;
    },
  },
});
const { reducer, actions } = productSlice;
export const { reqPending, reqFails, fetchProductsSuccess } = actions;
export default reducer;
