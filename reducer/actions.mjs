const actionIncremented = () => {
  return {
    type: '@action/incremented'
  }
}

const actionDecremented = () => {
  return {
    type: '@action/decremented'
  }
}

const actionReset = () => {
  return {
    type: '@action/reset'
  }
}

const actionSet = value => {
  return {
    type: '@action/set',
    payload: value
  }
}

const actionDeferred = lastValue => {
  return dispatch => {
    dispatch(actionIncremented())
    dispatch(actionIncremented())
    dispatch(actionIncremented())
    setTimeout(() => {
      dispatch(actionSet(lastValue))
    }, 1000)
  }
}

export {
  actionIncremented,
  actionDecremented,
  actionReset,
  actionSet,
  actionDeferred
}
