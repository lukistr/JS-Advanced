function gcd(num1, num2) {
    let lowNum = Math.min(num1, num2);
    let gcdNum = 0;
    for (let i = lowNum; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0){
            console.log(i);
            i = 0;
        }
    }
}