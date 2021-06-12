import React from "react";
import Contact from "./Contact";
import { AiOutlineUpload } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

const ContactsList = ({ contacts, showForm }) => {
  return (
    <div className="left">
      <h1>contacts</h1>
      <div className="contacts-container">
        {contacts.map(item => (
          <Contact key={item.id} contact={item} />
        ))}
      </div>
      <footer>
        <div className="upload">
          <BiHomeAlt />
        </div>
        <div className="add-btn" onClick={showForm()}>
          <FiPlus />
        </div>
        <div className="upload">
          <AiOutlineUpload />
        </div>
      </footer>
    </div>
  );
};
export default ContactsList;
