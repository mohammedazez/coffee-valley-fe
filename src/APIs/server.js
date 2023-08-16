import axios from "axios";

const Axios = axios.create({
  baseURL: "https://coffee-valley-24a12ad7647c.herokuapp.com/",
});

// Add a request interceptor
Axios.interceptors.request.use(
  // Do something before request is sent
  function (config) {
    return config;
  },
  // Do something with request error
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
