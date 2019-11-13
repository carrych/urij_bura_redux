import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Cntr = ({ cntr, inc, dec, rand }) => {
  return (
    <div className="jumbotron">
      <h2>{cntr}</h2>
      <button onClick={dec} className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={rand} className="btn btn-primary btn-lg">
        RAND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cntr: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Cntr);
