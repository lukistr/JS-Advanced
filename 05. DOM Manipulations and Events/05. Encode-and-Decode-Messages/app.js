function encodeAndDecodeMessages() {
    const btns = document.getElementsByTagName("button");

    btns[0].addEventListener('click', coding);
    btns[1].addEventListener('click', decoding);

    function coding() {
        const source = this.parentElement.getElementsByTagName("textarea")[0];
        const destination = document.getElementsByTagName("textarea")[1];
        let message = "";
        for (i = 0; i < source.value.length; i++) {
            let asciiValue = source.value[i].charCodeAt(0) + 1;
            message += String.fromCharCode(asciiValue);
        }
        source.value = "";
        destination.value = message;
    }

    function decoding() {
        const source = this.parentElement.getElementsByTagName("textarea")[0];
        let message = "";
        for (i = 0; i < source.value.length; i++) {
            let asciiValue = source.value[i].charCodeAt(0) - 1;
            message += String.fromCharCode(asciiValue);
        }
        source.value = message;
    }
}