import { format, getTime, formatDistanceToNow } from "date-fns";
export const fDate = (date: Date | string | number, newFormat?: string) => {
  const fm = newFormat || "dd MMM yyyy";
  return date ? format(new Date(date), fm) : "";
};

export const fDateTime = (date: Date | string | number, newFormat?: string) => {
  const fm = newFormat || "dd MMM yyyy p";
  return date ? format(new Date(date), fm) : "";
};
export const fTimestamp = (date: Date | string | number) => {
  return date ? getTime(new Date(date)) : "";
};
export const fToNow = (date: Date | string | number) => {
  return date ? formatDistanceToNow(new Date(date), { addSuffix: true }) : "";
};
