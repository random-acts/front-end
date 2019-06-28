import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteAct, setCurrent } from '../../actions/actActions';

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
    color: red;
  }

  button:nth-of-type(2) {
    color: green;
  }
`;

const Title = styled.div``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8%;
`;

const ActCard = props => {
  const { act, deleteAct, setCurrent } = props;
  const onDelete = () => {
    deleteAct(act.id);
    alert('act deleted');
  };

  const onClickHandle = act => {
    setCurrent(act);
    props.history.push('/edit');
  };

  return (
    <Card>
      <Title>
        <p>{act.act}</p>
      </Title>
      <ButtonWrap>
        <button onClick={onDelete}>
          <i class='fas fa-trash-alt' />
        </button>
        <button onClick={e => onClickHandle(act)}>
          <i className='fas fa-edit' />
        </button>
      </ButtonWrap>
    </Card>
  );
};

export default connect(
  null,
  { deleteAct, setCurrent }
)(ActCard);
