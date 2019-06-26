import React from 'react';
import { connect } from 'react-redux';
import { sign_up } from '../actions/index';
import styled from 'styled-components';
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;
const InnerContainer = styled.div`
  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    text-align: center;
    margin: 3% 0%;
    text-transform: uppercase;
    word-spacing: 36px;
    letter-spacing: 11px;
    margin-top: 12%;
  }
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
      background-color: #3884ff;
      border-radius: 10px;
      border: unset;
      color: #fff;
      text-transform: uppercase;
      box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;
class Signup extends React.Component {
  state = {
    creds: {
      userName: '',
      password: ''
    }
  };
  handleChanges = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };
  userSignup = e => {
    e.preventDefault();
    this.props.sign_up(this.state.creds);
    this.props.history.push('/Login');
  };
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <h1> Register </h1>
          <form onSubmit={this.userSignup}>
            <input
              type='text'
              name='userName'
              value={this.state.creds.userName}
              placeholder='UserName'
              onChange={this.handleChanges}
            />
            <input
              type='text'
              name='password'
              value={this.state.creds.password}
              placeholder='Password'
              onChange={this.handleChanges}
            />
            <button onClick={this.userSignup}>Sign Up</button>
          </form>
        </InnerContainer>
      </OuterContainer>
    );
  }
}
export default connect(
  null,
  { sign_up }
)(Signup);
