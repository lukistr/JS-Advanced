function sortStrings(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    arr.forEach(element => console.log(element));
}