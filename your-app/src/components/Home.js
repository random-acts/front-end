import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: Arial, Helvetica, sans-serif;
  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
    text-align: center;
    margin: 3% 0%;
    text-transform: uppercase;
    word-spacing: 36px;
    letter-spacing: 11px;
  }
  button {
    width: 300px;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Random Acts</h1>
        <button>Generate</button>
      </Wrapper>
    );
  }
}
