function productsTown(input) {
    let result = [];
    for (const inputElement of input) {
        let [town, product, price] = inputElement.split(' | ');
        price = Number(price);
        if (!result.hasOwnProperty(product)) {
            result[product] = {town, price};
        } else {
            if (result[product]['price'] > price) {
                result[product] = {town, price};
            }
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]['price']} (${result[key]['town']})`);
    }
}

/*
function productsTown(input) {
    let result = [];
    for (const inputElement of input) {
        let [town, product, price] = inputElement.split(' | ');
        price = Number(price);
        if (!result.hasOwnProperty(product)) {
            result[product] = [];
            result[product].push({town, price});
        } else {
            if (result[product][0]['price'] > price) {
                result[product][0] = {town, price};
            }
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key][0]['price']} (${result[key][0]['town']})`);
    }
}
*/

productsTown(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10'])
console.log('------------------------------------------')
productsTown(['Sofia City | Audi | 100000', 'Sofia City | BMW | 100000', 'Sofia City | Mitsubishi | 10000', 'Sofia City | Mercedes | 10000', 'Sofia City | NoOffenseToCarLovers | 0', 'Mexico City | Audi | 1000', 'Mexico City | BMW | 99999', 'Mexico City | Mitsubishi | 10000', 'New York City | Mitsubishi | 1000', 'Washington City | Mercedes | 1000'])