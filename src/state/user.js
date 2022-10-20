const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_MATCHES = 'SET_MATCHES'

const INITIAL_STATE = null

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload
    case REMOVE_USER:
      return null
    case SET_MATCHES:
      return { ...state, matches: action.payload }
    default:
      return state
  }
}

export const actions = {
  addUser: (user) => ({ type: ADD_USER, payload: user }),
  removeUser: () => ({ type: REMOVE_USER }),
  setMatches: (matches) => ({ type: SET_MATCHES, payload: matches }),
}

export const selectors = {
  getUser: (state) => state.user,
  getUserId: (state) => state.user.id,
  getIsLoggedIn: (state) => !!state.user,
  getUserMatches: (state) => state.user.matches,
}
