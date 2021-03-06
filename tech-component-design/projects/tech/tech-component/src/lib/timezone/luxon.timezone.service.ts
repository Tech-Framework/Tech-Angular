import { Injectable } from '@angular/core';
import { Timezone } from './timezone';
import { DateTime } from 'luxon';
import { SystemDateInput } from './system-time';
import * as moment from 'moment';

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
        if (this.systemTimezone){
            if (!this.useTimezoneOffset){
                if (this.systemTimezone && this.systemTimezone.timezoneId){
                    timezoneId = this.systemTimezone.timezoneId   
                }
            } else {
                if (this.systemTimezone && this.systemTimezone.utcOffset){
                    const utcOffset = this.systemTimezone.utcOffset;
                    if (utcOffset === 0){
                        timezoneId = 'utc';
                    } else if (utcOffset > 0) {
                        timezoneId = 'utc+'+utcOffset;
                    } else {
                        timezoneId = 'utc-'+utcOffset;
                    }
                }
            }
        }
        return timezoneId;
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
            const systemLuxonDate = DateTime.fromJSDate(date, {zone: timezoneId});
            const localLuxonDate = systemLuxonDate.setZone('local', {keepLocalTime: true});
            return localLuxonDate.toJSDate();
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
            const localLuxonDate = DateTime.fromJSDate(date);
            const systemLuxonDate = localLuxonDate.setZone(timezoneId, {keepLocalTime: true});
            const systemLuxonDateOnly = systemLuxonDate.startOf('day');
            return systemLuxonDateOnly.toJSDate();
        }
        return new Date(date.getTime());
    }

    /**
     * If Input is 2018-11-08 11:00 UTC
     *  The System Timezone is UTC +8 
     *  It would return 2018-11-08 19:00 UTC
     * @param val 
     */
    public getJsDateBySystemDateInput(val: SystemDateInput){
        if (!this.useLocalTimezone){
            let timezoneId = this.getTimezoneId();
            const localLuxonDate = DateTime.fromJSDate(val.date, {zone: timezoneId});
            const systemLuxonDate = localLuxonDate.setZone('utc', {keepLocalTime: true});
            const systemLuxonDateOnly = systemLuxonDate.startOf('day');
            return systemLuxonDateOnly.toJSDate();
        } else {
            return new Date(val.date.getTime());
        }
    }

    /**
     * Get Local UTC Date by Js Date
     * 
     * Input Date: 2018-11-08 11:00 UTC
     * It would return 2018-11-08 11:00 Local Time
     * 
     * @param date 
     * 
     */
    public getLocalUtcDate(date: Date): Date{
        const utcLuxonDate = DateTime.fromJSDate(date, {zone: 'utc'});
        const localLuxonDate = utcLuxonDate.setZone('local', {keepLocalTime: true});
        return localLuxonDate.toJSDate();
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
        const utcLuxonDate = DateTime.fromJSDate(date);
        const localLuxonDate = utcLuxonDate.setZone('utc', {keepLocalTime: true});
        const localLuxonDateOnly = localLuxonDate.startOf('day');
        return localLuxonDateOnly.toJSDate(); 
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