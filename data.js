import {playCatch} from "./audio/playCatch.js";

const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROCESS: 'in-process',
    FINISH: 'finish'
}
const RESULT_STATUSES = {
    IN_PROCESS: 'in-process',
    WINp1: 'winP1',
    WINp2: 'winP2',
    LOSE: 'lose'
}



export const data = {
    gameStatus: GAME_STATUSES.SETTINGS,
    resultStatus: RESULT_STATUSES.IN_PROCESS,

    fieldSize: {
        rows: 4,
        columns: 4
    },

    pointsToWin: 1,
    time: 60000,
    gameMode: 'Single',
    ['Choose who you will play for?']: 'Catching',

    coordinates: {
        google: {
            x: null,
            y: null
        },
        player1: {
            x: null,
            y: null
        },
        player2: {
            x: null,
            y: null
        }
    },

    points: {
        catchPointsP1: 0,
        catchPointsP2: 0
    },

}

let notify = null

export function subscribe(subscriber) {
    notify = subscriber
}

let timerId

function changeGoogleCoordinates() {
    let newX = Math.floor(Math.random() * data.fieldSize.columns)
    let newY = Math.floor(Math.random() * data.fieldSize.rows)
    while (newX === data.coordinates.google.x && newY === data.coordinates.google.y
    || newX === data.coordinates.player1.x && newY === data.coordinates.player1.y
    || newX === data.coordinates.player2.x && newY === data.coordinates.player2.y) {
        newX = Math.floor(Math.random() * data.fieldSize.columns)
        newY = Math.floor(Math.random() * data.fieldSize.rows)
    }
    data.coordinates.google.x = newX
    data.coordinates.google.y = newY
    notify()
}

export function startGame() {
    data.gameStatus = GAME_STATUSES.IN_PROCESS
    setCoordinates()
    notify()
    timerId = setInterval(changeGoogleCoordinates, 1000)
}

function setCoordinates() {
    let P1X = Math.floor(Math.random() * data.fieldSize.columns)
    let P1Y = Math.floor(Math.random() * data.fieldSize.rows)
    data.coordinates.player1.x = P1X
    data.coordinates.player1.y = P1Y

    let P2X = Math.floor(Math.random() * data.fieldSize.columns)
    let P2Y = Math.floor(Math.random() * data.fieldSize.rows)

    while (P2X === data.coordinates.player1.x && P2Y === data.coordinates.player1.y) {
        console.log('пересчёт')
        P2X = Math.floor(Math.random() * data.fieldSize.columns)
        P2Y = Math.floor(Math.random() * data.fieldSize.rows)
    }
    data.coordinates.player2.x = P2X
    data.coordinates.player2.y = P2Y

    let GX = Math.floor(Math.random() * data.fieldSize.columns)
    let GY = Math.floor(Math.random() * data.fieldSize.rows)
    while ((GX === data.coordinates.player1.x && GY === data.coordinates.player1.y)
    || (GX === data.coordinates.player2.x && GY === data.coordinates.player2.y)) {
        GX = Math.floor(Math.random() * data.fieldSize.columns)
        GY = Math.floor(Math.random() * data.fieldSize.rows)
    }
    data.coordinates.google.x = GX
    data.coordinates.google.y = GY
}


// Player 1
function moveDownP1() {
    if (data.coordinates.player1.x === data.coordinates.player2.x
        && data.coordinates.player1.y + 1 === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player1.y < (data.fieldSize.rows - 1)) {
        data.coordinates.player1.y++
        addCatchPointsToP1()
        notify()
    }
}

function moveUpP1() {
    if (data.coordinates.player1.x === data.coordinates.player2.x
        && data.coordinates.player1.y - 1 === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player1.y !== 0) {
        data.coordinates.player1.y--
        addCatchPointsToP1()
        notify()
    }
}

function moveRightP1() {
    if (data.coordinates.player1.x + 1 === data.coordinates.player2.x
        && data.coordinates.player1.y === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player1.x < (data.fieldSize.columns - 1)) {
        data.coordinates.player1.x++
        addCatchPointsToP1()
        notify()
    }
}

function moveLeftP1() {
    if (data.coordinates.player1.x - 1 === data.coordinates.player2.x
        && data.coordinates.player1.y === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player1.x !== 0) {
        data.coordinates.player1.x--
        addCatchPointsToP1()
        notify()
    }
}

