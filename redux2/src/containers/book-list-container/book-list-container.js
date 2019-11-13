import React, { Component } from "react";
import BookList from "../../components/book-list";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-idicator";

import {bindActionCreators} from "redux";
import { connect } from "react-redux";

import { withBookstoreService } from "../../components/hoc";
import { fetchBooks, bookAddedTocart } from "../../actions";
import { compose } from "../../utils";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator error={error} />;

    return <BookList onAddToCart={onAddToCart} books={books} />;
  }
}

const mapStateToProps = ({bookList:{ books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddToCart: bookAddedTocart
  },dispatch);
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
