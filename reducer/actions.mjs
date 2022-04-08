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
    setTimeout(() => {
      console.log('d99')
      dispatch(actionSet(lastValue))
    }, 500)
  }
}

export {
  actionIncremented,
  actionDecremented,
  actionReset,
  actionSet,
  actionDeferred
}
