const { roles } = row;
const user = await auth.getUser(ref.id);
const customClaims = {
    ...user.customClaims,
    roles,
};
await auth.setCustomUserClaims(ref.id, customClaims);

return {
    success: true,
    status: `updated roles:${roles.join(", ")}`,
    message: `${row.firstName} has ${roles.join(", ")} roles now`,
    cellValue: {
        redo: true,
        status: `updated roles:${roles.join(", ")}`,
        completedAt: serverTimestamp(),
        meta: { ranBy: context.auth.token.email },
        undo: false,
    },
};