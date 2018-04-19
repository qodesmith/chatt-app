const storeToLocalStorage = store => next => action => {
  next(action)
  if (action !== 'SAVE_MESSAGE') return

  localStorage.setItem('asapp', JSON.stringify(store.getState()))
}

export default storeToLocalStorage
