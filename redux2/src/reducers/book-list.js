const updateBookList = (state, action) => {
    if (!state)
      return {
        books: [],
        loading: true,
        error: null
      };
  
    switch (action.type) {
      case "FETCH_BOOKS_SUCCESS":
        return {
          books: [],
          loading: true,
          error: null
        };
      case "FETCH_BOOKS_LOADED":
        return {
          error: null,
          books: action.payload,
          loading: false
        };
      case "FETCH_BOOKS_FAILURE":
        return {
          books: [],
          loading: false,
          error: action.payload
        };
      default:
        return state.bookList;
    }
  };

  export default updateBookList;