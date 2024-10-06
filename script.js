function createGame (players, board) {
    return { players, board }
}

function createPlayer (player1, player2) {
    let playerOne = player1
    let playerTwo = player2
    const players = [playerOne, playerTwo]
    return { players }
}

const board = (function createBoard (gameBoard = "game") {
    let r1c1 = ""
    let r1c2 = ""
    let r1c3 = ""
    let r2c1 = ""
    let r2c2 = ""
    let r2c3 = ""
    let r3c1 = ""
    let r3c2 = ""
    let r3c3 = ""
    let board = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3]
    return { board }
})()

function gameFlow (game, players) {
    for (let i = 0; i < 9; i++) {
        let move = prompt(`${players.players[i % 2]}, please input your move!`)
        game.board.board[transformMove(move)] = players.players[i % 2]
        let statusCheck = victoryCheck(game)
        console.log(game.board.board[0] + game.board.board[1] + game.board.board[2])
        console.log(game.board.board[3] + game.board.board[4] + game.board.board[5])
        console.log(game.board.board[6] + game.board.board[7] + game.board.board[8])
        if (statusCheck !== "") {
            console.log(statusCheck + " wins!")
            return
        }
    }
}

function transformMove (move) {
    let moveIndex
    switch (move) {
        case "r1c1":
            moveIndex = 0
            break
        case "r1c2":
            moveIndex = 1
            break
        case "r1c3":
            moveIndex = 2
            break
        case "r2c1":
            moveIndex = 3
            break
        case "r2c2":
            moveIndex = 4
            break
        case "r2c3":
            moveIndex = 5
            break
        case "r3c1":
            moveIndex = 6
            break
        case "r3c2":
            moveIndex = 7
            break
        case "r3c3":
            moveIndex = 8
            break
        default:
            console.log("Error - bad move entry") 
    }
    return moveIndex
}

function victoryCheck (game) {
    switch (true) {
        case game.board.board[0] === game.board.board[4] 
        && game.board.board[0] === game.board.board[8]:
            console.log(game.board.board[0])
            console.log(game.board.board[4])
            console.log(game.board.board[8])
            return game.board.board[0]

        case game.board.board[1] === game.board.board[4] 
        && game.board.board[1] === game.board.board[7]:
            return game.board.board[1]

        case game.board.board[2] === game.board.board[4] 
        && game.board.board[2] === game.board.board[6]:
            return game.board.board[2]

        case game.board.board[0] === game.board.board[3] 
        && game.board.board[0] === game.board.board[6]:
            return game.board.board[0]

        case game.board.board[3] === game.board.board[4] 
        && game.board.board[3] === game.board.board[5]:
            return game.board.board[3]

        case game.board.board[2] === game.board.board[4] 
        && game.board.board[2] === game.board.board[6]:
            return game.board.board[2]

        case game.board.board[2] === game.board.board[5] 
        && game.board.board[2] === game.board.board[8]:
            return game.board.board[2]

        case game.board.board[6] === game.board.board[7] 
        && game.board.board[6] === game.board.board[8]:
            return game.board.board[6]
        
        default:
            return  ""  
    }
}

let players = createPlayer("ben", "egg")
let game = createGame(players, board)