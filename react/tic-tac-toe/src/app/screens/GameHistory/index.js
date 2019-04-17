/* eslint-disable no-negated-condition */
import React, { Component } from 'react';

import styles from './styles.module.scss';

import MatchesService from '~services/MatchesService';

//import api from '~config/api';

const Spinner = require('react-spinkit');

class GameHistory extends Component {
  state = {
    isLoading: true,
    history: [],
    error: ''
  };

  getData() {
    MatchesService.getMatches()
      .then(response => {
        if (response.ok) {
          this.setState({
            isLoading: false,
            history: response.data
          });
        } else {
          this.setState({ error: 'No se pudo cargar la información.' });
        }
      });
  }

  componentDidMount() {
    this.getData();
  }

  renderRow = item => {
    return (
      <tr key={item.id}>
        <td>{item.player_one}</td>
        <td>{item.player_two}</td>
        <td>{item.winner}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className={styles.historyContainer}>
        {!this.state.isLoading ? (
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {this.state.history.map(this.renderRow)}
            </tbody>
          </table>
        ) : (
          this.state.error !== '' ? (
            <p>{this.state.error}</p>
          ) : (
            <Spinner name="wandering-cubes" />
          )
        )
        }
      </div>
    );
  }
}

export default GameHistory;
