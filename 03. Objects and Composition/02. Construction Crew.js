function worker(input) {
    if (input['dizziness']) {
        input.levelOfHydrated = 0.1 * Number(input['weight']) * Number(input['experience']) + Number(input['levelOfHydrated']);
        input.dizziness = false;
    }

    return input;
}

console.log(worker({weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true}));