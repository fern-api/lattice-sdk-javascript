/**
 * This file was auto-generated from our API Definition.
 */

export interface AcmDetails {
    acmType?: AcmDetails.AcmType;
    /**
     * Used for loosely typed associations, such as assignment to a specific fires unit.
     *  Limit to 150 characters.
     */
    acmDescription?: string;
}

export namespace AcmDetails {
    export type AcmType = "ACM_DETAIL_TYPE_INVALID" | "ACM_DETAIL_TYPE_LANDING_ZONE";
    export const AcmType = {
        AcmDetailTypeInvalid: "ACM_DETAIL_TYPE_INVALID",
        AcmDetailTypeLandingZone: "ACM_DETAIL_TYPE_LANDING_ZONE",
    } as const;
}
