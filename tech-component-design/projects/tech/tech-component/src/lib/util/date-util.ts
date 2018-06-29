export class DateUtil{

    static convertJsDateToDatepickerDate(original: Date): Date{
        const tmpDate = new Date(original.getTime() - original.getTimezoneOffset() * 60 * 1000);
        return tmpDate;
    }

    static convertDatepickerDateToJsDate(original: Date): Date{
        const tmpDate = new Date(original.getTime());
        return tmpDate;
    }
}