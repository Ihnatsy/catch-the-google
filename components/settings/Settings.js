
import {getSettingElement, settingsData} from "../../settings-data.js";

export function renderSetting() {
    const settingsContainer = document.createElement('div')
    settingsContainer.className='settingsContainer'

    for (let i = 0; i < settingsData.length; i++) {
        const setElement = getSettingElement(settingsData[i])
        settingsContainer.append(setElement)
    }

    return settingsContainer
}