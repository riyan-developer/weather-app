import axios from "../config/httpConfig";

export const getTheLatAndLon = async (city) => {
  try {
    const resp = await axios.get(`/geo/1.0/direct?q=${city}&limit=5`);
    return resp;
  } catch (error) {
    return error.response;
  }
};

export const getTheWeatherData = async (lat, lon) => {
  try {
    const resp = await axios.get(`/data/2.5/weather?lat=${lat}&lon=${lon}`);
    return resp;
  } catch (error) {
    return error.response;
  }
};
