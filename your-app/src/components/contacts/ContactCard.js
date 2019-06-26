import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

const Card = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  background-color: #f2f7ff;
  color: #222223;
  margin: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    margin-top: 6%;
  }
`;

const ContactCard = ({ contact, deleteContact }) => {
  const onDelete = () => {
    deleteContact(contact.id);
    alert('contact deleted');
  };

  return (
    <Card>
      <p>
        {contact.firstName} {contact.lastName}
        <button onClick={onDelete}>x</button>
      </p>
    </Card>
  );
};

export default connect(
  null,
  { deleteContact }
)(ContactCard);
