import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

class APIClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getTopTen = () => {
    return axiosInstance
      .get(this.endpoint, { params: { limit: 10 } })
      .then((res) => res.data);
  };

  get = () => {
    return axiosInstance
      .get(this.endpoint)
      .then((res) => res.data)
      .catch((err) => err);
  };

  post = (item, params) => {
    return axiosInstance
      .post(this.endpoint, item, { params: params })
      .then((res) => res.data);
  };
}

export default APIClient;
