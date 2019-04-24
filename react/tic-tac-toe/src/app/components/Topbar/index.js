/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/Login/actions';
import userLogo from '../../assets/user-logo.svg';

import styles from './styles.module.scss';

const Topbar = props => {
  const { logout, token } = props;
  return (
    token ? (
      <header className={styles.topbar}>
        <div className={styles.topbarViewsButtons}>
          <Link to="/game">
            <button className={styles.topbarButton}>
              <p className={styles.topbarLink}>Tic Tac Toe</p>
            </button>
          </Link>
          <Link to="/gameHistory">
            <button className={styles.topbarButton}>
              <p className={styles.topbarLink}>Game History</p>
            </button>
          </Link>
        </div>
        <button className={styles.topbarButton} onClick={logout}>
          <img className={styles.topbarUserLogo} src={userLogo} alt="user logo" />
          <p className={styles.topbarLink}>Logout</p>
        </button>
      </header>
    ) : (
      <div />
    )
  );
};

Topbar.propTypes = {
  logout: PropTypes.func.isRequired,
  token: PropTypes.string
};

const mapDispatchToProp = dispatch => ({
  logout: () => dispatch(actionsCreators.logout())
});

const mapStateToProp = state => ({
  token: state.login.token
});

export default connect(mapStateToProp, mapDispatchToProp)(Topbar);
