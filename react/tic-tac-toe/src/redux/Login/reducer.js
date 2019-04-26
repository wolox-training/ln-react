const initialState = {
  isLoading: true,
  loggedIn: false,
  token: '',
  error: '',
  userName: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case '@@login/INIT':
      return {
        ...state,
        isLoading: false,
        loggedIn: action.token !== null,
        token: action.payload.token,
        userName: action.payload.userName
      };
    case '@@login/CLEAR_LOGIN':
      return {
        ...state,
        loggedIn: false,
        token: '',
        error: ''
      };
    case '@@login/GET_LOGIN_SUCCESS':
      return {
        ...state,
        token: action.data.res.data.token,
        userName: action.data.user,
        loggedIn: true
      };
    case '@@login/GET_LOGIN_FAILURE':
      return {
        ...state,
        error: action.res.status === 401 ? 'Login error. Invalid user or password.' : 'Login error.',
        loggedIn: false
      };
    case '@@login/LOGOUT':
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
