import {data} from "../../data.js";
import {Cell} from "./Cell.js";

export function renderField() {
    const field = document.createElement('table')
    for (let y = 0; y < data.fieldSize.rows;y++) {
        const row = document.createElement('tr')
        for (let x = 0; x < data.fieldSize.columns; x++) {
            const column = Cell(x,y)
            row.append(column)
        }
        field.append(row)
    }
    return field
}