import { Logo } from "./Logo";
import WeatherButtons from "./WeatherButtons";

const Nav = () => {
  return (
    <header className="flex justify-between  ">
      <Logo />
      <WeatherButtons />
    </header>
  );
};

export default Nav;
