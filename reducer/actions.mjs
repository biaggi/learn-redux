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

const actionSet = (value) => {
  return {
    type: '@action/set',
    payload: value
  }
}

export { actionIncremented, actionDecremented, actionReset, actionSet }
