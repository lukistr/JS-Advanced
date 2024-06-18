function displayArgumentInfo(...args) {
    let typeCounts = {};
    let typeOrder = {};

    args.forEach((arg, index) => {
        let argType = typeof arg;
        console.log(`${argType}: ${arg}`);

        if (typeCounts[argType]) {
            typeCounts[argType]++;
        } else {
            typeCounts[argType] = 1;
            typeOrder[argType] = index;
        }
    });

    let sortedTypes = Object.entries(typeCounts).sort((a, b) => {
        if (b[1] === a[1]) {
            return typeOrder[a[0]] - typeOrder[b[0]];
        }
        return b[1] - a[1];
    });

    sortedTypes.forEach(([type, count]) => {
        console.log(`${type} = ${count}`);
    });
}

displayArgumentInfo(10, "hello", 3.14, true, "world", 42, 10);
