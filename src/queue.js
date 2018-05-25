'use strict'

export default class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(element) {
    return this.arr.push(element)
  }

  dequeue() {
    if(this.arr.length === 0) {
      return null
    } else {
      return this.arr.shift()
    }
  }

  front() {
    if(this.arr.length === 0) {
      return null
    } else {
      return this.arr[0]
    }
  }

  back() {
    if(this.arr.length === 0) {
      return null
    } else {
      return this.arr[this.arr.length - 1]
    }
  }

  isEmpty() {
    if(this.arr.length === 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.arr.length
  }
}