function checkDiagonalsAndModifyMatrix(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let n = matrix.length;

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j && i !== n - 1 - j) {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}