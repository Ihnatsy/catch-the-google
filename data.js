export const data = {
    fieldSize: {
        rows: 5,
        columns: 7
    },

    coordinates: {
        google: {
            x: 0,
            y: 0
        },
        player1: {
            x: 0,
            y: 1
        },
        player2: {
            x: 2,
            y: 2
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
    while (newX === data.coordinates.google.x && newY === data.coordinates.google.y) {
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
        data.coordinates.player1.y = data.coordinates.player1.y+1
        notify()
    }
}
function moveUpP1() {
    if (data.coordinates.player1.y !== 0) {
        data.coordinates.player1.y = data.coordinates.player1.y-1
        notify()
    }
}
function moveRightP1() {
    if (data.coordinates.player1.x < (data.fieldSize.columns-1)) {
        data.coordinates.player1.x = data.coordinates.player1.x+1
        notify()
    }
}
function moveLeftP1() {
    if (data.coordinates.player1.x !== 0) {
        data.coordinates.player1.x = data.coordinates.player1.x-1
        notify()
    }
}

// Player 2
function moveDownP2() {
    if (data.coordinates.player2.y < (data.fieldSize.rows-1)) {
        data.coordinates.player2.y = data.coordinates.player2.y+1
        notify()
    }
}
function moveUpP2() {
    if (data.coordinates.player2.y !== 0) {
        data.coordinates.player2.y = data.coordinates.player2.y-1
        notify()
    }
}
function moveRightP2() {
    if (data.coordinates.player2.x < (data.fieldSize.columns-1)) {
        data.coordinates.player2.x = data.coordinates.player2.x+1
        notify()
    }
}
function moveLeftP2() {
    if (data.coordinates.player2.x !== 0) {
        data.coordinates.player2.x = data.coordinates.player2.x-1
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