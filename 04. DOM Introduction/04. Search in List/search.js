function search() {
    const towns = document.getElementsByTagName('li');
    Array.from(towns);
    let srch = document.getElementById('searchText').value;
    let count = 0

    for (let i = 0; i < towns.length; i++) {
        towns[i].style.fontWeight = '';
        towns[i].style.textDecoration = '';
    }

    for (let i = 0; i < towns.length; i++) {
        if (towns[i].textContent.includes(srch)) {
             towns[i].style.fontWeight = 'bold';
             towns[i].style.textDecoration = 'underline';
             count++;
        }
    }
/*
    for (let i = 0; i < towns.length; i++) {
        if(towns[i].outerHTML.includes('bold')){
             console.log('Yes');
        }
    }
*/
    document.getElementById('result').textContent = `${count} matches found`;
}
