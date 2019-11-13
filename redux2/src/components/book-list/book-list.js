import React from "react";
import BookListItem from "../book-list-item";

import "./book-list.css";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem onAddToCart={()=>onAddToCart(book.id)} book={book} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
