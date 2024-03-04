const data = {
    fieldSize: {
        rows: 4,
        columns: 6
    },

    coordinates: {
        google: {
            x: 0,
            y: 0
        },
        player1: {
            x: 1,
            y: 1
        },
        player2: {
            x: 1,
            y: 0
        }
    }
}

let notify = null
export function subscribe(subscriber) {
    notify = subscriber
}

let timerId
timerId = setInterval(changeGoogleCoordinates, 1000)

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

// Player 1
 function moveDownP1() {
    if (data.coordinates.player1.y < (data.fieldSize.rows-1)) {
        data.coordinates.player1.y++
        notify()
    }
}
function moveUpP1() {
    if (data.coordinates.player1.y !== 0) {
        data.coordinates.player1.y--
        notify()
    }
}
function moveRightP1() {
    if (data.coordinates.player1.x < (data.fieldSize.columns-1)) {
        data.coordinates.player1.x++
        notify()
    }
}
function moveLeftP1() {
    if (data.coordinates.player1.x !== 0) {
        data.coordinates.player1.x--
        notify()
    }
}

// Player 2
function moveDownP2() {
    if (data.coordinates.player2.y < (data.fieldSize.rows-1)) {
        data.coordinates.player2.y++
        notify()
    }
}
function moveUpP2() {
    if (data.coordinates.player2.y !== 0) {
        data.coordinates.player2.y--
        notify()
    }
}
function moveRightP2() {
    if (data.coordinates.player2.x < (data.fieldSize.columns-1)) {
        data.coordinates.player2.x++
        notify()
    }
}
function moveLeftP2() {
    if (data.coordinates.player2.x !== 0) {
        data.coordinates.player2.x--
        notify()
    }
}

document.addEventListener('keydown', function(event) {
    // Player 1
    if (event.code === 'KeyS') {
        moveDownP1()
    }
    if (event.code === 'KeyW') {
        moveUpP1()
    }
    if (event.code ==='KeyD') {
        moveRightP1()
    }
    if (event.code ==='KeyA') {
        moveLeftP1()
    }
    // Player 2
    if (event.code === 'ArrowDown') {
        moveDownP2()
    }
    if (event.code === 'ArrowUp') {
        moveUpP2()
    }
    if (event.code ==='ArrowRight') {
        moveRightP2()
    }
    if (event.code ==='ArrowLeft') {
        moveLeftP2()
    }
});

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