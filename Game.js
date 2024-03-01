import {renderField} from "./components/field/Field.js";

export function Game() {
    const mainContainer = document.createElement('div')
    const playField = renderField()

    mainContainer.append(playField)
    return mainContainer
}