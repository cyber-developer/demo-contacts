import React, { useEffect } from "react";
import Modal from "./Modal";
import Contacts from "./Contacts";

const ModalB = props => {
  useEffect(props.registerScroll, []);

  return (
    <Modal title="Modal B">
      <Contacts
        isLoading={props.isLoading}
        contacts={props.contacts}
        bodyTitle={props.bodyTitle}
      />
    </Modal>
  );
};

export default ModalB;
