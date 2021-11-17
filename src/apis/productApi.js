import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const productAPI = rootUrl + "/api/v1/product";

export const fetchProduct = async (_id) => {
  try {
    const apiEndpoint = _id ? productAPI + "/" + _id : productAPI;
    const { data } = await axios.get(apiEndpoint);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return error?.response?.data || { status: "error", message: error.message };
  }
};
