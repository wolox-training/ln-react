import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Square = (props) => {
  return (
    <button 
        type="button" 
        className={styles.square}
        onClick={props.onClick} >
          {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number
};

export default Square;
