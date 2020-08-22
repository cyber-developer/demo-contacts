import React, { useEffect } from "react";
import Contacts from "./Contacts";
import Modal from "./Modal";

const ModalA = props => {
  useEffect(props.registerScroll, []);

  return (
    <Modal title="Modal A">
      <Contacts
        isLoading={props.isLoading}
        contacts={props.contacts}
        bodyTitle={props.bodyTitle}
      />
    </Modal>
  );
};

export default ModalA;
