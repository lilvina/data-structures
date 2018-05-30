'use strict'

export default class Set {
  constructor() {
    this.arr = []
    this.index = 0
  }

  add(element) {
    if(this.arr.indexOf(element) < 0) {
      this.arr.push(element)
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if(this.arr.length === 0) {
      return true
    } else {
      return false
    }
  }

  contains() {

  }

  remove(element) {
    
  }
}