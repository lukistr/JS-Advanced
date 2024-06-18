function calculator() {
    let firstElement, secondElement, resultElement;

    return {
        init(selector1, selector2, resultSelector) {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add() {
            const num1 = parseFloat(firstElement.value) || 0;
            const num2 = parseFloat(secondElement.value) || 0;
            resultElement.value = num1 + num2;
        },
        subtract() {
            const num1 = parseFloat(firstElement.value) || 0;
            const num2 = parseFloat(secondElement.value) || 0;
            resultElement.value = num1 - num2;
        }
    };
}
