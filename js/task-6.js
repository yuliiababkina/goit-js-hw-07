function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let width = 30;
    let height = 30;
    let markup = "";

    if (Number(input.value) > 0 && Number(input.value) <= 100) {
        for (let i = 1; i <= input.value; i++) {
            markup += `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px"></div>`;
            width += 10;
            height += 10;
        }
        boxes.innerHTML = markup;
        input.value = "";
    }
}

function destroyBoxes() {
    boxes.innerHTML = "";
}
