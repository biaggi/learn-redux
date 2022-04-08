import assert from 'assert'
import {
  actionDecremented,
  actionDeferred,
  actionIncremented,
  actionReset,
  actionSet
} from '../reducer/actions.mjs'

import CounterReducer from '../reducer/reducer.mjs'
import configureStorePkg from 'redux-mock-store'
import thunkPkg from 'redux-thunk'
const thunk = thunkPkg.default
const configureStore = configureStorePkg.default
const mockStore = configureStore([thunk])

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
  it('I can call a thunk action', done => {
    const store = mockStore(1)
    store.dispatch(actionDeferred(5))
    setTimeout(() => {
      const actions = store.getActions()
      const { type, payload } = actions[0]
      assert.equal(type, '@action/set')
      assert.equal(payload, 5)
      done()
    }, 1000)
  })
})
