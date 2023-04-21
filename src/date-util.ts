export class DateUtil {
  public static isDateInTheFuture(date: Date): boolean {
    const now = DateUtil.currentDate();
    const expDate = new Date(date);
    // console.log('date:', date);
    // console.log('expDate:', expDate);
    // console.log('now', now);
    return expDate > now;
  }

  public static currentDate(): Date {
    return new Date();
  }
}
