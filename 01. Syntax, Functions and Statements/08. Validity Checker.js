function validChecker(x1, y1, x2, y2) {
    let check1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let check2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let check = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (check1 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (check2 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if (check % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}