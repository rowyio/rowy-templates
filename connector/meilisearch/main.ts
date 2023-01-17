const connectorFn: Connector = async ({ query, row, user }) => {
    const index = "users"
    const meilisearch = await rowy.secrets.get("meilisearch")
    const { host, apiKey } = meilisearch
    const resp = await fetch(`${host}/indexes/${index}/search`, {
        body: JSON.stringify({ q: query }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        method: "POST"
    })
    const data = await resp.json()
    return data.hits
};