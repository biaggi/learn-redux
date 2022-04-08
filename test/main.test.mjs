import assert from 'assert'
import {
  actionDecremented,
  actionIncremented,
  actionReset,
  actionSet
} from '../reducer/actions.mjs'

import CounterReducer from '../reducer/reducer.mjs'

describe('redux store', () => {
  beforeEach(() => {})
  it('I can increment', () => {
    const state = CounterReducer(0, actionIncremented())

    assert.equal(state, 1)
  })
  it('I can decrement', () => {
    const state = CounterReducer(0, actionDecremented())
    assert.equal(state, -1)
  })
  it('I can set', () => {
    const state = CounterReducer(1, actionSet(5))
    assert.equal(state, 5)
  })
  it('I can reset', () => {
    const state = CounterReducer(1, actionReset())
    assert.equal(state, 0)
  })
})
