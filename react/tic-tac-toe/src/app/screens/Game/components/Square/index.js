import React from 'react';

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

export default Square;