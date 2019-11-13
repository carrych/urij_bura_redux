import React from "react";
import BookListContainer from "../../containers/book-list-container";
import ShopingDetails from "../details";

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShopingDetails />
    </div>
  );
};

export default HomePage;
