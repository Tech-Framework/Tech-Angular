import { Injectable } from '@angular/core';
import { Timezone } from './timezone';
import { DateTime } from 'luxon';
import { SystemDateInput } from './system-time';
import * as moment_ from 'moment-timezone';
const moment = moment_;

@Injectable({
    providedIn: 'root',
})
export class TimezoneService {
    
    private systemTimezone: Timezone = null;
    private useTimezoneOffset: boolean = false;
    private useLocalTimezone: boolean = false;

    public setSystemTimezone(timezone:Timezone): void {
        this.systemTimezone = timezone;
    }

    public getSystemTimezone(): Timezone {
        return this.systemTimezone;
    }
    
    public getTimezoneId(): string{
        let timezoneId = 'utc';
        if (this.systemTimezone && this.systemTimezone.timezoneId){
            timezoneId = this.systemTimezone.timezoneId;
        }
        return timezoneId;
    }

    public getTimezoneUtcOffset(): number{
        let utcOffset = 0;
        if (this.systemTimezone && this.systemTimezone.utcOffset){
            utcOffset = this.systemTimezone.utcOffset * 60;
        }
        return utcOffset;
    }

    public checkExist(timezoneId: string): boolean {
        return moment.tz.zone(timezoneId) !== null ;
    }

    /**
     * Get Local System Date from Js Date with specified System Timezone
     * 
     * When useLocalTimezone is false:
     * 
     * Input Date: 2018-11-08 11:00 UTC
     * timezoneId: Hong Kong (+8 UTC)
     *  It would return 2018-11-08 19:00 Local Time
     * 
     * Input Date: 2018-11-08 11:00 UTC
     * timezoneid: France (+2 UTC)
     *  It would return 2018-11-08 13:00 Local Time
     * 
     * (p.s) there are date night saving issue
     * Input Date: 2018-08-01 11:00 UTC
     * timezoneid: France (+1 UTC)
     *  It would return 2018-11-08 12:00 Local Time
     * 
     * When useLocalTimezone is true
     *  it would return input date
     * 
     * @param date 
     * @param timezoneId 
     */
    public getLocalSystemDate(date: Date): Date {
        if (!this.useLocalTimezone){
            let timezoneId = this.getTimezoneId();
            if (!timezoneId){
                timezoneId = 'utc';
            }
            const systemMomentDate = moment.tz(date, timezoneId);
            const localMomentDate = systemMomentDate.local(true);
            const localMomentDateOnly = localMomentDate.startOf('day');
            return localMomentDateOnly.toDate();
        }
        return new Date(date.getTime());
    }


    /**
     * Get Js Date from System Date with specied System Timezone
     * 
     * Assume Local Timezone is Hong Kong (+8 UTC) 
     * 
     * Input Date 2018-11-08 19:00 Local Time (+8 UTC)
     * timezoneId: Hong Kong (+8 UTC)
     * It woulr return 2018-11-08 19:00 UTC
     * 
     * Input Date: 2018-11-08 13:00 Local Time (+8 UTC)
     * timezoneid: France (+2 UTC)
     * It would return 2018-11-08 07:00 UTC
     * 
     * (p.s) there are date night saving issue
     * Input Date: 2018-08-01 11:00 UTC
     * timezoneid: France (+1 UTC)
     * It would return 2018-11-08 10:00 UTC
     * 
     * @param date 
     * @param timezoneId 
     */
    public getJsDateFromLocalSytemDate(date: Date): Date {
        if (!this.useLocalTimezone){
            let timezoneId = this.getTimezoneId();
            const systemLuxonDate = moment(date).tz(timezoneId, true);
            systemLuxonDate.startOf('day');
            return systemLuxonDate.toDate();
        }
        return new Date(date.getTime());
    }

