const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    const mapsAPISecret = await rowy.secrets.get("googlemaps")
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${row.geolocation.latitude},${row.geolocation.longitude}&key=${mapsAPISecret}`)
    const json = await res.json();
    return json;
}