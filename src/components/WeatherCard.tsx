import { useDegree } from "../context/DegreeContext";
import { hourProp } from "../types";

const WeatherCard = ({ hour }: { hour: hourProp }) => {
  const { degree } = useDegree();
  return (
    <div className="flex min-w-[66px] justify-center flex-col items-center">
      {
        <span className=" text-2xl font-normal">
          {new Date(Date.now()).getHours() === new Date(hour.time).getHours()
            ? "Now"
            : `${new Date(hour.time).getHours()}:00`}
        </span>
      }
      <img className="w-[100px]" src={hour.condition.icon} alt="" />
      <span className=" text-3xl font-normal">
        {degree === "c" ? hour.temp_c  : hour.temp_f }
        <span className="  items-start">{degree === "f" && "F"}&deg;</span>
      </span>
    </div>
  );
};

export default WeatherCard;
