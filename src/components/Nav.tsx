import { Logo } from "./Logo";
import WeatherButtons from "./WeatherButtons";

const Nav = () => {
  return (
    <header className="flex flex-wrap sm:gap-5 justify-between  ">
      <Logo />
      <WeatherButtons />
    </header>
  );
};

export default Nav;
