import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';

function getLogin(user, pass) {
  return dispatch => {
    dispatch({ type: 'CLEAR_LOGIN' });
    LoginService.validateLogin(user, pass)
      .then(
        res => {
          if (!res.ok) {
            return dispatch({ type: 'GET_LOGIN_FAILURE', res });
          }
          dispatch({ type: 'GET_LOGIN_SUCCESS', res });
          return dispatch(push('/game'));
        }
      );
  };
}

const actionCreators = {
  getLogin
};

export default actionCreators;
