/*
function heroesInventory(input) {
    let heroes = {
        name: '',
        level: '',
        items: []
    }

    for (let i = 0; i < input.length; i++) {
        let name = input[i].split(' / ')[0];
        let level = Number(input[i].split(' / ')[1]);
        let items = input[i].split(' / ')[2];
        items = items.split(', ');
        heroes.name = name;
        heroes.level = level;
        for (let j = 0; j < items.length; j++) {
            heroes.items.push(items[j]);
        }
    }

    return JSON.stringify(heroes);
}
*/

function heroesInventory(input) {
    let result = [];

    for (const inputElement of input) {
        let [name, level, items] = inputElement.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        if (name !== '') {
            result.push({name, level, items});
        }
    }

    console.log(JSON.stringify(result))
}

console.log(heroesInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest,DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));