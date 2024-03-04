import {getGoogleCoordinates, getPlayer1Coordinates, getPlayer2Coordinates} from "../../data.js";
import {renderGoogle} from "../pictures/Google.js";
import {renderPlayer1} from "../pictures/Player1.js";
import {renderPlayer2} from "../pictures/Player2.js";

export function Cell(x, y) {
    const cell = document.createElement('td')
    if (x === getGoogleCoordinates().x && y === getGoogleCoordinates().y) {
        cell.append(renderGoogle())
    }
    if (x === getPlayer1Coordinates().x && y === getPlayer1Coordinates().y) {
        cell.append(renderPlayer1())
    }
    if (x === getPlayer2Coordinates().x && y === getPlayer2Coordinates().y) {
        cell.append(renderPlayer2())
    }
    return cell
}