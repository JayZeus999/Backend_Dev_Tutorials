function chessBoard () {
    let rank = [];
    let n = 8;
    
    for (let i = 0; i <= n; i++) {
        rank += " #";
    }
    console.log(`${rank}\n`);

    let rank2 = []
    for (let j = 0; j <= n; j++) {
        rank2 += "# ";
    }
    console.log(`${rank2}\n`);
}

chessBoard();
chessBoard();
chessBoard();
chessBoard();