import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login_start } from '../actions';

class Login extends Component {
  state = {
    creds: {
      username: '',
      password: ''
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
      this.props.history.push('/protected');
    });
  };
  render() {
    // maybe better to add loggedIn to state
    // rather than checking token here?
    // if logged in do not display login form
    if (localStorage.getItem('token')) {
      return <h1>You're logged in!</h1>;
    }
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.login_start}>
          <input
            placeholder='Username'
            type='text'
            name='username'
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          <input
            placeholder='Password'
            type='text'
            name='password'
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
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
