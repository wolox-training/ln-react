import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import actionsCreators from '../../../../../redux/shoppingCart/actions';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends Component {
  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.props.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.props.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{data.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {data.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  data: arrayOf(bookSelectedPropType).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired,
  toggleContent: func.isRequired,
  open: bool.isRequired
};

const mapDispatchToProp = dispatch => ({
  toggleContent: () => dispatch(actionsCreators.toggleContent())
});

const mapStateToProp = state => ({
  open: state.shoppingCart.open
});

export default connect(mapStateToProp, mapDispatchToProp)(ShoppingCart);
