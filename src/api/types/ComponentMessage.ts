/**
 * This file was auto-generated from our API Definition.
 */

/**
 * A message describing the component's health status.
 */
export interface ComponentMessage {
    /** The status associated with this message. */
    status?: ComponentMessage.Status;
    /** The human-readable content of the message. */
    message?: string;
}

export namespace ComponentMessage {
    /**
     * The status associated with this message.
     */
    export type Status =
        | "HEALTH_STATUS_INVALID"
        | "HEALTH_STATUS_HEALTHY"
        | "HEALTH_STATUS_WARN"
        | "HEALTH_STATUS_FAIL"
        | "HEALTH_STATUS_OFFLINE"
        | "HEALTH_STATUS_NOT_READY";
    export const Status = {
        HealthStatusInvalid: "HEALTH_STATUS_INVALID",
        HealthStatusHealthy: "HEALTH_STATUS_HEALTHY",
        HealthStatusWarn: "HEALTH_STATUS_WARN",
        HealthStatusFail: "HEALTH_STATUS_FAIL",
        HealthStatusOffline: "HEALTH_STATUS_OFFLINE",
        HealthStatusNotReady: "HEALTH_STATUS_NOT_READY",
    } as const;
}
