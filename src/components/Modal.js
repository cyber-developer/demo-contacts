import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setCountryID,
  showOnlyEvenIDs,
  reset,
  setQueryText
} from "../redux-store/actions/actions";
import "../styles/modal.css";
import ModalPopup from "./generic/ModalPopup";

const Modal = props => {
  return (
    <ModalPopup>
      <div className="modal-header">
        <ModalHeader title={props.title} />
      </div>

      <div className="modal-body">
        <ModalBody>{props.children}</ModalBody>
      </div>

      <div className="modal-footer">
        <ModalFooter />
      </div>
    </ModalPopup>
  );
};

const ModalHeader = props => {
  const state = useSelector(_ => _.filtersReducer);

  const dispatch = useDispatch();

  const WAIT_INTERVAL = 500;
  const ENTER_KEY = 13;
  let timer = null;
  let txt = null;

  const btnClickContacts = id => {
    dispatch(setCountryID(id));
  };

  const handleChange = e => {
    clearTimeout(timer);
    const val = e.target.value ? e.target.value : "";
    txt = val;
    dispatch(setQueryText(val));

    timer = setTimeout(triggerChange, WAIT_INTERVAL);
  };

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(timer);

      dispatch(setQueryText(txt));
      triggerChange();
    }
  };

  const triggerChange = () => {
    clearTimeout(timer);
  };

  const handleClickClose = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h4 align="center">This is {props.title}</h4>
      <div className="row">
        <Link
          to="/contacts"
          onClick={() => {
            btnClickContacts(0);
          }}
          className="btn btn-a"
        >
          All Contacts
        </Link>
        <Link
          to="/contacts/226"
          onClick={() => {
            btnClickContacts(226);
          }}
          className="btn btn-b"
        >
          U.S. Contacts
        </Link>
        <Link to="/" onClick={handleClickClose} className="btn btn-c">
          Close
        </Link>
      </div>
      <div className="row" style={{ padding: "10px" }}>
        <label>
          Search&nbsp;
          <input
            name="textSearch"
            type="text"
            value={state.query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
      </div>
    </div>
  );
};

const ModalBody = props => {
  return <div>{props.children}</div>;
};

const ModalFooter = () => {
  const state = useSelector(_ => _.filtersReducer);
  const dispatch = useDispatch();

  const handleChangeCheckbox = e => {
    const target = e.target;
    const value =
      target.name === "showOnlyEvenIDs" ? target.checked : target.value;

    dispatch(showOnlyEvenIDs(value));
  };

  return (
    <div>
      <label>
        Only Even?&nbsp;
        <input
          name="showOnlyEvenIDs"
          type="checkbox"
          checked={state.showOnlyEven}
          onChange={handleChangeCheckbox}
        />
      </label>
    </div>
  );
};

export default Modal;
