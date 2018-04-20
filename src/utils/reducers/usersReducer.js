const initialState = {
  typing: [], // List of user id's that are currently typing.
  loggedIn: [ // List of users that are currently logged in.
    { name: 'Qodesmith', id: 1 },
    { name: 'Wordsmith', id: 2 }
  ],
  messages: [
    { id: 1, message: 'hey!' },
    { id: 1, message: 'how are you?' },
    { id: 2, message: `I'm good` },
    { id: 1, message: 'good to hear' }
  ]
}

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'START_TYPING':
      const alreadyTyping = state.typing.includes(action.payload)

      if (alreadyTyping) return state
      return { ...state, typing: [action.payload, ...state.typing] }
    case 'END_TYPING':
      return { ...state, typing: state.typing.filter(id => id !== action.payload) }
    case 'SAVE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}

export default usersReducer
