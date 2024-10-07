function createGame (players, board) {
    let playerOne = players.playerOneName
    let playerTwo = players.playerTwoName
    
    return { playerOne, playerTwo, board }
}

function createPlayer () {
    const playerOne = document.querySelector("#player-one")
    const playerTwo = document.querySelector("#player-two")
    
    const playerOneName = playerOne.value
    const playerTwoName = playerTwo.value

    return { playerOneName, playerTwoName }
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

async function gameFlow (game, players) {
    for (let i = 0; i < 9; i++) {
        if (i%2 === 0) {
            activePlayer = players.playerOneName
        }
        else {
            activePlayer = players.playerTwoName
        }
        let move = await makeMove(game)
        game.board[move] = activePlayer
        renderGame(game)
        let statusCheck = victoryCheck(game)
        if (statusCheck !== "") {
            alert(statusCheck + " wins! Input player names and press 'Start' to play again!")
            return
        }
        else if (i === 8) {
            alert("You tied! Input player names and press 'Start' to play again!")
        }
    }
}

function makeMove (game) {
    let r1c1 = document.querySelector("#r1c1")
    let r1c2 = document.querySelector("#r1c2")
    let r1c3 = document.querySelector("#r1c3")
    let r2c1 = document.querySelector("#r2c1")
    let r2c2 = document.querySelector("#r2c2")
    let r2c3 = document.querySelector("#r2c3")
    let r3c1 = document.querySelector("#r3c1")
    let r3c2 = document.querySelector("#r3c2")
    let r3c3 = document.querySelector("#r3c3")

    return new Promise((resolve) => {
        let activeMove = ""
        r1c1.addEventListener('click', () => {
            if (r1c1.textContent.trim() === "") {
                activeMove = "r1c1"
                resolve(activeMove)
            }
        })
        r1c2.addEventListener('click', () => {
            if (r1c2.textContent.trim() === "") {
                activeMove = "r1c2"
                resolve(activeMove)
            }
        })
        r1c3.addEventListener('click', () => {
            if (r1c3.textContent.trim() === "") {
                activeMove = "r1c3"
                resolve(activeMove)
            }
        })
        r2c1.addEventListener('click', () => {
            if (r2c1.textContent.trim() === "") {
                activeMove = "r2c1"
                resolve(activeMove)
            }
        })
        r2c2.addEventListener('click', () => {
            if (r2c2.textContent.trim() === "") {
                activeMove = "r2c2"
                resolve(activeMove)
            }
        })
        r2c3.addEventListener('click', () => {
            if (r2c3.textContent.trim() === "") {
                activeMove = "r2c3"
                resolve(activeMove)
            }
        })
        r3c1.addEventListener('click', () => {
            if (r3c1.textContent.trim() === "") {
                activeMove = "r3c1"
                resolve(activeMove)
            }
        })
        r3c2.addEventListener('click', () => {
            if (r3c2.textContent.trim() === "") {
                activeMove = "r3c2"
                resolve(activeMove)
            }
        })
        r3c3.addEventListener('click', () => {
            if (r3c3.textContent.trim() === "") {
                activeMove = "r3c3"
                resolve(activeMove)
            }
        })  
    })
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
    let r1c1 = document.querySelector("#r1c1")
    let r1c2 = document.querySelector("#r1c2")
    let r1c3 = document.querySelector("#r1c3")
    let r2c1 = document.querySelector("#r2c1")
    let r2c2 = document.querySelector("#r2c2")
    let r2c3 = document.querySelector("#r2c3")
    let r3c1 = document.querySelector("#r3c1")
    let r3c2 = document.querySelector("#r3c2")
    let r3c3 = document.querySelector("#r3c3")

    r1c1.textContent = game.board.r1c1
    r1c2.textContent = game.board.r1c2
    r1c3.textContent = game.board.r1c3
    r2c1.textContent = game.board.r2c1
    r2c2.textContent = game.board.r2c2
    r2c3.textContent = game.board.r2c3
    r3c1.textContent = game.board.r3c1
    r3c2.textContent = game.board.r3c2
    r3c3.textContent = game.board.r3c3
}

function resetGame (game) {
    game.board.r1c1 = ""
    game.board.r1c2 = ""
    game.board.r1c3 = ""
    game.board.r2c1 = ""
    game.board.r2c2 = ""
    game.board.r2c3 = ""
    game.board.r3c1 = ""
    game.board.r3c2 = ""
    game.board.r3c3 = ""

    renderGame(game)

    game = null
    players = null
    return
}

let start = document.querySelector("#start")
start.addEventListener("click", () => {
    event.preventDefault()
    let players = createPlayer()
    let game = createGame(players, board)
    gameFlow(game, players)
    document.querySelector("#new-game").reset()
    resetGame(game)
})
