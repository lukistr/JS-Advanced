function increasingArr(arr) {
    let arr2 = [];
    if (arr.length > 0) {
        arr2 = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (arr2[arr2.length - 1] <= arr[i]) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
}