import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetch_start } from '../actions/index';
import { getContacts } from '../actions/contactActions';

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

const RdmActs = styled.div`
  border: 10px solid #52a577;
  padding: 25% 50%;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const Home = props => {
  const { getContacts } = props;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, [getContacts]);

  const fetchAct = e => {
    e.preventDefault();
    props.fetch_start();
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Random Acts</h1>
        <RdmActs> {props.rdmActs} </RdmActs>
        <button onClick={fetchAct}>Generate</button>
      </InnerWrapper>
    </Wrapper>
  );
};

const mstp = state => ({
  rdmActs: state.rdmActs,
  error: state.error,
  isLoading: state.isloading,
  contact: state.contact
});

export default connect(
  mstp,
  { fetch_start, getContacts }
)(Home);
