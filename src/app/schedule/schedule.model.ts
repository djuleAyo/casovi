import { Appointment } from '../appointment/appointment.model';

import * as CronParser from 'cron-parser';

function sameDate(d1: Date, d2: Date): Boolean {
    return d1.getTime() === d2.getTime();
}

/**
 * There is no runtime value validity check for CronPattern.
 * If invalid value is passed Errors will be thrown.
 * For valid syntax check the [web]{@link https://en.wikipedia.org/wiki/Cron} or man pages
 */
type CronPattern = string;
/**
 * Facade to cron engine which is currently [cron parser]{@link https://www.npmjs.com/package/cron-parser}.
 */
class CronInterval {
    private value: CronPattern;

    public toDateArray() {

    }
    public union() {

    }
    public diff() {

    }
}

/**
 * Gives usual schedule operations such as appointing and querying dates for status.<br>
 * <hr>
 * Design points:
 * Cron was made to describe set of descrete time 'points'.
 * People efficiently describe time intervals.
 * This divergention is main inspiration for this class as well as its main design point. Namely:
 * On one hand we want to efficiently describe time intervals (for easy schedule operations) which could be achieved
 * by explicit definition of start and end date, but this is not the way people
 * describe intervals. We describe intervals in cron like manner, telling both start and end time and days, dates
 * in which those times occure. Thus cron is used.
 * This has a consequence that intervals are initialy represented by arrays of dates instead of
 * start and end pairs.
 * On the other hand start-end intervals are much more practical.
 * So additional convesion step is required.
 */
export class Schedule {
    /**
     * Takes union of all {@link CronInterval} passed
     */
    private open: Array<CronInterval> = [];
    /**
     * Takes union of all provided {@link CronInterval}.
     * Take care to describe all {@link TimeDelta} dates from start to the end of exlusion
     * otherwise those will appear as not excluded.
     */
    private excludes: Array<CronInterval> = [];
    private appointments: Array<ScheduleAppointment> = [];
    /**
     * Adding more restrictive configuration for {@link Schedule} may result in confilts with appointments.
     * This requires confilt resolution and default resolution strategies.
     * If conflicts arise the method will throw.
     * You can always create new instance of the class BUT it is up to class user to respect all appointments
     * from old instances. Set validThrough to mark end date of current configuration
     */
    private valid Through?: Date;
    /**
     * See {@link Schedule#validThrough}. This is its counterpart.
     */
    private validFrom?: Date;


    constructor (

    ) {}

    /**
     * This function is not for public use. Publicly use {@link Schedule.query}<br>
     */
    private queryDate(date: Date): ScheduleInterval {

        return undefined;
    }
    /**
     * The method is not for public use. Publicly use {@link Schedule.query}<br>
     * Each element has date that matches passed cronPattern and interval which
     * contains that date.
     */
    private queryDates(interval: CronInterval)
      : Array<{date: Date, interval: ScheduleInterval}> {

        return [];
    }
    /**
     * Provides nice interface to query either a date or set of dates.
     * For meaning of returned values check out private counterparts
     * {@link Schedule#queryDate} and {@link Schedule#queryInterval}
     */
    public query(queryVal: Date | CronInterval)
        : Array<{date: Date, inSchedule: ScheduleAppointment | ScheduleInterval}> | ScheduleAppointment | ScheduleInterval {

        return [];
    }
    /**
     * Check wether given date is free and appoints if so.
     * If not will throw.
     */
    public appoint(date: Date, appointmentData: object): ScheduleAppointment {

        return undefined;
    }

    /**
     * Each element of initial array is sorted array of dates wich are of same date.
     * The initial array is also sorted by dates of grandchildren.
     */
    getSchedule(start?: Date, end?: Date): Array<Array<ScheduleInterval>> {

        return [];
    }
}

class ScheduleInterval {
    start: Date;
    end: Date;
    children?: Array<ScheduleInterval>;

    constructor() {

    }

    public length() {

    }
}

/**
 * This class can be base for inheritance tree of appointment types.
 * By inheriting this class each type of appointment may have its own data.
 */
class ScheduleAppointment extends ScheduleInterval {

    constructor(
    ) {
        super();
    }
}

class CronDateArray {
    data: Array<Date>;

    toInterval() {

    }
}
