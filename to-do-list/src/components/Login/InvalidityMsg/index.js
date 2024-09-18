import React from "react";
import "./styles.css";

const InvalidityMsg = ({msg}) => {
  return (
    <div className="invalidityMsg">
      <span>{msg}</span>
    </div>
  );
};

export default InvalidityMsg;