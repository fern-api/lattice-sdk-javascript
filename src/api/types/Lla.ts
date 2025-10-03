/**
 * This file was auto-generated from our API Definition.
 */

export interface Lla {
    lon?: number;
    lat?: number;
    alt?: number;
    is2d?: boolean;
    /**
     * Meaning of alt.
     *  altitude in meters above either WGS84 or EGM96, use altitude_reference to
     *  determine what zero means.
     */
    altitudeReference?: Lla.AltitudeReference;
}

export namespace Lla {
    /**
     * Meaning of alt.
     *  altitude in meters above either WGS84 or EGM96, use altitude_reference to
     *  determine what zero means.
     */
    export type AltitudeReference =
        | "ALTITUDE_REFERENCE_INVALID"
        | "ALTITUDE_REFERENCE_HEIGHT_ABOVE_WGS84"
        | "ALTITUDE_REFERENCE_HEIGHT_ABOVE_EGM96"
        | "ALTITUDE_REFERENCE_UNKNOWN"
        | "ALTITUDE_REFERENCE_BAROMETRIC"
        | "ALTITUDE_REFERENCE_ABOVE_SEA_FLOOR"
        | "ALTITUDE_REFERENCE_BELOW_SEA_SURFACE";
    export const AltitudeReference = {
        AltitudeReferenceInvalid: "ALTITUDE_REFERENCE_INVALID",
        AltitudeReferenceHeightAboveWgs84: "ALTITUDE_REFERENCE_HEIGHT_ABOVE_WGS84",
        AltitudeReferenceHeightAboveEgm96: "ALTITUDE_REFERENCE_HEIGHT_ABOVE_EGM96",
        AltitudeReferenceUnknown: "ALTITUDE_REFERENCE_UNKNOWN",
        AltitudeReferenceBarometric: "ALTITUDE_REFERENCE_BAROMETRIC",
        AltitudeReferenceAboveSeaFloor: "ALTITUDE_REFERENCE_ABOVE_SEA_FLOOR",
        AltitudeReferenceBelowSeaSurface: "ALTITUDE_REFERENCE_BELOW_SEA_SURFACE",
    } as const;
}
