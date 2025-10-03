/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * Individual sensor configuration.
 */
export interface Sensor {
    /** This generally is used to indicate a specific type at a more detailed granularity. E.g. COMInt or LWIR */
    sensorId?: string;
    operationalState?: Sensor.OperationalState;
    /** The type of sensor */
    sensorType?: Sensor.SensorType;
    /** A human readable description of the sensor */
    sensorDescription?: string;
    /** RF configuration details of the sensor */
    rfConfiguraton?: Lattice.RfConfiguration;
    /** Time of the latest detection from the sensor */
    lastDetectionTimestamp?: string;
    /** Multiple fields of view for a single sensor component */
    fieldsOfView?: Lattice.FieldOfView[];
}

export namespace Sensor {
    export type OperationalState =
        | "OPERATIONAL_STATE_INVALID"
        | "OPERATIONAL_STATE_OFF"
        | "OPERATIONAL_STATE_NON_OPERATIONAL"
        | "OPERATIONAL_STATE_DEGRADED"
        | "OPERATIONAL_STATE_OPERATIONAL"
        | "OPERATIONAL_STATE_DENIED";
    export const OperationalState = {
        OperationalStateInvalid: "OPERATIONAL_STATE_INVALID",
        OperationalStateOff: "OPERATIONAL_STATE_OFF",
        OperationalStateNonOperational: "OPERATIONAL_STATE_NON_OPERATIONAL",
        OperationalStateDegraded: "OPERATIONAL_STATE_DEGRADED",
        OperationalStateOperational: "OPERATIONAL_STATE_OPERATIONAL",
        OperationalStateDenied: "OPERATIONAL_STATE_DENIED",
    } as const;
    /**
     * The type of sensor
     */
    export type SensorType =
        | "SENSOR_TYPE_INVALID"
        | "SENSOR_TYPE_RADAR"
        | "SENSOR_TYPE_CAMERA"
        | "SENSOR_TYPE_TRANSPONDER"
        | "SENSOR_TYPE_RF"
        | "SENSOR_TYPE_GPS"
        | "SENSOR_TYPE_PTU_POS"
        | "SENSOR_TYPE_PERIMETER"
        | "SENSOR_TYPE_SONAR";
    export const SensorType = {
        SensorTypeInvalid: "SENSOR_TYPE_INVALID",
        SensorTypeRadar: "SENSOR_TYPE_RADAR",
        SensorTypeCamera: "SENSOR_TYPE_CAMERA",
        SensorTypeTransponder: "SENSOR_TYPE_TRANSPONDER",
        SensorTypeRf: "SENSOR_TYPE_RF",
        SensorTypeGps: "SENSOR_TYPE_GPS",
        SensorTypePtuPos: "SENSOR_TYPE_PTU_POS",
        SensorTypePerimeter: "SENSOR_TYPE_PERIMETER",
        SensorTypeSonar: "SENSOR_TYPE_SONAR",
    } as const;
}
