function sameNumber(input) {
    let sum = Number(String(input)[0]);
    let areSame = true;
    for (let i = 1; i < String(input).length; i++) {
        sum += Number(String(input)[i]);
        if (String(input)[i] !== String(input)[i - 1]) {
            areSame = false;
        }
    }
    console.log(areSame);
    console.log(sum);
}