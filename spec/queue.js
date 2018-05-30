import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue()', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds the element foo to the back of the queue.', () => {
      const myQueue = new Queue()

      expect(myQueue.enqueue('foo')).to.equal(1)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(myQueue.dequeue()).to.equal('foo')
    })

    it('returns null if it is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.dequeue()).to.equal(null)
    })
  })

  context('front()', () => {
    it('returns the front element in the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(myQueue.front()).to.equal('foo')
    })

    it('returns null if it is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.front()).to.equal(null)
    })
  })

  context('back()', () => {
    it('returns the back element in queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(myQueue.back()).to.equal('bar')
    })

    it('returns null if it is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.back()).to.equal(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.isEmpty()).to.equal(true)
    })

    it('returns false if the queue is not empty', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')

      expect(myQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the numbers of elements in the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(myQueue.length()).to.equal(2)
    })
  })
})