const storeToLocalStorage = store => next => action => {
  next(action)
  if (action.type !== 'SAVE_MESSAGE') return

  localStorage.setItem('asapp', JSON.stringify(store.getState()))
}

export default storeToLocalStorage
