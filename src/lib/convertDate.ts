import moment from "moment";
import "moment/locale/ru";

export function convertDate(date: string) {
  const now = moment(new Date(date));
  now.locale("ru");
  return now.format("D MMM YYYY, ddd").replace(".", "");
}
