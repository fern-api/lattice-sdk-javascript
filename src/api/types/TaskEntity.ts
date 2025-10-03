/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * Wrapper of an entity passed in Tasking, used to hold an additional information, and as a future extension point.
 */
export interface TaskEntity {
    /** The wrapped entity-manager entity. */
    entity?: Lattice.Entity;
    /** Indicates that this entity was generated from a snapshot of a live entity. */
    snapshot?: boolean;
}
