/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MatchesService from '../../../services/MatchesService';
import withLoading from '../../../hocs/Loading/index';

import styles from './styles.module.scss';

//const Spinner = require('react-spinkit');


class GameHistory extends Component {
  componentDidMount() {
    this.props.dispatch(MatchesService.getMatches());
  }

  renderRow = item => (
    <tr key={item.id}>
      <td>{item.player_one}</td>
      <td>{item.player_two}</td>
      <td>{item.winner}</td>
      <td>{item.createdAt}</td>
    </tr>
  );

  render() {
    const { history } = this.props;
    return (
      <div className={styles.historyContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Winner</th>
              <th className={styles.tableDateCol}>Date</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {history.map(this.renderRow)}
          </tbody>
        </table>
      </div>);
  }
}

GameHistory.propTypes = {
  error: PropTypes.string,
  history: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    player_one: PropTypes.string.isRequired,
    player_two: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired
  }),
  isLoading: PropTypes.bool
};

GameHistory.defaultProps = {
  // Initial state won't be declared so we use them with defaultProps
  error: '',
  history: [],
  isLoading: true
};

const mapStateToProps = state => ({
  history: state.matches && state.matches.matches,
  isLoading: state.matches.matchesLoading,
  error: state.matches.matchesError
});

const GameHistoryWithLoading = withLoading(GameHistory);

export default connect(mapStateToProps)(GameHistoryWithLoading);
