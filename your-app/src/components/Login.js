import React, { Component } from "react";
import { connect } from "react-redux";
import { login_start } from "../actions";

class Login extends Component {
  state = {
    credentionals: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentionals: {
        ...this.state.credentionals,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };
  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.login}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.credentionals}
            onechange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            value={this.state.credentionals}
            onechange={this.handleChange}
          />
        </form>
        <button type="onSubmit"> Login</button>
      </div>
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
