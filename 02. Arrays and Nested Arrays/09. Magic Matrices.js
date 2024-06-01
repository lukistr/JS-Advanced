function isMagical(matrix) {
    const referenceSum = matrix[0].reduce((sum, value) => sum + value, 0);

    for (let row of matrix) {
        const rowSum = row.reduce((sum, value) => sum + value, 0);
        if (rowSum !== referenceSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== referenceSum) {
            return false;
        }
    }

    return true;
}