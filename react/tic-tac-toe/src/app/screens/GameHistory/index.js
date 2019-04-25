/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MatchesService from '../../../services/MatchesService';

import GameHistoryWithLoading from './layout';
import styles from './styles.module.scss';

class GameHistoryContainer extends Component {
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
    return (
      <div className={styles.historyContainer}>
        <GameHistoryWithLoading renderRow={this.renderRow} {...this.props} />
      </div>
    );
  }
}

GameHistoryContainer.propTypes = {
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

GameHistoryContainer.defaultProps = {
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

export default connect(mapStateToProps)(GameHistoryContainer);