// Player 2
function moveDownP2() {
    if (data.coordinates.player1.x === data.coordinates.player2.x
        && data.coordinates.player1.y === data.coordinates.player2.y + 1) {
        return
    }
    if (data.coordinates.player2.y < (data.fieldSize.rows - 1)) {
        data.coordinates.player2.y++
        addCatchPointsToP2()
        notify()
    }
}

function moveUpP2() {
    if (data.coordinates.player1.x === data.coordinates.player2.x
        && data.coordinates.player1.y === data.coordinates.player2.y - 1) {
        return
    }
    if (data.coordinates.player2.y !== 0) {
        data.coordinates.player2.y--
        addCatchPointsToP2()
        notify()
    }
}

function moveRightP2() {
    if (data.coordinates.player1.x === data.coordinates.player2.x + 1
        && data.coordinates.player1.y === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player2.x < (data.fieldSize.columns - 1)) {
        data.coordinates.player2.x++
        addCatchPointsToP2()
        notify()
    }
}

function moveLeftP2() {
    if (data.coordinates.player1.x === data.coordinates.player2.x - 1
        && data.coordinates.player1.y === data.coordinates.player2.y) {
        return
    }
    if (data.coordinates.player2.x !== 0) {
        data.coordinates.player2.x--
        addCatchPointsToP2()
        notify()
    }
}

document.addEventListener('keydown', function (event) {
    // Player 1
    if (event.code === 'KeyS') {
        moveDownP1()
    }
    if (event.code === 'KeyW') {
        moveUpP1()
    }
    if (event.code === 'KeyD') {
        moveRightP1()
    }
    if (event.code === 'KeyA') {
        moveLeftP1()
    }
    // Player 2
    if (event.code === 'ArrowDown') {
        moveDownP2()
    }
    if (event.code === 'ArrowUp') {
        moveUpP2()
    }
    if (event.code === 'ArrowRight') {
        moveRightP2()
    }
    if (event.code === 'ArrowLeft') {
        moveLeftP2()
    }
});

// add catch points
function addCatchPointsToP1() {
    if (data.coordinates.google.x === data.coordinates.player1.x
        && data.coordinates.google.y === data.coordinates.player1.y) {
        playCatch()
        ++data.points.catchPointsP1
        clearInterval(timerId)
        if (data.points.catchPointsP1 === data.pointsToWin) {
            data.gameStatus = 'finish'
            data.resultStatus = 'winP1'
            notify()
        } else {
            changeGoogleCoordinates()
            timerId = setInterval(changeGoogleCoordinates, 1000)
        }
    }
}

function addCatchPointsToP2() {
    if (data.coordinates.google.x === data.coordinates.player2.x
        && data.coordinates.google.y === data.coordinates.player2.y) {
        playCatch()
        data.points.catchPointsP2++
        clearInterval(timerId)
        if (Number(data.points.catchPointsP2) === Number(data.pointsToWin)) {
            data.gameStatus = 'finish'
            data.resultStatus = 'winP2'
            notify()
        } else {
            changeGoogleCoordinates()
            timerId = setInterval(changeGoogleCoordinates, 1000)
        }
    }
}

export function playAgain() {
    data.resultStatus = RESULT_STATUSES.IN_PROCESS
    data.gameStatus = GAME_STATUSES.SETTINGS
    data.points.catchPointsP1 = 0
    data.points.catchPointsP2 = 0
    data.pointsToWin = 1
    notify()
}

// selectors / getters

export function getGoogleCoordinates() {
    return {
        x: data.coordinates.google.x,
        y: data.coordinates.google.y
    }
}

export function getPlayer1Coordinates() {
    return {
        x: data.coordinates.player1.x,
        y: data.coordinates.player1.y,
    }
}

export function getPlayer2Coordinates() {
    return {
        x: data.coordinates.player2.x,
        y: data.coordinates.player2.y,
    }
}

export function getFieldSize() {
    return {
        rows: data.fieldSize.rows,
        columns: data.fieldSize.columns
    }
}

export function getPlayerPoints() {
    return {
        Player1Points: data.points.catchPointsP1,
        Player2Points: data.points.catchPointsP2
    }
}

export function getGameStatus() {
    return {status: data.gameStatus}
}

export function getResultStatus() {
    return {result: data.resultStatus}
}


