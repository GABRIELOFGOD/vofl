
import { format } from "date-fns";

export const formatNumber = (num: number) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "m";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "k";
  return num.toString();
};

export const formattedTime = (date: string) => {
  return format(new Date(date), "yyyy-MM-dd");
}
