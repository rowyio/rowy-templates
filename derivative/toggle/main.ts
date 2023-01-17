const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    if (row.toggle) return "toggle is on 😁!";
    if (row.toggle === false) return "toggle is off 😩";
    else return "toggle is not set"

}