function solve() {
    let text = document.getElementById('text').value;
    let convert = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');
    text = text.toLowerCase();

    if (convert === 'Camel Case') {
        result.textContent =  text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    } else if (convert === 'Pascal Case') {
        result.textContent = (text.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
    } else {
        result.textContent = 'Error!';
    }
}