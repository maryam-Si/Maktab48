import React, { useState } from "react";
import ContactsList from "./components/ContactsList";
import ContactInfo from "./components/ContactInfo";
import AddContact from "./components/AddContact";

const App = () => {
  let contacts = [
    {
      id: 1,
      job: "Web Designer",
      name: "Mary Margaret",
      phone: "555-1234",
      email: "snowwhite@ouatmail.com",
      address: "945 N. Storybrook Ln",
      image:
        "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 2,
      job: "Nursing Assistant",
      name: "David Nolan",
      phone: "555-9876",
      email: "princecharming@ouatmail.com",
      address: "945 N. Storybrook Ln",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 3,
      job: "Sales manager",
      name: "Emma Swan",
      phone: "555-2345",
      email: "thesavior@ouatmail.com",
      address: "693 N. Storybrook Ln",
      image:
        "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 4,
      job: "Makeup artist",
      name: "Regina Mills",
      phone: "555-6667",
      email: "evilqueen@ouatmail.com",
      address: "1313 E. Mayor St",
      image:
        "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 5,
      job: "Civil engineer",
      name: "Mr. Gold",
      phone: "555-4653",
      email: "rumplestiltskin@ouatmail.com",
      address: "101 N. Main St",
      image:
        "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 6,
      job: "Writer",
      name: "Holden Barry",
      phone: "667-4653",
      email: "holdenbarry@codax.com",
      address: "203 S. Main St",
      image:
        "https://images.pexels.com/photos/2102332/pexels-photo-2102332.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ];
  const [contactList, setcontactList] = useState(contacts);
  const [showAddForm, setShowAddForm] = useState(false);
  function showForm() {
    setShowAddForm(true);
  }
  function addContact(params) {}
  return (
    <div className="app">
      {showAddForm ? (
        <AddContact />
      ) : (
        <ContactsList contacts={contactList} showForm={showForm} />
      )}
      <ContactInfo />
    </div>
  );
};
export default App;
