import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteContact, setCurrent } from '../../actions/contactActions';

const Card = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #222223;
  margin: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  p {
    font-size: 1.2rem;
    margin-top: 6%;
    text-align: center;
  }
  button {
    font-size: 1.6rem;
    border: unset;
    background: #fff;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  button:active {
    box-shadow: unset;
  }
  button:focus {
    outline: 0;
  }

  button:nth-of-type(1) {
    color: #de0909;
  }

  button:nth-of-type(2) {
    color: #3df72d;
  }
`;

const Title = styled.div``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8%;
`;

const ContactCard = props => {
  const { contact, deleteContact, setCurrent } = props;
  const onDelete = () => {
    deleteContact(contact.id);
    alert('contact deleted');
  };

  const onClickHandle = contact => {
    setCurrent(contact);
    props.history.push('/update');
  };

  return (
    <Card>
      <Title>
        <p>
          {contact.firstName} {contact.lastName}
        </p>
      </Title>
      <ButtonWrap>
        <button onClick={onDelete}>
          <i className='fas fa-user-times' />
        </button>
        <button onClick={e => onClickHandle(contact)}>
          <i className='fas fa-user-edit' />
        </button>
      </ButtonWrap>
    </Card>
  );
};

export default connect(
  null,
  { deleteContact, setCurrent }
)(ContactCard);
