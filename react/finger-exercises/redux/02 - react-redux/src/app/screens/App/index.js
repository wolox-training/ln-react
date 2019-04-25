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

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected, searchBook, addItem, removeItem } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={searchBook} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length ? (
          <ShoppingCart data={bookSelected} addItem={addItem} removeItem={removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  getBooks: PropTypes.func.isRequired,
  searchBook: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  bookSelected: PropTypes.array,
  originalData: PropTypes.array.isRequired
};


const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  searchBook: value => dispatch(actionsCreators.searchBook(value)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId)),
  addItem: itemId => dispatch(actionsCreators.addItem(itemId))
});

const mapStateToProps = state => ({
  books: state.books.books,
  bookSelected: state.books.bookSelected,
  originalData: state.books.originalData
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
