/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

export interface CorrelationMetadata {
    /** Who or what added this entity to the (de)correlation. */
    provenance?: Lattice.Provenance;
    /**
     * Indicates how the correlation will be distributed. Because a correlation is composed of
     *  multiple secondaries, each of which may have been correlated with different replication
     *  modes, the distribution of the correlation is composed of distributions of the individual
     *  entities within the correlation set.
     *  For example, if there are two secondary entities A and B correlated against a primary C,
     *  with A having been correlated globally and B having been correlated locally, then the
     *  correlation set that is distributed globally than what is known locally in the node.
     */
    replicationMode?: CorrelationMetadata.ReplicationMode;
    /** What type of (de)correlation was this entity added with. */
    type?: CorrelationMetadata.Type;
}

export namespace CorrelationMetadata {
    /**
     * Indicates how the correlation will be distributed. Because a correlation is composed of
     *  multiple secondaries, each of which may have been correlated with different replication
     *  modes, the distribution of the correlation is composed of distributions of the individual
     *  entities within the correlation set.
     *  For example, if there are two secondary entities A and B correlated against a primary C,
     *  with A having been correlated globally and B having been correlated locally, then the
     *  correlation set that is distributed globally than what is known locally in the node.
     */
    export type ReplicationMode =
        | "CORRELATION_REPLICATION_MODE_INVALID"
        | "CORRELATION_REPLICATION_MODE_LOCAL"
        | "CORRELATION_REPLICATION_MODE_GLOBAL";
    export const ReplicationMode = {
        CorrelationReplicationModeInvalid: "CORRELATION_REPLICATION_MODE_INVALID",
        CorrelationReplicationModeLocal: "CORRELATION_REPLICATION_MODE_LOCAL",
        CorrelationReplicationModeGlobal: "CORRELATION_REPLICATION_MODE_GLOBAL",
    } as const;
    /**
     * What type of (de)correlation was this entity added with.
     */
    export type Type = "CORRELATION_TYPE_INVALID" | "CORRELATION_TYPE_MANUAL" | "CORRELATION_TYPE_AUTOMATED";
    export const Type = {
        CorrelationTypeInvalid: "CORRELATION_TYPE_INVALID",
        CorrelationTypeManual: "CORRELATION_TYPE_MANUAL",
        CorrelationTypeAutomated: "CORRELATION_TYPE_AUTOMATED",
    } as const;
}
