export interface hourProp {
  time: number;
  condition: { icon: string,text:string };
  temp_f: number;
  temp_c: number;
  last_updated:string
}
export interface dayProp {
  day: {
    avgtemp_f: number;
    avgtemp_c: number;
    condition: { icon: string };
    maxtemp_c:number
    maxtemp_f:number
    mintemp_c:number
    mintemp_f:number
  }
  hour:hourProp[]
  date: Date|string;
}
export interface WeatherProps {
  forecast: {
    forecastday:dayProp[];
  }
  current: hourProp;
}




