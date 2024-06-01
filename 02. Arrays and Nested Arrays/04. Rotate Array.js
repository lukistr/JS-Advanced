function rotateArr(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let lastElement = arr.pop()
        arr.unshift(lastElement);
    }
    return arr.join(' ');
}