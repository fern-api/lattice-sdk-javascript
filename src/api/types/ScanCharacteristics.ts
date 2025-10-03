/**
 * This file was auto-generated from our API Definition.
 */

/**
 * A component that describes the scanning characteristics of a signal
 */
export interface ScanCharacteristics {
    scanType?: ScanCharacteristics.ScanType;
    scanPeriodS?: number;
}

export namespace ScanCharacteristics {
    export type ScanType =
        | "SCAN_TYPE_INVALID"
        | "SCAN_TYPE_CIRCULAR"
        | "SCAN_TYPE_BIDIRECTIONAL_HORIZONTAL_SECTOR"
        | "SCAN_TYPE_BIDIRECTIONAL_VERTICAL_SECTOR"
        | "SCAN_TYPE_NON_SCANNING"
        | "SCAN_TYPE_IRREGULAR"
        | "SCAN_TYPE_CONICAL"
        | "SCAN_TYPE_LOBE_SWITCHING"
        | "SCAN_TYPE_RASTER"
        | "SCAN_TYPE_CIRCULAR_VERTICAL_SECTOR"
        | "SCAN_TYPE_CIRCULAR_CONICAL"
        | "SCAN_TYPE_SECTOR_CONICAL"
        | "SCAN_TYPE_AGILE_BEAM"
        | "SCAN_TYPE_UNIDIRECTIONAL_VERTICAL_SECTOR"
        | "SCAN_TYPE_UNIDIRECTIONAL_HORIZONTAL_SECTOR"
        | "SCAN_TYPE_UNIDIRECTIONAL_SECTOR"
        | "SCAN_TYPE_BIDIRECTIONAL_SECTOR";
    export const ScanType = {
        ScanTypeInvalid: "SCAN_TYPE_INVALID",
        ScanTypeCircular: "SCAN_TYPE_CIRCULAR",
        ScanTypeBidirectionalHorizontalSector: "SCAN_TYPE_BIDIRECTIONAL_HORIZONTAL_SECTOR",
        ScanTypeBidirectionalVerticalSector: "SCAN_TYPE_BIDIRECTIONAL_VERTICAL_SECTOR",
        ScanTypeNonScanning: "SCAN_TYPE_NON_SCANNING",
        ScanTypeIrregular: "SCAN_TYPE_IRREGULAR",
        ScanTypeConical: "SCAN_TYPE_CONICAL",
        ScanTypeLobeSwitching: "SCAN_TYPE_LOBE_SWITCHING",
        ScanTypeRaster: "SCAN_TYPE_RASTER",
        ScanTypeCircularVerticalSector: "SCAN_TYPE_CIRCULAR_VERTICAL_SECTOR",
        ScanTypeCircularConical: "SCAN_TYPE_CIRCULAR_CONICAL",
        ScanTypeSectorConical: "SCAN_TYPE_SECTOR_CONICAL",
        ScanTypeAgileBeam: "SCAN_TYPE_AGILE_BEAM",
        ScanTypeUnidirectionalVerticalSector: "SCAN_TYPE_UNIDIRECTIONAL_VERTICAL_SECTOR",
        ScanTypeUnidirectionalHorizontalSector: "SCAN_TYPE_UNIDIRECTIONAL_HORIZONTAL_SECTOR",
        ScanTypeUnidirectionalSector: "SCAN_TYPE_UNIDIRECTIONAL_SECTOR",
        ScanTypeBidirectionalSector: "SCAN_TYPE_BIDIRECTIONAL_SECTOR",
    } as const;
}
