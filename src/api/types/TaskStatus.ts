/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../index.js";

/**
 * TaskStatus is contains information regarding the status of a Task at any given time. Can include related information
 *   such as any progress towards Task completion, or any associated results if Task completed.
 */
export interface TaskStatus {
    /** Status of the Task. */
    status?: TaskStatus.Status;
    /** Any errors associated with the Task. */
    taskError?: Lattice.TaskError;
    /** Any incremental progress on the Task, should be from the tasks/v* /progress folder. */
    progress?: Lattice.GoogleProtobufAny;
    /** Any final result of the Task, should be from tasks/v* /result folder. */
    result?: Lattice.GoogleProtobufAny;
    /** Time the Task began execution, may not be known even for executing Tasks. */
    startTime?: string;
    /** Any estimate for how the Task will progress, should be from tasks/v* /estimates folder. */
    estimate?: Lattice.GoogleProtobufAny;
    /** Any allocated agents of the Task. */
    allocation?: Lattice.Allocation;
}

export namespace TaskStatus {
    /**
     * Status of the Task.
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
