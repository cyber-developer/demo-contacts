import React from "react";

import ModalPopup from "./generic/ModalPopup";
import { validateUIString } from "../handlers/utils";

const ModalC = props => {
  return (
    <ModalPopup>
      <h4>This is Modal C</h4>
      <div>
        <div className="row">
          <div className="col-sm-3">
            <label>ID</label>
          </div>
          <div className="col-sm-9">
            <span>{validateUIString(props.contact.id)}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>First Name</label>
          </div>
          <div className="col-sm-9">
            <span>{validateUIString(props.contact.first_name)}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>Last Name</label>
          </div>
          <div className="col-sm-9">
            <span>{validateUIString(props.contact.last_name)}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>Email</label>
          </div>
          <div className="col-sm-9">
            <span>{validateUIString(props.contact.email)}</span>
          </div>
        </div>
        <div className="row">
          <button
            onClick={() => {
              props.show(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </ModalPopup>
  );
};

export default ModalC;
