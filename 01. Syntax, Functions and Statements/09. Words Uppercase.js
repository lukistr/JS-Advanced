function wordUppercase(str) {
    const regex = /\w+/g;
    const found = str.match(regex);
    for (let i = 0; i < found.length; i++) {
      found[i] = found[i].toUpperCase();
    }
    console.log(found.join(', '));
}