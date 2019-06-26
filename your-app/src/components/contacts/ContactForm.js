import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      font-size: 1.3rem;
      margin-top: 4%;
    }

    button {
      margin-top: 12%;
      font-size: 1.3rem;
      padding: 10px 30px;
      background-color: #52a577;
      border-radius: 10px;
      border: unset;

      color: #fff;
      text-transform: uppercase;
      box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  console.log(formData);

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const { firstName, lastName } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    addContact(formData);

    setFormData({});
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='First Name'
          name='firstName'
          value={firstName || ''}
          onChange={e => updateFormData(e)}
          required
        />
        <input
          placeholder='Last Name'
          name='lastName'
          value={lastName || ''}
          onChange={e => updateFormData(e)}
          required
        />
        <button>Add a contact</button>
      </form>
    </Wrapper>
  );
};

export default connect(
  null,
  { addContact }
)(ContactForm);
