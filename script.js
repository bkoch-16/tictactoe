function createGame (players, board) {
    let playerOne = players.playerOne
    let playerTwo = players.playerTwo
    
    return { playerOne, playerTwo, board }
}

function createPlayer (playerOne, playerTwo) {
    return { playerOne, playerTwo }
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
    return {r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3}
})()

function gameFlow (game, players) {
    for (let i = 0; i < 9; i++) {
        if (i%2 === 0) {
            activePlayer = players.playerOne
        }
        else {
            activePlayer = players.playerTwo
        }
        let move = prompt(`${activePlayer}, please input your move!`)
        if (game.board[move] === "") {
            game.board[move] = activePlayer
        } /* fix this so it lets you try again!*/

        let statusCheck = victoryCheck(game)
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
        case game.board.r1c1 === game.board.r1c2 
        && game.board.r1c1 === game.board.r1c3:
            return game.board.r1c1

        case game.board.r2c1 === game.board.r2c2 
        && game.board.r2c1 === game.board.r2c3:
            return game.board.r2c1

        case game.board.r3c1 === game.board.r3c2 
        && game.board.r3c1 === game.board.r3c3:
            return game.board.r3c1

        case game.board.r1c1 === game.board.r2c1 
        && game.board.r1c1 === game.board.r3c1:
            return game.board.r1c1

        case game.board.r1c2 === game.board.r2c2 
        && game.board.r1c2 === game.board.r3c2:
            return game.board.r1c2

        case game.board.r1c3 === game.board.r2c3 
        && game.board.r1c3 === game.board.r3c3:
            return game.board.r1c3

        case game.board.r1c1 === game.board.r2c2 
        && game.board.r1c1 === game.board.r3c3:
            return game.board.r1c1

        case game.board.r1c3 === game.board.r2c2 
        && game.board.r1c3 === game.board.r3c1:
            return game.board.r1c3
        
        default:
            return  ""  
    }
}

function renderGame (game) {
    for (tile in game.board) {
        
    }
}

let players = createPlayer("ben", "egg")
let game = createGame(players, board)