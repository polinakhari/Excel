const CODES = {
  A: 65,
  Z: 90,
}
function toCell() {
  return `<div class="cell" contenteditable=""></div>`
}
function toColumn(el) {  
  return `<div class="column">${el}</div>`
}
function createRow(content, index = '' ) {
  return `<div class="row">
    <div class="row__info">${index}</div>
    <div class="row__data">${content}</div>
</div>
    `
}
function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = [] 
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')  

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(cells, i + 1))
  }
  
  return rows.join('')
}
