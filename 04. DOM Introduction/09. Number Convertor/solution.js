function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', onClick);

    const optionMenu = document.getElementById('selectMenuTo');
    const options = [
        { text: 'Binary', value: 'binary' },
        { text: 'Hexadecimal', value: 'hexadecimal' }
    ];

    options.forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option.value;
        optElement.textContent = option.text;
        optionMenu.appendChild(optElement);
    });

    function onClick() {
        const decimalInput = document.getElementById('input').value;
        const toSelect = document.getElementById('selectMenuTo').value;
        const resultField = document.getElementById('result');

        const decimalNumber = parseInt(decimalInput, 10);
        let result;

        switch (toSelect) {
            case 'binary':
                result = decimalNumber.toString(2);
                break;
            case 'hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
            default:
                result = 'Please select a conversion type';
                break;
        }

        resultField.value = result;
    }
}