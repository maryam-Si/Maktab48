import React from "react";
import bookMark from "../images/bookmark-icon-png-16.jpg";
const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <div className="image">
        <img src={contact.image} alt="" />
      </div>
      <img className="bookmark" src={bookMark} alt="" />
      <div className="content">
        <div className="name">{contact.name}</div>
        <p>{contact.phone}</p>
        <p>{contact.job}</p>
      </div>
    </div>
  );
};
export default Contact;
