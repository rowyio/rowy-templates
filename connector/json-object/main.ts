const connectorFn: Connector = async ({ query, row, user }) => {
    const response = await fetch("https://raw.githubusercontent.com/DevExpress/device-specs/master/viewport-sizes.json")
    const data = await response.json()
    const devices = []
    Object.keys(data).forEach(i => {
        const { name, landscapeWidth, portraitWidth } = data[i]
        if (name.toLowerCase().includes(query.toLowerCase())) {
            const device = { id: i, width: portraitWidth, height: landscapeWidth, name }
            devices.push(device)
        }
    })
    return devices
};