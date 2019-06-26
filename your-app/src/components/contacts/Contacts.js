import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import styled from 'styled-components';
import { getContacts } from '../../actions/contactActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    margin: 3% 0%;
    text-transform: uppercase;
    word-spacing: 36px;
    letter-spacing: 11px;
  }
`;

const Contacts = ({ contact: { contacts, loading }, getContacts }) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-nect-line
  }, []);

  if (loading || contacts === null) {
    return <h2>Loading contacts...</h2>;
  }

  return (
    <Wrapper>
      <h1>Contacts</h1>
      <ContactForm />
      {!loading && contacts.length === 0 ? (
        <p>no contacts...</p>
      ) : (
        contacts.map(contact => (
          <ContactCard contact={contact} key={contact.id} />
        ))
      )}
    </Wrapper>
  );
};

const mstp = state => ({
  contact: state.contact
});

export default connect(
  mstp,
  { getContacts }
)(Contacts);
