function robotManager() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function manager(instruction) {
        const [command, item, quantityStr] = instruction.split(' ');
        const quantity = Number(quantityStr);

        if (command === 'restock') {
            stock[item] += quantity;
            return 'Success';
        }

        if (command === 'prepare') {
            const recipe = recipes[item];
            for (const ingredient in recipe) {
                if (stock[ingredient] < recipe[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const ingredient in recipe) {
                stock[ingredient] -= recipe[ingredient] * quantity;
            }
            return 'Success';
        }

        if (command === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}

const manager = robotManager();

console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=9 fat=0 flavour=8
console.log(manager('prepare apple 1')); // Error: not enough flavour in stock
