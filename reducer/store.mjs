import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CounterReducer from './reducer.mjs'

const store = createStore(CounterReducer, applyMiddleware(thunk))

export default store
