import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchesService from '../../../services/MatchesService';

import styles from './styles.module.scss';

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
    const {isLoading, error, history } = this.props;
    if (isLoading) {
      return <Spinner name="wandering-cubes" />;
    }
    if (error && error !== '') {
      return (
        <p>{error}</p>
      );
    }
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

GameHistory.defaultProps = {
  // Initial state won't be declared so we use them with defaultProps
  error: '',
  history: [],
  isLoading: true
};

const mapStateToProps = state => ({
  history: state.matches && state.matches.matches,
  isLoading: state.matches.matchesLoading,
  error: state.matchesError && state.matches.matchesError
});

export default connect(mapStateToProps)(GameHistory);
