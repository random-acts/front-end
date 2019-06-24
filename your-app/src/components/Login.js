import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1> Login </h1>
        <form>
          <input placeholder="Username" type="text" />
          <input placeholder="Password" type="password" />
        </form>
      </div>
    );
  }
}
