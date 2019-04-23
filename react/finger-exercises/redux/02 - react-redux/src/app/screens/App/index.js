import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import actionsCreators from '../../../redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  // TODO to implement the dispatch
  onSearch = value => {
    this.props.searchBook(value);
  };

  // TODO to implement the dispatch
  addToCart = item => {
    this.props.addToCart(item);
  };

  // TODO to implement the dispatch
  addItem = itemId => {
    this.props.addItem(itemId);
  };

  // TODO to implement the dispatch
  removeItem = itemId => {
    this.props.removeItem(itemId);
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length ? (
          <ShoppingCart data={bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

App.PropTypes = {
  //Store Functions
  getBooks: PropTypes.func.isRequired,
  searchBook: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  //States
  books: PropTypes.array.isRequired,
  bookSelected: PropTypes.array,
  originalData: PropTypes.array.isRequired
};

const mapDispatchToProp = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  searchBook: value => dispatch(actionsCreators.searchBook(value)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId)),
  addItem: itemId => dispatch(actionsCreators.addItem(itemId))
});

const mapStateToProp = state => ({
  books: state.books.books,
  bookSelected: state.books.bookSelected,
  originalData: state.books.originalData
});

export default connect(mapStateToProp, mapDispatchToProp)(App);
