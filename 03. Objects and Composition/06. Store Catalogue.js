function storeCatalogue(input) {
    let productArray = input.map(product => {
        let [name, price] = product.split(' : ');
        return { name, price: Number(price) };
    });

    productArray.sort((a, b) => a.name.localeCompare(b.name));

    let groupedProducts = {};
    productArray.forEach(product => {
        let initial = product.name[0];
        if (!groupedProducts[initial]) {
            groupedProducts[initial] = [];
        }
        groupedProducts[initial].push(product);
    });

    for (let initial in groupedProducts) {
        console.log(initial);
        groupedProducts[initial].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);