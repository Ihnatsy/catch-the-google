import {Game} from "./Game.js";
import {subscribe} from "./data.js";

const appElement = document.getElementById('root')

function renderApp() {
    const game = Game()
    appElement.innerHTML = ''
    appElement.append(game)
}

renderApp()
subscribe(renderApp)