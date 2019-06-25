import React from "react";
import { connect } from "react-redux";
// import { getContacts, addContact } from '../actions';

class ContactForm extends React.Component {
  state = {
    name: {
      first: "",
      last: ""
    }
  };

  componentDidMount() {
    // this.props.getContacts();
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state.creds,
      [e.target.name]: e.target.value
    });
  };

  addContact = e => {
    e.preventDefault();
    const newContact = {
      first: this.state.name.first,
      last: this.state.name.last
    };

    this.props.addContact(newContact);
    this.setState({
      name: {
        first: "",
        last: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChanges}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChanges}
            required
          />
          <button onClick={this.addContact}>Add a contact</button>
        </form>
      </div>
    );
  }
}

const mstp = state => ({
  contacts: state.contacts,
  loading: state.loading
});

export default connect(
  mstp,
  {
    // getContacts,
    // addContact
  }
)(ContactForm);
