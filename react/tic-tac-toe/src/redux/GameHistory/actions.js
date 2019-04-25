/*import { createExternalActions } from 'redux-recompose';

//import MatchesService from '~services/MatchesService';

const $ = createExternalActions('gameHistory');

const actionCreators = {
  getMatches = () => dispatch => {
    dispatch({ $.LOADING, target: 'matches' });
    MatchesService.getMatches()
      .then(response => {
        if (response.ok) {
          dispatch({ $.SUCCESS, target: 'matches', payload: response.data })
        } else {
          dispatch({ $.FAILURE, target: 'matches', payload: response.problem })
        }
      })
  }
};

export default actionCreators; 
*/