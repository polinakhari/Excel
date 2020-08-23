import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      console.log('No root')
    }
    this.$root = $root
    // сохранить в this чтобы была доступна в методах 
    this.listeners = listeners
  }
  initDOMListenrs() {
    this.listeners.forEach((listener) => {  
      const method = getMethodName(listener) 
      this[method] = this[method].bind(this)
      if (!this[method]) {
        throw new Error('Method is not implemented')
      }     
      this.$root.on(listener, this[method])
    })
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => {  
      const method = getMethodName(listener)       
      this.$root.off(listener, this[method])
    })
  }  
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
 
