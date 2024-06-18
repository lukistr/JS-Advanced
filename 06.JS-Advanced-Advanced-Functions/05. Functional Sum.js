function add(num) {
    let state = 0;
    state += num;

    function sum(num) {
        state += num;
        console.log(state);
        return sum;
    }

    sum.toString = () => state;
    return sum;
}

console.log(add(1).toString())
console.log(add(1)(2)(3).toString()); // 6
console.log(add(5).toString()); // 11 (6 + 5)
