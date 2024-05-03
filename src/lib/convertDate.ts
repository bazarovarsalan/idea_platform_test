import moment from "moment";
import "moment/locale/ru";

export function convertDate(date: string) {
  const now = moment(date);
  now.locale("ru");
  return now.format("D MMM YYYY, ddd").replace(".", "");
}
