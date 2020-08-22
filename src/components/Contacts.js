import React, { useState } from "react";

import "../styles/contacts.css";
import ModalC from "./ModalC";
import { validateUIString } from "../handlers/utils";

const Contacts = props => {
  const [showPopup, setShowPopup] = useState(false);
  const [contactForPopup, setContactForPopup] = useState(false);

  const formatContactsData = contacts => {
    let modified = [];
    if (contacts && contacts.length > 0)
      contacts.forEach(v => {
        modified.push({
          id: v.id,
          first_name: v.first_name,
          last_name: v.last_name,
          email: v.email
        });
      });
    return modified;
  };

  const handleRecordClick = contact => {
    setContactForPopup(contact);
    setShowPopup(true);
  };

  return (
    <div>
      {props.isLoading && <div>Loading...</div>}
      {!props.isLoading && (
        <div>
          {props.bodyTitle && <h4>{props.bodyTitle}</h4>}
          <table>
            <thead>
              <tr>
                <th>Sr. #</th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {props.contacts &&
                formatContactsData(props.contacts).map((k, index) => {
                  return (
                    <tr
                      key={index}
                      id={k.id}
                      onClick={() => {
                        handleRecordClick(k);
                      }}
                    >
                      <td>{validateUIString(index + 1)}</td>
                      <td>{validateUIString(k.id)}</td>
                      <td>{validateUIString(k.first_name)}</td>
                      <td>{validateUIString(k.last_name)}</td>
                      <td>{validateUIString(k.email)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            {contactForPopup && showPopup && (
              <ModalC contact={contactForPopup} show={setShowPopup} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
