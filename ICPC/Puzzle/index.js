const readline = require("readline");

class SnakeLadder {
    constructor (board, flip, start) {
        this.flip = this.flipCoin();
        this.board = this.buildBoard();
        this.start = this.start();
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

    //Start the game and prompt something to the user {test}
    start() {
        const input = readline.createInterface(process.stdin, process.stdout);
        //Ask the user to chose an option
        input.question(`Enter Y to continue, or N to cancel: `, (option) => {
            if (option !== 'Y' || "Yes") {
                console.log("Wrong input!, please enter either Y, N or Yes or No.");
                this.start();
            }
        });

    }
}  


const game = new SnakeLadder();
console.log(game.start)
// console.log(game.flip);
// console.log(game.board);
