import { API_KEY, BaseURL } from "../constants";

export const getWeather = async () => {
  try {
    const res = await fetch(`${BaseURL}/forecast.json?key=${API_KEY}&q=New Cairo&days=14`);
    const weather = await res.json();
    return weather;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : String(err));
  }
};
