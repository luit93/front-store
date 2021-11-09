import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  catResponse: {},
  catList: [],
};

const categorySlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },
    fetchCategoriesSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.catList = payload;
    },
    reqFails: (state, { payload }) => {
      state.isPending = false;
      state.catResponse = payload;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { reqPending, fetchCategoriesSuccess, reqFails } = actions;
export default reducer;
