import { reqPending, fetchCategoriesSuccess, reqFails } from "./CategorySlice";
import { fetchCategory } from "../../apis/categoryApi";

export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  const result = await fetchCategory();
  console.log(result);
  if (result?.status === "success") {
    return dispatch(fetchCategoriesSuccess(result.categories));
  }

  dispatch(reqFails(result));
};
