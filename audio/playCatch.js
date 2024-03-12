import {getAudioStatus} from "../settings-data.js";

export function playCatch() {
    if (getAudioStatus() === true) {
        const audio = new Audio()
        audio.src = './audio/catch.mp3'
        audio.currentTime = 0
        audio.play()
    }
}