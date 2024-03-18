import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/getWeather";

export function useGetWeather() {
  const { data: weather, error, isLoading } = useQuery({ queryFn: getWeather, queryKey: ["weather"] });
  console.log(weather);
  return { weather, error, isLoading };
}
