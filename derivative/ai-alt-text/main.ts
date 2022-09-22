const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    const banana = require("@banana-dev/banana-dev")
    const apiKey = await rowy.secrets.get("banana");
    const modelKey = "carrot"
    const modelParameters = {
        // "text": "which sport is being played?", // Uncomment this parameter to ask prompted questions
        "imageURL": row.image[0].downloadURL
    }
    const out = await banana.run(apiKey, modelKey, modelParameters)
    return out["modelOutputs"][0].caption
}