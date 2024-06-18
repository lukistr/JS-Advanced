function sorting(numsArr, sortStr) {
    let result;
    if (sortStr === 'asc') {
        result = numsArr.sort((a, b) => a - b);
    } else {
        result = numsArr.sort((a, b) => b - a);
    }
    return result;
}

sorting([14, 7, 17, 6, 8], 'asc');
sorting([14, 7, 17, 6, 8], 'desc');