import {renderField} from "./components/field/Field.js";
import {renderPoints} from "./components/points/Points.js";
import {renderSetting} from "./components/settings/Settings.js";

export function Game() {
    const mainContainer = document.createElement('div')

    const settingsBlock = renderSetting()
    const pointsBlock = renderPoints()
    const playField = renderField()

    mainContainer.append(settingsBlock, pointsBlock, playField)
    return mainContainer
}