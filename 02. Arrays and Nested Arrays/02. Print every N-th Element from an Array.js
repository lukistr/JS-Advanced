function printNElement(arr, n) {
    let newarr = [];
    for (let i = 0; i < arr.length; i += n) {
        newarr.push(arr[i]);
    }
    return newarr;
}