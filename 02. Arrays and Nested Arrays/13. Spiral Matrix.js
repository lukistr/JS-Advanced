function generateSpiralMatrix(rows, cols) {
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let value = 1;
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = value++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = value++;
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = value++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = value++;
            }
            left++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}