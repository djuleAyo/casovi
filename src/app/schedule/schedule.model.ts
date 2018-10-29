import { Appointment } from '../appointment/appointment.model';

import * as CronParser from 'cron-parser';


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

    constructor(
        private workingHours = '0-30 * * * *',
        private excludeIntervals?,
        private excludePoints?,
        private appointments?,
        private scheduleTimeUnit?
    ) {}


    getSchedule(start?: Date, end?: Date): Array<Schedule.TimeInterval> {
        // compute working dates
        const workingDates = Schedule.toDateArray(this.workingHours, start, end);

        this.find(workingDates, '0-30 0 * * *',
            (found) => {found['state'] = 'EXCLUDED_INTERVAL'; });

        return workingDates;
    }
    find(searchIn: Array<Date>, searchFor: string, cb: (found?, index?) => any) {
        const candidates = Schedule.toDateArray(searchFor);

        for (const x of searchIn) {
            for (const y of candidates) {
                if (x.getTime() === y.getTime()) {
                    cb(x);
                }
            }
        }
    }

    cronTest() {
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
