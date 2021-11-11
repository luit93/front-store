import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const productAPI = rootUrl + "/api/v1/product";

export const fetchProduct = async () => {
  try {
    const { data } = await axios.get(productAPI);

    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
