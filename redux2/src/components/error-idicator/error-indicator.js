import React from "react";
import "./error-indicator.css";
import icon from "./IMG_error.jpg";

const ErrorIndicator = ({ error }) => {
  const { message } = error;

  return (
    <div className="error-indicator">
      <img src={icon} alt="ERROR!" />
      <span className="boom">BOOM!</span>
      <span>{message}</span>
    </div>
  );
};

export default ErrorIndicator;
