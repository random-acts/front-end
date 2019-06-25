import React from 'react';
import { connect } from 'react-redux';
// import { getContacts, addContact } from '../actions';

class ContactForm extends React.Component {
  state = {
    firstName: '',
    age: ''
  };

  addContact() {
    console.log('adding contact');
  }

  getContacts() {
    console.log('getting contact');
  }

  componentDidMount() {
    // this.props.getContacts();
    this.getContacts();
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    this.props.addContact(newFriend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChanges}
            required
          />
          <input
            placeholder='Last Name'
            name='lastName'
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
