const SET_USER = 'SET_USER'
const SET_MATCHES = 'SET_MATCHES'

const INITIAL_STATE = null

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case SET_MATCHES:
      return { ...state, matches: action.payload }
    default:
      return state
  }
}

export const actions = {
  setUser: (user) => ({ type: SET_USER, payload: user }),
  setMatches: (matches) => ({ type: SET_MATCHES, payload: matches }),
}

export const selectors = {
  getUser: (state) => state.user,
  getUserId: (state) => state.user.id,
  getIsLoggedIn: (state) => !!state.user,
  getUserMatches: (state) => state.user.matches,
}
