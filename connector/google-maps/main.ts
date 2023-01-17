const connectorFn: Connector = async ({ query, row, user }) => {
    const mapsKey = await rowy.secrets.get('googlemaps')
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${query}&radius=1000&type=subway_station&location=48.202360%2C16.349060&key=${mapsKey}`
    );
    const { results } = await response.json();
    return results;
};
