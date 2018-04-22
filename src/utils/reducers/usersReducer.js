const initialState = {
  typing: [], // List of user id's that are currently typing.
  loggedIn: [ // List of users that are currently logged in.
    { name: 'Qodesmith', id: 1 },
    { name: 'Wordsmith', id: 2 }
  ],
  messages: []
}

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'MESSAGES_LOADED':
      return { ...state, typing: [], messages: action.payload }
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
