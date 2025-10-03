/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * A component that describes a geo-entity.
 */
export interface GeoDetails {
    type?: GeoDetails.Type;
    controlArea?: Lattice.ControlAreaDetails;
    acm?: Lattice.AcmDetails;
}

export namespace GeoDetails {
    export type Type =
        | "GEO_TYPE_INVALID"
        | "GEO_TYPE_GENERAL"
        | "GEO_TYPE_HAZARD"
        | "GEO_TYPE_EMERGENCY"
        | "GEO_TYPE_ENGAGEMENT_ZONE"
        | "GEO_TYPE_CONTROL_AREA"
        | "GEO_TYPE_BULLSEYE"
        | "GEO_TYPE_ACM";
    export const Type = {
        GeoTypeInvalid: "GEO_TYPE_INVALID",
        GeoTypeGeneral: "GEO_TYPE_GENERAL",
        GeoTypeHazard: "GEO_TYPE_HAZARD",
        GeoTypeEmergency: "GEO_TYPE_EMERGENCY",
        GeoTypeEngagementZone: "GEO_TYPE_ENGAGEMENT_ZONE",
        GeoTypeControlArea: "GEO_TYPE_CONTROL_AREA",
        GeoTypeBullseye: "GEO_TYPE_BULLSEYE",
        GeoTypeAcm: "GEO_TYPE_ACM",
    } as const;
}
