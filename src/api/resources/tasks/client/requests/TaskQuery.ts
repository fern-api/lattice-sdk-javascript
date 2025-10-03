/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface TaskQuery {
    /** If set, returns results starting from the given pageToken. */
    pageToken?: string;
    /**
     * If present matches Tasks with this parent Task ID.
     * Note: this is mutually exclusive with all other query parameters, i.e., either provide parent Task ID, or
     * any of the remaining parameters, but not both.
     */
    parentTaskId?: string;
    statusFilter?: TaskQuery.StatusFilter;
    /** If provided, only provides Tasks updated within the time range. */
    updateTimeRange?: TaskQuery.UpdateTimeRange;
}

export namespace TaskQuery {
    export interface StatusFilter {
        /** Status of the Task to filter by, inclusive. */
        status?: StatusFilter.Status;
    }

    export namespace StatusFilter {
        /**
         * Status of the Task to filter by, inclusive.
         */
        export type Status =
            | "STATUS_INVALID"
            | "STATUS_CREATED"
            | "STATUS_SCHEDULED_IN_MANAGER"
            | "STATUS_SENT"
            | "STATUS_MACHINE_RECEIPT"
            | "STATUS_ACK"
            | "STATUS_WILCO"
            | "STATUS_EXECUTING"
            | "STATUS_WAITING_FOR_UPDATE"
            | "STATUS_DONE_OK"
            | "STATUS_DONE_NOT_OK"
            | "STATUS_REPLACED"
            | "STATUS_CANCEL_REQUESTED"
            | "STATUS_COMPLETE_REQUESTED"
            | "STATUS_VERSION_REJECTED";
        export const Status = {
            StatusInvalid: "STATUS_INVALID",
            StatusCreated: "STATUS_CREATED",
            StatusScheduledInManager: "STATUS_SCHEDULED_IN_MANAGER",
            StatusSent: "STATUS_SENT",
            StatusMachineReceipt: "STATUS_MACHINE_RECEIPT",
            StatusAck: "STATUS_ACK",
            StatusWilco: "STATUS_WILCO",
            StatusExecuting: "STATUS_EXECUTING",
            StatusWaitingForUpdate: "STATUS_WAITING_FOR_UPDATE",
            StatusDoneOk: "STATUS_DONE_OK",
            StatusDoneNotOk: "STATUS_DONE_NOT_OK",
            StatusReplaced: "STATUS_REPLACED",
            StatusCancelRequested: "STATUS_CANCEL_REQUESTED",
            StatusCompleteRequested: "STATUS_COMPLETE_REQUESTED",
            StatusVersionRejected: "STATUS_VERSION_REJECTED",
        } as const;
    }

    /**
     * If provided, only provides Tasks updated within the time range.
     */
    export interface UpdateTimeRange {
        /** If provided, returns Tasks only updated after this time. */
        startTime?: string;
        /** If provided, returns Tasks only updated before this time. */
        endTime?: string;
    }
}
