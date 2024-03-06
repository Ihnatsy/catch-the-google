import {getPlayerPoints} from "../../data.js";

export function renderPoints() {
    const pointsContainer = document.createElement('div')
    pointsContainer.className = 'pointsContainer'
    const player1Points = document.createElement('span')
    player1Points.append('Player 1: ' + getPlayerPoints().Player1Points)
    const player2Points = document.createElement('span')
    player2Points.append('Player 2: ' + getPlayerPoints().Player2Points)
    pointsContainer.append(player1Points, player2Points)
    return pointsContainer
}