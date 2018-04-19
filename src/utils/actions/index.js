export const retrieveData = () => ({ type: 'RETRIEVE DATA' }) // Example action.

// Typing actions.
export const startTyping = id => ({ type: 'START_TYPING', payload: id })
export const endTyping = id => ({ type: 'END_TYPING', payload: id })


// Message actions.
export const loadMessages = () => ({ type: 'LOAD_MESSAGES' })
export const saveMessage = (id, message) => ({ type: 'SAVE_MESSAGE', payload: { id, message }})
