import * as moment from "moment";

export abstract class DateTimeUtil {
  static dateToString(date: Date): string {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }
}
