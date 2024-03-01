import {data} from "../../data.js";
import {renderGoogle} from "../pictures/Google.js";
import {renderPlayer1} from "../pictures/Player1.js";
import {renderPlayer2} from "../pictures/Player2.js";

export function Cell(x, y) {
    const cell = document.createElement('td')
    if (x === data.coordinates.google.x && y === data.coordinates.google.y) {
        cell.append(renderGoogle())
    }
    if (x === data.coordinates.player1.x && y === data.coordinates.player1.y) {
        cell.append(renderPlayer1())
    }
    if (x === data.coordinates.player2.x && y === data.coordinates.player2.y) {
        cell.append(renderPlayer2())
    }
    return cell
}