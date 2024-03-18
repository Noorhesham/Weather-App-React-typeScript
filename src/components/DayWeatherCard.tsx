import { useDegree } from "../context/DegreeContext";
import { dayProp } from "../types";
import { getDayName } from "../utils/getDayName";

const DayWeatherCard = ({ day }: { day: dayProp }) => {
  const { degree } = useDegree();
  return (
    <div className="flex min-w-[66px] justify-center flex-col items-center">
      {
        <span className=" text-2xl font-normal">
          {new Date(Date.now()).getDay() === new Date(day.date).getDay() ? "Now" : `${getDayName(day.date)}`}
        </span>
      }
      <img className="w-[100px]" src={day.day.condition.icon} alt="" />
      <span className=" text-3xl font-normal">
        {degree === "c" ? day.day.avgtemp_c : day.day.avgtemp_f}
        <span className="  items-start">{degree === "f" && "F"}&deg;</span>
      </span>
    </div>
  );
};

export default DayWeatherCard;
