/**
 * This file was auto-generated from our API Definition.
 */

/**
 * Determines the type of control area being represented by the geo-entity,
 *  in which an asset can, or cannot, operate.
 */
export interface ControlAreaDetails {
    type?: ControlAreaDetails.Type;
}

export namespace ControlAreaDetails {
    export type Type =
        | "CONTROL_AREA_TYPE_INVALID"
        | "CONTROL_AREA_TYPE_KEEP_IN_ZONE"
        | "CONTROL_AREA_TYPE_KEEP_OUT_ZONE"
        | "CONTROL_AREA_TYPE_DITCH_ZONE"
        | "CONTROL_AREA_TYPE_LOITER_ZONE";
    export const Type = {
        ControlAreaTypeInvalid: "CONTROL_AREA_TYPE_INVALID",
        ControlAreaTypeKeepInZone: "CONTROL_AREA_TYPE_KEEP_IN_ZONE",
        ControlAreaTypeKeepOutZone: "CONTROL_AREA_TYPE_KEEP_OUT_ZONE",
        ControlAreaTypeDitchZone: "CONTROL_AREA_TYPE_DITCH_ZONE",
        ControlAreaTypeLoiterZone: "CONTROL_AREA_TYPE_LOITER_ZONE",
    } as const;
}
