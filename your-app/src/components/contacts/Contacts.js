import React from "react";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

const Contacts = () => {
  return (
    <div>
      <h1>Main contact page</h1>
      <ContactForm />
      <ContactCard />
    </div>
  );
};

export default Contacts;
