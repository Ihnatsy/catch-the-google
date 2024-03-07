import {renderButton} from "../button/Button.js";
import {playAgain} from "../../data.js";

export function Win(player) {
    const container = document.createElement('div')
    container.append('YOU WIN' + player)

    const restartButton = renderButton('Play again', playAgain)
    container.append(restartButton)
    return container
}