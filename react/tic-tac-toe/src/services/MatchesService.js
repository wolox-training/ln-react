import { wrapService } from 'redux-recompose';

import api from '../config/api';

/*
const getMatches = async () => new Promise(resolve => setTimeout(() => resolve(api.get('/matches')), 1000));

getMatches.successSelector = response => response.data;
/*
getMatches.injections = [
  withPostSuccess((dispatch, response, state) => alert(`Fetched at: 1234`))
];

const service = {
  getMatches
};

*/

const getMatches = () => api.get('/matches');
/*getMatches.successSelector = response => {
  console.log('success selector', response.data);
  return response.data;
};*/

const service = {
  getMatches
};

// wrapService(service, reducer_name, target_each_action)
export default wrapService(service, 'matches', { getMatches: 'matches' });
