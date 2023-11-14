import axios from "axios";

const SERVER_URL = "https://api.openweathermap.org"; // this will also comes from env file.

const instance = axios.create({
  baseURL: SERVER_URL,
});

// interceptor to attach the api key with every request
instance.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params.appid = "00b63abc0f482e1d2a888d7d72328310";
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
