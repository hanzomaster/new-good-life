import { getDate, getDay, getMonth, getYear } from "date-fns";

export const getCurrentDateVn = () => {
  const date = new Date();
  let message = "Thứ ";
  const day = getDay(date) + 1;
  if (day === 0) message = "Chủ nhật";
  else message += day;
  message += `, ngày ${getDate(date)} tháng ${getMonth(date) + 1} năm ${getYear(
    date,
  )}`;
  return message;
};
