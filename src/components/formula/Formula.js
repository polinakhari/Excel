import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'formula'
    constructor($root) {
      super($root, {
        name: 'Formula',
        listeners: ['input', 'click'],
      })
    }
    toHTML() {
      return ` <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable=""></div>`
    }
    onInput() {
      console.log('Formula input', event.target.textContent.trim())
    }
    onClick() {
      console.log('Formula click', event)
    }
}
