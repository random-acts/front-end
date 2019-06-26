import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: Arial, Helvetica, sans-serif;
  align-content: center;
  h1 {
    font-family: "Orbitron", sans-serif;
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
    background-color: #3884ff;
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

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <h1>Random Acts</h1>
          <button>Generate</button>
        </InnerWrapper>
      </Wrapper>
    );
  }
}
