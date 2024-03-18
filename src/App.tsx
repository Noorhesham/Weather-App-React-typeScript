import "./App.css";
import Nav from "./components/Nav";
import SliderWeather from "./components/SliderWeather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <section className="back py-10 px-28 flex flex-col gap-6 relative min-h-[100vh] w-full font">
      <div className="overlay"></div>
      <div className=" flex flex-col gap-[213px]  ">
        <Nav />
        <WeatherDetails />
      </div>
      <SliderWeather />
    </section>
  );
}

export default App;
