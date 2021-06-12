import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

const AddContact = () => {
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const handleValidation = () => {
    let formIsValid = true;
    if (!job) {
      formIsValid = false;
      setMessage("Please input your job title");
    }
    if (job) {
      if (!job.match(/^[a-z ,.'-]+$/i)) {
        formIsValid = false;
        setMessage("invalid job");
      }
    }
    if (!name) {
      setMessage("Please input your name");
    }
    if (name) {
      if (!name.match(/^[a-z ,.'-]+$/i)) {
        formIsValid = false;
        setMessage("invalid name");
      }
    }
    if (!phone) {
      message = "Please input your name";
    }
    if (phone) {
      message = "Please input your name";
    }
    if (!email) {
      message = "Please input your name";
    }
    if (email) {
      message = "Please input your name";
    }
    if (!address) {
      message = "Please input your name";
    }
    if (address) {
      message = "Please input your name";
    }
    if (!imageUrl) {
      message = "Please input your name";
    }
    if (imageUrl) {
      message = "Please input your name";
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleValidation}>
        <label>
          job :
          <input
            type="text"
            name="job"
            value={job}
            onChange={e => {
              setJob(e.target.value);
            }}
          />
        </label>
        <label>
          name :
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          phone :
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
        </label>
        <label>
          email :
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          address :
          <input
            type="text"
            name="address"
            value={address}
            onChange={e => {
              setAddress(e.target.value);
            }}
          />
        </label>
        <label>
          imageUrl :
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={e => {
              setImageUrl(e.target.value);
            }}
          />
        </label>

        <button className="btn"> ثبت</button>
      </form>
    </div>
  );
};
export default AddContact;
