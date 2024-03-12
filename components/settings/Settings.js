
import {getSettingDataLength, getSettingElement, getSetElement } from "../../settings-data.js";

export function renderSetting() {
    const settingsLength = getSettingDataLength()

    const settingsContainer = document.createElement('div')
    settingsContainer.className='settingsContainer'

    for (let i = 0; i < settingsLength; i++) {
        const setElement = getSettingElement(getSetElement(i))
        settingsContainer.append(setElement)
    }

    return settingsContainer
}