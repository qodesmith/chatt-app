// Typing actions.
export const startTyping = id => ({ type: 'START_TYPING', payload: id })
export const endTyping = id => ({ type: 'END_TYPING', payload: id })


// Message actions.
export const messagesLoaded = messages => ({ type: 'MESSAGES_LOADED', payload: messages })
export const saveMessage = (id, message) => ({ type: 'SAVE_MESSAGE', payload: { id, message }})
