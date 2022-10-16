const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"
const ADD_PLAYER = "ADD_FRIEND"

const INITIAL_STATE = null

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload
    case REMOVE_USER:
      return null
    case ADD_PLAYER:
      return { ...state, players: action.payload }
    default:
      return state
  }
}

export const actions = {
  addUser: (user) => ({ type: ADD_USER, payload: user }),
  removeUser: () => ({ type: REMOVE_USER }),
  addPlayer: () => ({ type: ADD_PLAYER }),
}

export const selectors = {
  getUser: (state) => state.user,
  getIsLoggedIn: (state) => !!state.user,
  getPlayers: (state) => state.players,
}
