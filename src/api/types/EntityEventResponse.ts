/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

export interface EntityEventResponse {
    /** Long-poll session identifier. Use this token to resume polling on subsequent requests. */
    sessionToken?: string;
    entityEvents?: Lattice.EntityEvent[];
}
