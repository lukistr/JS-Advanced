function cookingNumbers(number, operator1, operator2, operator3, operator4, operator5) {
    let num = Number(number);
    let obj = {0: operator1, 1: operator2, 2: operator3, 3: operator4, 4: operator5};
    for (let i = 0; i < 5; i++) {
        if (obj[i] === "chop") {
            num /= 2;
        } else if (obj[i] === "dice") {
            num = Math.sqrt(num);
        } else if (obj[i] === "spice") {
            num += 1;
        } else if (obj[i] === "bake") {
            num *= 3;
        } else if (obj[i] === "fillet") {
            num *= 0.8;
        }
        console.log(num);
    }
}