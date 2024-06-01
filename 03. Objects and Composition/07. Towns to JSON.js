function townJson(input) {
    let rows = input.map(row => row.trim().split(/\s*\|\s*/).filter(cell => cell));
    let data = [];

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let town = row[0];
        let latitude = Number(Number(row[1]).toFixed(2));
        let longitude = Number(Number(row[2]).toFixed(2));
        data.push({ Town: town, Latitude: latitude, Longitude: longitude });
    }

    return JSON.stringify(data);
}

console.log(townJson(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']));