import { createStore } from 'redux'

import CounterReducer from './reducer.mjs'

const store = createStore(CounterReducer)

export default store
