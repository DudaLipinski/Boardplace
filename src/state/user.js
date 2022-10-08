const CREATE_USER = "CREATE_USER";

const INITIAL_STATE = {};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const actions = {
  createUser: (user) => ({ type: CREATE_USER, payload: user }),
};

export const selectors = {
  getUser: (state) => state.user,
};
