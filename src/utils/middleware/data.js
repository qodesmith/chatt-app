import { retrieveData } from 'actions'

/*
  This middleware represents an async fetch to a back end for some data.
  In this case we're looking for user info and messages.
  We'll use localStorage for persistence.
*/

const wait = (time = 1000) => new Promise(resolve => setTimeout(resolve, time))

const data = store => next => async action => {
  next(action) // Keep the regular flow of things uninterrupted.
  if (action.type !== retrieveData().type) return

  // Simulate a 1s roundtrip over the net.
  await wait()
}

export default data
