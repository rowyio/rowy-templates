import * as admin from "firebase-admin";
const auth = admin.auth();

import callableAction from "rowy-actions";
export const SuspendUser = callableAction(async ({ row, callableData }) => {
    const { action } = callableData;
    const { firstName, email } = row;
    // switch statement can be used to perform different event based on the state of the action cell
    const user = await auth.getUserByEmail(email);
    switch (action) {
        case "run":
        case "redo":
            // both run and redo preform the same action; disabling the user's account from firebase auth
            await auth.updateUser(user.uid, { disabled: true });
            return {
                success: true, // return if the operation was success
                message: `${firstName}'s account has been disabled`, // message shown in snackbar on the rowy ui after the completion of action
                cellStatus: "disabled", // optional cell label, to indicate the latest state of the cell/row
                newState: "undo", // "redo" | "undo" | "disabled" are options set the behavior of action button next time it runs
            };
        case "undo":
            // re-enable user's firebase account
            await auth.updateUser(user.uid, { disabled: false });
            return {
                success: true, // return if the operation was success
                message: `${firstName}'s account has been re-enabled`, // message shown in snackbar on the rowy ui after the completion of action
                cellStatus: "active", // optional cell label, to indicate the latest state of the cell/row
                newState: "redo", // "redo" | "undo" | "disabled" are options set the behavior of action button next time it runs
            };
        default:
            // return error message when no action is preformed
            return {
                success: false,
                message: "Reached undefined state",
                newState: "redo",
            };
    }
});