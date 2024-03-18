export interface hourProp {
  time: number;
  condition: { icon: string };
  temp_f: number;
  temp_c: number;
}
export interface dayProp {
  day: {
    avgtemp_f: number;
    avgtemp_c: number;
    condition: { icon: string };
  };
  date: Date|string;
}
