function getFibonacciGenerator() {
    let a = 1, b = 1;

    return function() {
        let next = a;
        [a, b] = [b, a + b];
        return next;
    };
}

const nextFib = getFibonacciGenerator();

console.log(nextFib()); // 0
console.log(nextFib()); // 1
console.log(nextFib()); // 1
console.log(nextFib()); // 2
console.log(nextFib()); // 3
console.log(nextFib()); // 5
console.log(nextFib()); // 8
