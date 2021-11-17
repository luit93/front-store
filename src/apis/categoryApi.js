import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const catAPI = rootUrl + "/api/v1/category";

export const fetchCategory = async (slug) => {
  try {
    const apiEndpoint = slug ? catAPI + "/" + slug : catAPI;
    const { data } = await axios.get(apiEndpoint);

    return data;
  } catch (error) {
    console.log(error);
    return error?.response?.data || { status: "error", message: error.message };
  }
};
