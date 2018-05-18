'use strict'

export default class Stack {
  constructor() {
    this.arr = []
  }

  push(element) {
    return this.arr.push(element)
  }

  pop() {
    return this.arr.pop()
  }

  peek() {
    if(this.arr.length === 0) {
      return null
    } else {
     return this.arr[this.arr.length - 1]
    }
  }

  isEmpty() {
    return this.arr === 0
  }

  length() {
    return this.arr.length
  }
}