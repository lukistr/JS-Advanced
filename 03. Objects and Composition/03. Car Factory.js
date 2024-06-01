function carFactory(input) {
    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    };
    let car_type = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' }
    };
    let car = {
        model: '',
        engine: {
            power: 90,
            volume: 1800
        },
        carriage: {
            type: '',
            color: ''
        },
        wheels: [13, 13, 13, 13]
    };

    car.model = input.model;
    if (input.power <= 90) {
        car.engine = engine.small;
    } else if (input.power <= 120) {
        car.engine = engine.normal;
    } else {
        car.engine = engine.monster;
    }
    car.carriage.color = input.color;
    car.carriage.type = input.carriage;
    if (input.wheelsize % 2 === 0) {
        car.wheels = [input.wheelsize - 1, input.wheelsize - 1, input.wheelsize - 1, input.wheelsize - 1];
    } else {
        car.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];
    }

    return car;
}

console.log(carFactory({model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 16}));