const updateCartItems = (cartItems, item, index) => {
    if (index === -1) return [...cartItems, item];
    if (!item.count)
      return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  };
  
  const updateCartItem = (book, item = {}, amount) => {
    const { id = book.id, count = 0, total = 0, title = book.title } = item;
  
    return {
      id,
      title,
      count: count + amount,
      total: total + book.price * amount
    };
  };
  
  const updateOrder = (state, bookId, amount) => {
    const {
      bookList: { books },
      shoppingCart: { cartItems }
    } = state;
    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
  
    const newItem = updateCartItem(book, item, amount);
  
    return {
      orderTotal: 0,
      cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
  };
  

const updateShoppingCart = (state, action) => {
    if (!state)
      return {
        cartItems: [],
        orderTotal: 0
      };
  
    switch (action.type) {
      case "BOOK_ADDED_TO_CART":
        return updateOrder(state, action.payload, 1);
      case "BOOK_DELETED_FROM_CART":
        const item = state.shoppingCart.cartItems.find(
          ({ id }) => id === action.payload
        );
        return updateOrder(state, action.payload, -item.count);
      case "DECREASED_AMOUNT_OF_BOOKS_IN_CART":
        return updateOrder(state, action.payload, -1);
      default:
        return state.shoppingCart;
    }
  };

  export default updateShoppingCart;