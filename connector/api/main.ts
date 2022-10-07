const apiConnector: Connector = async ({ query, row, user }) => {
    const response = await fetch(`https://api.boardgameatlas.com/api/search?name=${query}&client_id=JLBr5npPhV`)
    const { games } = await response.json()
    return games
};