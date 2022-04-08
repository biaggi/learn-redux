import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import CounterReducer from './reducer.mjs'

const store = createStore(CounterReducer, applyMiddleware(thunkMiddleware.default))

export default store
