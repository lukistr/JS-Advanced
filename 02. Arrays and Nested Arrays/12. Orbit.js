function createOrbits([width, height, x, y]) {
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    function isInBounds(row, col) {
        return row >= 0 && row < height && col >= 0 && col < width;
    }

    matrix[y][x] = 1;

    let value = 1;
    let changeOccurred;
    do {
        changeOccurred = false;
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                if (matrix[row][col] === value) {
                    const directions = [
                        [-1, -1], [-1, 0], [-1, 1],
                        [0, -1],          [0, 1],
                        [1, -1], [1, 0], [1, 1]
                    ];
                    directions.forEach(([dx, dy]) => {
                        let newRow = row + dx;
                        let newCol = col + dy;
                        if (isInBounds(newRow, newCol) && matrix[newRow][newCol] === 0) {
                            matrix[newRow][newCol] = value + 1;
                            changeOccurred = true;
                        }
                    });
                }
            }
        }
        value++;
    } while (changeOccurred);

    matrix.forEach(row => console.log(row.join(' ')));
}