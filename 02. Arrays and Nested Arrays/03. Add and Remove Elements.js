function addRemove(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add'){
            arr2.push(i + 1);
        } else if (arr[i] === 'remove'){
            arr2.pop();
        }
    }
    if (arr2.length === 0) {
        return 'Empty';
    } else {
        return arr2.join('\n');
    }
}