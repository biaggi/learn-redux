const initialState = 0
const CounterReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case '@action/incremented':
      return state + 1
    case '@action/decremented':
      state = state - 1
      return state
    case '@action/reset':
      return initialState
    case '@action/set':
      return payload
  }
}
export default CounterReducer
