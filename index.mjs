import store from './reducer/store.mjs'
import { actionDecremented, actionDeferred } from './reducer/actions.mjs'

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(actionDecremented())
store.dispatch(actionDeferred(99))
