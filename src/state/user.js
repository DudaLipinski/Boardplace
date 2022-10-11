const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

const INITIAL_STATE = {};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export const actions = {
  addUser: (user) => ({ type: ADD_USER, payload: user }),
  removeUser: () => ({ type: REMOVE_USER }),
};

export const selectors = {
  getUser: (state) => state.user,
};
