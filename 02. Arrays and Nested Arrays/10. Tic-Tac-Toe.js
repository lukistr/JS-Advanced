function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const players = ['X', 'O'];
    let currentPlayer = 0;

    function printBoard() {
        board.forEach(row => console.log(row.join('\t')));
    }

    function checkWin(player) {
        const winLines = [
            // Rows
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            // Columns
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            // Diagonals
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];
        return winLines.some(line => line.every(cell => cell === player));
    }

    for (let move of moves) {
        let [row, col] = move.split(' ');

        if (board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue; // Skip this move and let the same player try again
        }

        board[row][col] = players[currentPlayer];

        if (checkWin(players[currentPlayer])) {
            console.log(`Player ${players[currentPlayer]} wins!`);
            printBoard();
            return;
        }

        currentPlayer = 1 - currentPlayer;

        if (board.flat().every(cell => cell !== false)) {
            console.log("The game ended! Nobody wins :(");
            printBoard();
            return;
        }
    }
}