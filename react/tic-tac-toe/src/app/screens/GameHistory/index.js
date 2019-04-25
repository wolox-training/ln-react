import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

import MatchesService from '~services/MatchesService';

class GameHistory extends Component {
  state = {
    isLoading: true,
    history: [],
    error: ''
  };

  getData = () => {
    MatchesService.getMatches()
      .then(response => {
        if (response.ok) {
          this.setState({
            isLoading: false,
            history: response.data
          });
        } else {
          this.setState({
            isLoading: false,
            error: 'No se pudo cargar la información.'
          });
        }
      });
  }

  componentDidMount() {
    this.getData();
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
    if (this.state.isLoading) {
      return <Spinner name="wandering-cubes" />;
    }
    if (this.state.error !== '') {
      return (
        <p>{this.state.error}</p>
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
            {this.state.history.map(this.renderRow)}
          </tbody>
        </table>
      </div>);
  }
}

export default GameHistory;
