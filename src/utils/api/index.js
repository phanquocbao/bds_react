import axiosInstance from "./axios";
const ENDPOINT_API_MAP = "http://localhost:3000";
const API = {
  posts: {},
  categories: {
    get: (params = {}) => {
      // https://developer.wordpress.org/rest-api/reference/categories/#arguments
      return axiosInstance.get("/wp-json/wp/v2/categories", {
        params: params,
      });
    },
  },
  mapjson: {
    getTinhTP: (params = {}) => {
      // https://developer.wordpress.org/rest-api/reference/categories/#arguments
      return axiosInstance.get(ENDPOINT_API_MAP + "/mapjson/tinh_tp.json", {
        params: params,
      });
    },
    getQuanHuyen: (params = {}) => {
      // https://developer.wordpress.org/rest-api/reference/categories/#arguments
      return axiosInstance.get(ENDPOINT_API_MAP + "/mapjson/quan_huyen.json", {
        params: params,
      });
    },
    getXaPhuong: (params = {}) => {
      // https://developer.wordpress.org/rest-api/reference/categories/#arguments
      return axiosInstance.get(ENDPOINT_API_MAP + "/mapjson/xa_phuong.json", {
        params: params,
      });
    },
  },
};

export default API;
