const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    const unsplashSecret = await rowy.secrets.get("unsplash");
    const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${row.capital}%20${row.name}&client_id=${unsplashSecret}`
    );
    const json = await res.json();
    const url = json.results[0].urls.small;
    const img = await rowy.storage.upload.url(url, {
        fileName: row.name + ".jpg",
        folderPath: ref.path,
    });
    return [img];
}
