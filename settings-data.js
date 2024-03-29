import {data} from "./data.js";

// const AUDIO_STATUSES = {
//     ON: true,
//     OFF: false
// }
let musicOn = true

const settingsData = [
    // Grid size
    {
        id: 'Grid size',
        type: 'select',
        title: 'Grid size',
        textValue: ['4x4', '5x5', '6x6', '7x7', '8x8'],
        value: [4, 5, 6, 7, 8]
    },
    // Points to win
    {
        id: 'Points to win',
        type: 'select',
        title: 'Points to win',
        textValue: ['1 pts', '3 pts', '20 pts', '30 pts', '40 pts', '50 pts'],
        value: [1, 3, 20, 30, 40, 50]
    },
    // Time:
    {
        id: 'Time',
        type: 'select',
        title: 'Time',
        textValue: ['1 min', '2 min', '3 min', '4 min', '5 min'],
        value: [60000, 120000, 180000, 240000, 300000]
    },
    // Game mode
    {
        id: 'Game mode',
        type: 'select',
        title: 'Game mode',
        textValue: ['Single', 'Multiplayer'],
        value: ['Single', 'Multiplayer']
    },
    //Choose who you will play for?
    {
        id: 'Choose who you will play for?',
        type: 'select',
        title: 'Choose who you will play for?',
        textValue: ['Catching', 'Running'],
        value: ['Catching', 'Running']
    },
    // Turn on/off music
    {
        id: 'audio',
        type: 'audio',
        title: 'Sound on',
       // isMusicON: true
    }
]

// selectors / getters

export function getSettingElement(settingType) {
    const oneSettingContainer = document.createElement('div')
    oneSettingContainer.className = 'oneSettingContainer'

    const title = getTitle(settingType)
    oneSettingContainer.append(title)

    if (settingType.type === 'select') {
        const selectEl = document.createElement('select')
        for (let i = 0; i < settingType.textValue.length; i++) {
            const optionElement = document.createElement('option')
            optionElement.innerText = textElement(settingType)[i]
            optionElement.value = valueElement(settingType)[i]

            if (settingType.id === 'Grid size' && Number(optionElement.value) === Number(data.fieldSize.rows)) {
                optionElement.selected = true
            }
            if (settingType.id === 'Points to win' && Number(optionElement.value) === Number(data.pointsToWin)) {
                optionElement.selected = true
            }
            if (settingType.id === 'Time' && Number(optionElement.value) === Number(data.time)) {
                optionElement.selected = true
            }
            if (settingType.id === 'Game mode' && optionElement.value === data.gameMode) {
                optionElement.selected = true
            }
            if (settingType.id === 'Choose who you will play for?' && optionElement.value === data["Choose who you will play for?"]) {
                optionElement.selected = true
            }
            selectEl.append(optionElement)
        }

        selectEl.addEventListener('change', function () {
            if (settingType.id === 'Grid size') {
                data.fieldSize.rows = this.value
                data.fieldSize.columns = this.value
            }
            if (settingType.id === 'Points to win') {
                data.pointsToWin = Number(this.value)
            }
            if (settingType.id === 'Time') {
                data.time = this.value
            }
            if (settingType.id === 'Game mode') {
                data.gameMode = this.value
            }
            if (settingType.id === 'Choose who you will play for?') {
                data["Choose who you will play for?"] = this.value
            }
        })

        oneSettingContainer.append(selectEl)
    }
    if (settingType.type === 'audio') {
        const soundButton = document.createElement('input')
        soundButton.type = 'checkbox'
        soundButton.checked = musicOn
        soundButton.className = 'switch'
        console.log(musicOn)

        soundButton.addEventListener('change', function () {
            musicOn = this.checked
            soundButton.checked = musicOn
        })

        oneSettingContainer.append(soundButton)
    }


    return oneSettingContainer
}

function getTitle(settingType) {
    return settingType.title
}

function textElement(settingType) {
    return settingType.textValue
}

function valueElement(settingType) {
    return settingType.value
}

export function getSettingDataLength() {
    return settingsData.length
}

export function getSetElement(index) {
    return settingsData[index]
}

export function getAudioStatus() {
    return musicOn
}


