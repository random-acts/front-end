import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteAct, setCurrent } from "../../actions/actActions";

const Card = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f2f7ff;
  color: #222223;
  margin: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  p {
    font-size: 1.2rem;
    margin-top: 6%;
  }
`;

const ActCard = props => {
  const { act, deleteAct, setCurrent } = props;
  const onDelete = () => {
    deleteAct(act.id);
    alert("act deleted");
  };

  const onClickHandle = act => {
    setCurrent(act);
    props.history.push("/edit");
  };

  return (
    <Card>
      <p>{act.act}</p>
      <button onClick={onDelete}>
        <i className="fas fa-folder-minus" />
        Delete Act
      </button>
      <button onClick={e => onClickHandle(act)}>Edit</button>
    </Card>
  );
};

export default connect(
  null,
  { deleteAct, setCurrent }
)(ActCard);
