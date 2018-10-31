import { Appointment } from '../appointment/appointment.model';

import * as CronParser from 'cron-parser';

function sameDate(d1: Date, d2: Date): Boolean {
    return d1.getTime() === d2.getTime();
}

export class Schedule {

    // number of minutes beween possible appointmens

    static toDateArray(interval: string, start?: Date, end?: Date) {
        start = (start !== undefined) ? start : new Date();
        end = end !== undefined ? end : new Date(start.getTime() + 24 * 60 * 60 * 1000);
        const ret_val = [];

        try {
          const res = CronParser.parseExpression(interval, {
              currentDate: start, endDate: end, iterator: true
          });

          while (true) {
            try {
                const obj = res.next();

                const currentDate = new Date((<any>obj).value.toString());
                currentDate['state'] = 'initial';

                ret_val.push(currentDate);
            } catch (e) {
              break;
            }
          }

        } catch (err) {
          console.log('Error: ' + err.message);
        }
        return ret_val;
    }
    /**
     * The 1st array is dest of the operation.
     */
    static union(dates1: Array<Date>, dates2: Array<Date>): Array<Date> {
        for (const date of dates2) {
            if (dates1.filter((elem) => sameDate(elem, date)).length === 0) {
                dates1.push(date);
            }
        }
        dates1.sort();
        return dates1;
    }
    /**
     * The 1st array is dest of the operation.
     */
    static diff(dates1: Array<Date>, dates2: Array<Date>): Array<Date> {
        for (const date of dates2) {
            // TODO - change to filter not index - index doesn't catch date equality
            const index = dates1.indexOf(date);
            if ( index !== -1) {
                dates1.splice(index, 1);
            }
        }
        dates1.sort();
        return dates1;
    }
    /**
     * The function preforms grouping on date basis.
     * Resulting groups are stored in an asc sorted array
     */
    static splitByDate(dates: Array<Date>): Array<Array<Date>> {

        return [[]];
    }


    constructor(
        private workingHours = '0-30 * * * *',
        private excludeIntervals?,
        private excludePoints?,
        private appointments?,
        private scheduleTimeUnit?
    ) {}

    cronTest() {
    }

    queryDate() {

    }
}

export module Schedule {
    export enum DescMode {
        OPEN,
        CLOSED
    }
    export enum TimeIntervalStatus {
        APPOINTED,
        FREE,
        OUT_OF_SCEDULE,
        EXCLUDED_INTERVAL,
        EXCLUDED_POINT

    }
    export class TimeInterval {
        constructor (
            private start: Date,
            private end: Date,
            private status: Schedule.TimeIntervalStatus
        ) {}
    }

}
