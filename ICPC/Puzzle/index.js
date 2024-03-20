class Puzzle {
    constructor (board, flip) {
        this.flip = this.flipCoin();
        this.board = this.buildBoard();
    }

    //Build the board
    buildBoard () {
        let space = 100;
        const board = [];
        let row = [];

        while (space > 0){
            row.push(space)
            if (row.length === 10) {
                board.push(row);
                row = [];
            }
            space -= 1;
        }
        return board;
    }

    //Flip the coin
    flipCoin() {
        const randomInt = (max, min) => {
            return Math.floor(Math.random() * (max - min) + min);
        }
        const coin = randomInt(3,1);

        if (coin === 1) return "Coin: Head"
        else return "Coin: Tail";
    }
}  


const game = new Puzzle();
console.log(game.flip);
console.log(game.board);
