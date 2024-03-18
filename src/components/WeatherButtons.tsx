import { useDegree } from "../context/DegreeContext";

function WeatherButtons() {
  const { degree, setDegree } = useDegree();
  console.log(degree);
  const activeClass = "bg-[#FFFFFF40]  ";
  return (
    <div className="flex text-white text-[24px] font-[600]">
      <div
        id="c"
        onClick={() => setDegree("c")}
        className={`${
          degree === "c" && activeClass
        } py-2 duration-150 cursor-pointer    px-4 text-center w-[76px] h-[48px]  `}
      >
        C
      </div>
      <div
        onClick={() => setDegree("f")}
        className={`${
          degree === "f" && activeClass
        } py-2 border-l-2 border-[#FFFFFF]  duration-150 px-4  cursor-pointer text-center w-[76px] h-[48px]  `}
      >
        F
      </div>
    </div>
  );
}

export default WeatherButtons;
