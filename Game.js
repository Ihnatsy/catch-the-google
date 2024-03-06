import {renderField} from "./components/field/Field.js";
import {renderPoints} from "./components/points/Points.js";

export function Game() {
    const mainContainer = document.createElement('div')
    const pointsBlock = renderPoints()
    const playField = renderField()

    mainContainer.append(pointsBlock, playField)
    return mainContainer
}