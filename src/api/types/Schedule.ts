/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * A Schedule associated with this entity
 */
export interface Schedule {
    /** expression that represents this schedule's "ON" state */
    windows?: Lattice.CronWindow[];
    /** A unique identifier for this schedule. */
    scheduleId?: string;
    /** The schedule type */
    scheduleType?: Schedule.ScheduleType;
}

export namespace Schedule {
    /**
     * The schedule type
     */
    export type ScheduleType =
        | "SCHEDULE_TYPE_INVALID"
        | "SCHEDULE_TYPE_ZONE_ENABLED"
        | "SCHEDULE_TYPE_ZONE_TEMP_ENABLED";
    export const ScheduleType = {
        ScheduleTypeInvalid: "SCHEDULE_TYPE_INVALID",
        ScheduleTypeZoneEnabled: "SCHEDULE_TYPE_ZONE_ENABLED",
        ScheduleTypeZoneTempEnabled: "SCHEDULE_TYPE_ZONE_TEMP_ENABLED",
    } as const;
}
