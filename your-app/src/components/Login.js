import React, { Component } from "react";
import { connect } from "react-redux";
import { login_start } from "../actions";
import styled from "styled-components";
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;
const InnerContainer = styled.div`
  h1 {
    font-family: "Orbitron", sans-serif;
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

const LoginStatus = styled.h1`
  margin: 80px;
  display: flex;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
  font-size: 3rem;
`;

class Login extends Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };
  login_start = e => {
    e.preventDefault();
    this.props.login_start(this.state.creds).then(() => {
      this.props.history.push("/protected");
    });
  };
  render() {
    // maybe better to add loggedIn to state
    // rather than checking token here?
    // if logged in do not display login form
    if (localStorage.getItem("token")) {
      return <LoginStatus>You're logged in!</LoginStatus>;
    }
    return (
      <OuterContainer>
        <InnerContainer>
          <h1> Login </h1>
          <form onSubmit={this.login_start}>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.creds.username}
              onChange={this.handleChange}
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              value={this.state.creds.password}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </InnerContainer>
      </OuterContainer>
    );
  }
}
const mstp = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});
export default connect(
  mstp,
  { login_start }
)(Login);
