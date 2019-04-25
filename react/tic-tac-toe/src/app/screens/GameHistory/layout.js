import React from 'react';
import PropTypes from 'prop-types';

import withLoading from '../../../hocs/Loading/index';

import styles from './styles.module.scss';

function GameHistory({ renderRow, history }) {
  return (
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
        {history.map(renderRow)}
      </tbody>
    </table>);
}

GameHistory.propTypes = {
  renderRow: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      player_one: PropTypes.string.isRequired,
      player_two: PropTypes.string.isRequired,
      winner: PropTypes.string.isRequired
    }))
};

export default withLoading(GameHistory);
