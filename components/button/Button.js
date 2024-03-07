export function renderButton(title, func) {

    function onClickHandler() {
        func()
    }

    const button = document.createElement('button')
    button.innerText = title
    button.addEventListener('click', onClickHandler)
    return button
}