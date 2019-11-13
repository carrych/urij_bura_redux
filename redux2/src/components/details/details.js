import React from "react";
import { connect } from "react-redux";
import {
  bookDeletedFromCart,
  bookDecreasInCart,
  bookAddedTocart
} from "../../actions";

import "./details.css";

const ShopingDetails = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-small"
          >
            <i className="fa fa-trash" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-small"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-small"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shoping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total:${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedTocart,
  onDecrease: bookDecreasInCart,
  onDelete: bookDeletedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingDetails);
