import * as moment from 'moment';

export abstract class DateTimeUtil {
  static dateToString(date: Date): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

  static addTimeOnDate(date: Date, horario: string): string {
    const values = horario.split(':');
    const hours = values[0];
    const minutes = values[1];
    return moment(date).hours(+hours).minutes(+minutes).format('YYYY-MM-DD HH:mm:ss');
  }
}
