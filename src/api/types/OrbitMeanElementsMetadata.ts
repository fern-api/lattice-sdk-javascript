/**
 * This file was auto-generated from our API Definition.
 */

export interface OrbitMeanElementsMetadata {
    /** Creation date/time in UTC */
    creationDate?: string;
    /** Creating agency or operator */
    originator?: string;
    /** ID that uniquely identifies a message from a given originator. */
    messageId?: string;
    /** Reference frame, assumed to be Earth-centered */
    refFrame?: OrbitMeanElementsMetadata.RefFrame;
    /** Reference frame epoch in UTC - mandatory only if not intrinsic to frame definition */
    refFrameEpoch?: string;
    meanElementTheory?: OrbitMeanElementsMetadata.MeanElementTheory;
}

export namespace OrbitMeanElementsMetadata {
    /**
     * Reference frame, assumed to be Earth-centered
     */
    export type RefFrame = "ECI_REFERENCE_FRAME_INVALID" | "ECI_REFERENCE_FRAME_TEME";
    export const RefFrame = {
        EciReferenceFrameInvalid: "ECI_REFERENCE_FRAME_INVALID",
        EciReferenceFrameTeme: "ECI_REFERENCE_FRAME_TEME",
    } as const;
    export type MeanElementTheory = "MEAN_ELEMENT_THEORY_INVALID" | "MEAN_ELEMENT_THEORY_SGP4";
    export const MeanElementTheory = {
        MeanElementTheoryInvalid: "MEAN_ELEMENT_THEORY_INVALID",
        MeanElementTheorySgp4: "MEAN_ELEMENT_THEORY_SGP4",
    } as const;
}
