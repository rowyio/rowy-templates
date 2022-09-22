const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    if (!row.movieId || row.movieId?.length == 0) return undefined;
    const metascraper = require('metascraper')([
        require('metascraper-description')(),
        require('metascraper-image')(),
        require('metascraper-title')(),
        require('metascraper-url')()])
    const url = "https://www.imdb.com/title/" + row.movieId
    const response = await fetch(url)
    const html = await response.text();
    return await metascraper({ html, url });
}