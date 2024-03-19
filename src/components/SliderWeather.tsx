import { useState } from "react";
import { WeatherProps, dayProp, hourProp } from "../types";
import DayWeatherCard from "./DayWeatherCard";
import WeatherCard from "./WeatherCard";

const SliderWeather = ({weather}:{weather:WeatherProps}) => {
  const [slider, setSlider] = useState("hour");

  const daily = weather.forecast.forecastday[0].hour;
  return (
    <section>
      <div className="flex gap-5 cursor-pointer">
        <h1
          onClick={() => setSlider("hour")}
          className=" text-3xl text-white font-semibold py-2 border-b-[3px] border-white  w-fit"
        >
          Hourly
        </h1>
        <h1 onClick={() => setSlider("day")} className=" text-3xl  text-gray-200  font-semibold py-2   w-fit">
          Daily
        </h1>
      </div>
      <div className=" relative w-[1200px] text-white border-b-2 border-t-2 border-white py-5 overflow-x-scroll">
        {slider === "hour" && (
          <div className="flex gap-20   justify-between w-full">
            {daily.map((hour: hourProp, i: number) => (
              <WeatherCard key={i} hour={hour} />
            ))}
          </div>
        )}
        {slider === "day" && (
          <div className="flex gap-20   justify-between w-full">
            {weather.forecast.forecastday.map((day: dayProp, i: number) => (
              <DayWeatherCard key={i} day={day} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderWeather;
