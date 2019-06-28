import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetch_start } from '../actions/index';
import { getContacts } from '../actions/contactActions';
import { getActs } from '../actions/actActions';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: Arial, Helvetica, sans-serif;
  align-content: center;

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    margin: 3% 0%;
    text-transform: uppercase;
    word-spacing: 36px;
    letter-spacing: 11px;
  }

  button {
    width: 500px;
    margin-top: 4%;
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
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomActBox = styled.div`
  width: 600px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
  font-family: 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-top: 8%;
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    margin-top: 8%;
    font-size: 1rem;
  }
`;

const Home = props => {
  const { getContacts, getActs } = props;
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [selectedAct, setSelectedAct] = useState('');

  useEffect(() => {
    getContacts();
    getActs();
    // eslint-disable-next-line
  }, [getContacts, getActs]);

  const random = arr => {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  };
  let theCons = props.contact.contacts;
  let theActs = props.act.acts;

  const handleClick = () => {
    let randCon = random(theCons);
    let randAct = random(theActs);
    setFirst(randCon.firstName);
    setLast(randCon.lastName);
    setSelectedAct(randAct.act);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Random Acts</h1>
        <RandomActBox>
          <h2>
            {first} {last}
          </h2>
          <p>{selectedAct}</p>
        </RandomActBox>
        <button onClick={() => handleClick()}>Generate</button>
      </InnerWrapper>
    </Wrapper>
  );
};

const mstp = state => ({
  rdmActs: state.rdmActs,
  error: state.error,
  isLoading: state.isloading,
  contact: state.contact,
  act: state.act
});

export default connect(
  mstp,
  { fetch_start, getContacts, getActs }
)(Home);
