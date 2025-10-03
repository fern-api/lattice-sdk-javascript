/**
 * This file was auto-generated from our API Definition.
 */

export interface MediaItem {
    type?: MediaItem.Type;
    /** The path, relative to the environment base URL, where media related to an entity can be accessed */
    relativePath?: string;
}

export namespace MediaItem {
    export type Type = "MEDIA_TYPE_INVALID" | "MEDIA_TYPE_IMAGE" | "MEDIA_TYPE_VIDEO";
    export const Type = {
        MediaTypeInvalid: "MEDIA_TYPE_INVALID",
        MediaTypeImage: "MEDIA_TYPE_IMAGE",
        MediaTypeVideo: "MEDIA_TYPE_VIDEO",
    } as const;
}
