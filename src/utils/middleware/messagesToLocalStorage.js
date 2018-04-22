const messagesToLocalStorage = store => next => action => {
  next(action)
  if (action.type !== 'SAVE_MESSAGE') return

  const { messages } = store.getState().users
  localStorage.setItem('asapp', JSON.stringify(messages))
}

export default messagesToLocalStorage
