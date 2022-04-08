import store from './reducer/store.mjs'
import {
  actionIncremented,
  actionDecremented,
  actionReset
} from './reducer/actions.mjs'

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionDecremented)
store.dispatch(actionReset)
store.dispatch(actionDecremented)
