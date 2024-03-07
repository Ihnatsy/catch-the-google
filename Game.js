import {renderField} from "./components/field/Field.js";
import {renderPoints} from "./components/points/Points.js";
import {renderSetting} from "./components/settings/Settings.js";
import {renderButton} from "./components/button/Button.js";
import {getGameStatus, getResultStatus, startGame} from "./data.js";
import {Win} from "./components/win-or-lose/Win.js";

export function Game() {
    const mainContainer = document.createElement('div')

    const status = getGameStatus().status
    const result = getResultStatus().result
    if (status === 'settings') {
        const settingsBlock = renderSetting()
        const startButton = renderButton('Start', startGame)
        mainContainer.append(settingsBlock, startButton,)
    } else if (status === 'in-process') {
        const settingsBlock = renderSetting()
        const pointsBlock = renderPoints()
        const playField = renderField()
        mainContainer.append(settingsBlock, pointsBlock, playField)
    } else if (status === 'finish') {
        if (result === 'winP1') {
            const resultBlock = Win('Player 1')
            mainContainer.append(resultBlock)
        }
        if (result === 'winP2') {
            const resultBlock = Win('Player 2')
            mainContainer.append(resultBlock)
        }
    }

    return mainContainer
}