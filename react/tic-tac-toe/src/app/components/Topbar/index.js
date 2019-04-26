/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/Login/actions';
import userLogo from '../../assets/user-logo.svg';

import styles from './styles.module.scss';

function Topbar(props) {
  const { logout, userName } = props;
  return (
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
      <div className={styles.topbarViewsButtons}>
        <h6 className={styles.topbarUsername}>¡Welcome {userName}!</h6>
        <button className={styles.topbarButton} onClick={logout}>
          <img className={styles.topbarUserLogo} src={userLogo} alt="user logo" />
          <p className={styles.topbarLink}>Logout</p>
        </button>
      </div>
    </header>
  );
}

Topbar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionsCreators.logout())
});

export default connect(null, mapDispatchToProps)(Topbar);
