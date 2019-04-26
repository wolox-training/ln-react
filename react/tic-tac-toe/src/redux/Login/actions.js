import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import LocalStorageService from '../../services/LocalStorageService';

const login = (user, pass) => dispatch => {
  dispatch({ type: '@@login/CLEAR_LOGIN' });
  LoginService.validateLogin(user, pass)
    .then(
      res => {
        if (!res.ok) {
          return dispatch({ type: '@@login/GET_LOGIN_FAILURE', res });
        }
        dispatch({ type: '@@login/GET_LOGIN_SUCCESS', data: { res, user } });
        LocalStorageService.setToken('token', res.data.token);
        LocalStorageService.setToken('userName', user);
        return dispatch(push('/game'));
      }
    );
};

const logout = () => dispatch => {
  LocalStorageService.deleteToken('token');
  LocalStorageService.deleteToken('userName');
  dispatch({ type: '@@login/LOGOUT' });
  return dispatch(push('/'));
};

const actionCreators = {
  login,
  logout
};

export default actionCreators;
