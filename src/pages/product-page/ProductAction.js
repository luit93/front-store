import { reqPending, reqFails, fetchProductsSuccess } from "./ProductSlice";
import { fetchProduct } from "../../apis/productApi";

export const getProductsAction = (catId) => async (dispatch) => {
  dispatch(reqPending);
  const result = await fetchProduct(catId);
  // dispatch(getProductsAction())
  if (result?.status === "success") {
    return dispatch(fetchProductsSuccess(result.products));
  }
  dispatch(reqFails(result));
};
