import { reqPending, reqFails, fetchProductsSuccess } from "./ProductSlice";
import { fetchProduct } from "../../apis/productApi";

export const getProducts = async (dispatch) => {
  dispatch(reqPending);
  const result = await fetchProduct();
  if (result?.status === "success") {
    return dispatch(fetchProductsSuccess(result.product));
  }
  dispatch(reqFails(result));
};
