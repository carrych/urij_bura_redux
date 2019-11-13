const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_LOADED",
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_SUCCESS"
  };
};

const booksError = error => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};

export const bookAddedTocart = bookId => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  };
};

export const bookDeletedFromCart = bookId => {
  return {
    type: "BOOK_DELETED_FROM_CART",
    payload: bookId
  };
};

export const bookDecreasInCart = bookId => {
  return {
    type: "DECREASED_AMOUNT_OF_BOOKS_IN_CART",
    payload: bookId
  };
};

// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//   dispatch(booksRequested());
//   bookstoreService
//     .getBooks()
//     .then(data => {
//       dispatch(booksLoaded(data));
//     })
//     .catch(err => {
//       dispatch(booksError(err));
//     });
// };

const fetchBooks = bookstoreService => () => dispatch => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => {
      dispatch(booksLoaded(data));
    })
    .catch(err => {
      dispatch(booksError(err));
    });
};

export { fetchBooks };
