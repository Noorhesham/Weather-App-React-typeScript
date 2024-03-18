import { useDegree } from "../context/DegreeContext";
import { useGetWeather } from "../weather/useGetWeather";
import Loader from "./Loader";

const WeatherDetails = () => {
  const { weather, isLoading } = useGetWeather();
  const { degree } = useDegree();
  if (isLoading) return <Loader />;
  console.log(weather);
  const todayCurrent = degree === "c" ? weather.current.temp_c : `${weather.current.temp_f}`;
  const todayHigh =
    degree === "c" ? weather.forecast.forecastday[0].day.maxtemp_c : `${weather.forecast.forecastday[0].day.maxtemp_f}`;
  const todayLow =
    degree === "c" ? weather.forecast.forecastday[0].day.mintemp_c : `${weather.forecast.forecastday[0].day.mintemp_f}`;
  return (
    <main className="flex justify-between text-white">
      <h1 className=" flex flex-col items-start gap-[10px] text-6xl font-bold leading-[75.07px]">
        New Cairo
        <span className=" text-[20px] leading-[23.46px]">
          {new Date(weather.current.last_updated).toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <div className="flex flex-col gap-3 items-center">
          <img className="min-w-[96px] " src={weather.current?.condition.icon} alt="" />
          <span className=" text-3xl">{weather.current?.condition.text}</span>
        </div>
      </h1>
      <div className="flex items-center  flex-col">
        <div className="flex  font-bold  text-[144px]">
          {todayCurrent}
          <span className=" text-[100px] items-start">&deg;</span>
        </div>
        <div className="flex flex-col mt-[-30px] ">
          <div className="flex items-center font-normal text-[48px]">
            <div className="flex ">
              {todayHigh}
              <span className="items-start">{degree === "f" && "F"}&deg;</span>
            </div>
            / <span> </span>
            <div className="flex items-center font-normal text-[48px]">
              {todayLow}
              <span className="  items-start">{degree === "f" && "F"}&deg;</span>
            </div>
          </div>
        </div>
        <p className=" text-2xl font-semibold pt-[23px]">{weather.current?.condition.text} throughout the day</p>
      </div>
    </main>
  );
};

export default WeatherDetails;
