import "./App.css";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import SliderWeather from "./components/SliderWeather";
import WeatherDetails from "./components/WeatherDetails";
import { useGetWeather } from "./weather/useGetWeather";

function App() {
  const { weather, isLoading } = useGetWeather();
  if (isLoading) return <Loader />;
  return (
    <section className="back py-10 px-10 lg:px-28 flex flex-col gap-6 relative min-h-[100vh] w-full font">
      <div className="overlay"></div>
      <div className=" flex flex-wrap flex-col gap-[213px]  ">
        <Nav />
        <WeatherDetails weather={weather} />
      </div>
      <SliderWeather  weather={weather} />
    </section>
  );
}

export default App;
