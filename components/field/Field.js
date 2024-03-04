import {getFieldSize} from "../../data.js";
import {Cell} from "./Cell.js";

export function renderField() {
    const field = document.createElement('table')
    for (let y = 0; y < getFieldSize().rows;y++) {
        const row = document.createElement('tr')
        for (let x = 0; x < getFieldSize().columns; x++) {
            const column = Cell(x,y)
            row.append(column)
        }
        field.append(row)
    }
    return field
}