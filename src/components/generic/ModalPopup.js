import React from "react";

import "../../styles/modal.css";

const ModalPopup = props => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

export default ModalPopup;
