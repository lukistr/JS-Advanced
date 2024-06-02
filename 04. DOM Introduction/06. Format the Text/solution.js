function solve() {
    const inputText = document.getElementById('input').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0).map(sentence => sentence.trim() + '.');

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphText = sentences.slice(i, i + 3).join(' ');
        const paragraphElement = `<p>${paragraphText}</p>`;
        outputDiv.innerHTML += paragraphElement;
    }
}