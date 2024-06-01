function alternateSort(arr) {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    const result = [];
    while (start <= end) {
        if (start === end) {
            result.push(arr[start]);
        } else {
            result.push(arr[start]);
            result.push(arr[end]);
        }
        start++;
        end--;
    }
    return result;
}