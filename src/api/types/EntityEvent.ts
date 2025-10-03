/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * Event representing some type of entity change.
 */
export interface EntityEvent {
    eventType?: EntityEvent.EventType;
    time?: string;
    entity?: Lattice.Entity;
}

export namespace EntityEvent {
    export type EventType =
        | "EVENT_TYPE_INVALID"
        | "EVENT_TYPE_CREATED"
        | "EVENT_TYPE_UPDATE"
        | "EVENT_TYPE_DELETED"
        | "EVENT_TYPE_PREEXISTING"
        | "EVENT_TYPE_POST_EXPIRY_OVERRIDE";
    export const EventType = {
        EventTypeInvalid: "EVENT_TYPE_INVALID",
        EventTypeCreated: "EVENT_TYPE_CREATED",
        EventTypeUpdate: "EVENT_TYPE_UPDATE",
        EventTypeDeleted: "EVENT_TYPE_DELETED",
        EventTypePreexisting: "EVENT_TYPE_PREEXISTING",
        EventTypePostExpiryOverride: "EVENT_TYPE_POST_EXPIRY_OVERRIDE",
    } as const;
}
