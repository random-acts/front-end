import React from 'react';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  state = {
    newUser: {
      UserName: '',
      Password: ''
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handler}>
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
      </React.Fragment>
    );
  }
}
