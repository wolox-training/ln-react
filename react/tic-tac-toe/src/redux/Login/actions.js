import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import LocalStorageService from '../../services/LocalStorageService';

const login = (user, pass) => dispatch => {
  dispatch({ type: 'CLEAR_LOGIN' });
  LoginService.validateLogin(user, pass)
    .then(
      res => {
        if (!res.ok) {
          return dispatch({ type: 'GET_LOGIN_FAILURE', res });
        }
        dispatch({ type: 'GET_LOGIN_SUCCESS', res });
        LocalStorageService.setToken('token', res.data.token);
        return dispatch(push('/game'));
      }
    );
};

const logout = () => dispatch => {
  LocalStorageService.deleteToken('token');
  dispatch({ type: 'LOGOUT' });
  return dispatch(push('/'));
};

const actionCreators = {
  login,
  logout
};

export default actionCreators;
