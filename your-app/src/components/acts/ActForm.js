import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addAct } from '../../actions/actActions';

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

const ActForm = ({ addAct }) => {
  const [formData, setFormData] = useState({
    act: ''
  });

  console.log(formData);

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const { act } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    addAct(formData);

    setFormData({});
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Random act of kindness...'
          name='act'
          value={act || ''}
          onChange={e => updateFormData(e)}
          required
        />
        <button>Add Random Act</button>
      </form>
    </Wrapper>
  );
};

export default connect(
  null,
  { addAct }
)(ActForm);
