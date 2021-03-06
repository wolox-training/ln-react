const initialState = {
  isLoading: true,
  loggedIn: false,
  token: '',
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: false,
        loggedIn: action.token !== null,
        token: action.token
      };
    case 'CLEAR_LOGIN':
      return {
        ...state,
        loggedIn: false,
        token: '',
        error: ''
      };
    case 'GET_LOGIN_SUCCESS':
      return {
        ...state,
        token: action.res.data.token,
        loggedIn: true
      };
    case 'GET_LOGIN_FAILURE':
      return {
        ...state,
        error: action.res.status === 401 ? 'Login error. Invalid user or password.' : 'Login error.',
        loggedIn: false
      };
    case 'LOGOUT':
      return {
        ...state,
        token: '',
        loggedIn: false
      };
    default:
      return { ...state };
  }
}

export default reducer;