    /**
     * If Input is 2018-11-08 00:00 UTC
     *  The System Timezone is UTC -8
     *  It would return 2018-11-07 00:00 UTC
     * 
     * If Input is 2018-11-08 08:00 UTC
     *  The System Timezone is UTC -8
     *  It would return 2018-11-00 00:00 UTC
     * 
     * @param val 
     */
    public getJsDateBySystemDateInput(val: SystemDateInput){
        if (!this.useLocalTimezone){
            let timezoneId = this.getTimezoneId();
            const localMomentDate = moment.tz(val.date, timezoneId);
            const systemMomentDate = localMomentDate.utc(true);
            const systemMomentDateOnly = systemMomentDate.startOf('day');
            return systemMomentDateOnly.toDate();
        } else {
            return new Date(val.date.getTime());
        }
    }

    /**
     * If Input is 2018-11-08 00:00 UTC
     *  The System Timezone is UTC -8
     *  It would return 2018-11-07 00:00 (Local)
     * 
     * If Input is 2018-11-08 08:00 UTC
     *  The System Timezone is UTC -8
     *  It would return 2018-11-00 00:00 (Local)
     * 
     * @param val 
     */
    public getLocalDateBySystemDateInput(val, SystemDateInput){
        if (!this.useLocalTimezone){
            let timezoneId = this.getTimezoneId();
            const localMomentDate = moment.tz(val.date, timezoneId);
            const systemMomentDate = localMomentDate.local(true);
            const systemMomentDateOnly = systemMomentDate.startOf('day');
            return systemMomentDateOnly.toDate();
        } else {
            return new Date(val.date.getTime());
        }
    }

    /**
     * Get Local UTC Date by Js Date
     * 
     * Input Date: 2018-11-08 11:00 UTC
     * It would return 2018-11-08 11:00 (Local)
     * 
     * @param date 
     * 
     */
    public getLocalUtcDate(date: Date): Date{
        const utcMomentDate = moment(date);
        const localMomentDate = utcMomentDate.local(true);
        const localMomentDateOnly = localMomentDate.startOf('day');
        return localMomentDateOnly.toDate();
    }
    
    /**
     * Get Js Date from UTC Date 
     * 
     * Assume Local Timezone is Hong Kong (+8 UTC) 
     * 
     * Input Date 2018-11-08 19:00 Local Time (+8 UTC)
     * It would return 2018-11-08 19:00 UTC
     * 
     * @param date 
     */
    public getJsDateFromLocalUtcDate(date: Date): Date {
        const utcMomentDate = moment(date);
        const localMomentDate = utcMomentDate.utc(true);
        const localMomentDateOnly = localMomentDate.startOf('day');
        return localMomentDateOnly.toDate(); 
    }
    
    /**
     * Get System Current Day Only
     * 
     * If Current Time is 2018-11-08 19:00 UTC
     *  In the UTC +8, the day only value should be 
     *      2018-11-08 18:00 UTC
     */
    public getSystemCurrentDate(): Date {
        if (!this.useLocalTimezone){
            const timezoneId = this.getTimezoneId()
            const currentSystemDate = DateTime.fromJSDate(new Date(), {zone: timezoneId});
            const currentSystemDayOnly = currentSystemDate.startOf('day');
            return currentSystemDayOnly.toJSDate();
        }
        return new Date();
    }

    /**
     * Get System Current Day Only in UTC
     * 
     *  If Current Time is 2018-11-08 19:00 UTC
     *      In the UTC +8, the day should be 2018-11-09 01:00 
     *      Then the day only in utc would be 2018-11-09 00:00 UTC
     */
    public getSystemCurrentDateInUtc(): Date {
        if (!this.useLocalTimezone){
            const timezoneId = this.getTimezoneId()
            const currentSystemDate = DateTime.fromJSDate(new Date(), {zone: timezoneId});
            const currentSystemDayOnly = currentSystemDate.startOf('day');
            const currentSystemDayOnlyInUtc = currentSystemDayOnly.setZone('utc', {keepLocalTime: true});
            return currentSystemDayOnlyInUtc.toJSDate();
        }
        return new Date();
    }

    public getJsDateByFormat(val: string, format: string): Date {
        return moment.utc(val, format).toDate();
    }

    public getValStringFromDateInUtc(val: Date, format: string): string {
        return moment(val).utc().format(format);
    }

}