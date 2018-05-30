import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set.js'

chai.use(chaiChange)

describe('Set()', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.add()).to.equal(true)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the set is empty', () => {
      const mySet = new Set()

      expect(mySet.isEmpty()).to.equal(true)
    })
    it('returns false if the set is not empty', () => {
      const mySet = new Set()
      mySet.add('A')

      expect(mySet.isEmpty()).to.equal(false)
    })
  })

  context('contains()', () => {
    it('returns true if the set contains the element', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')

      expect(mySet.contains('B')).to.equal(true)
    })
    it('returns false if the set does not contains the element', () => {
      const mySet = new Set()

      expect(mySet.contains()).to.equal(false)
    })
  })

  context.only('remove()', () => {
    it('removes an element from the set', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')

      expect(mySet.remove()).to.equal('B')
    })
  })

  context('size()', () => {
    it('returns the number of elements in the set', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')

      expect(mySet.size()).to.equal(3)
    })
  })

  context('union()', () => {
    it('unions the set with another set and returns the resulting set', () => {
      const mySet = new Set()
      const otherSet = new Set()
      mySet.add('A')
      mySet.add('B')
      otherSet.add('C')
      otherSet.add('D')

      expect(mySet.union(otherSet).size()).to.equal(4)
    })
  })
})