import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateContact } from '../../actions/contactActions';

const Wrapper = styled.div`
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
      background-color: #52a577;
      border-radius: 10px;
      border: unset;

      color: #fff;
      text-transform: uppercase;
      box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;

class EditContact extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: ''
    }
  };

  componentDidMount() {
    console.log(this.props.current + 'From line 41');
    this.setState({
      user: this.props.current
    });
    console.log(this.state.user + 'Look here');
  }

  updateFormData = e => {
    // console.log(e.target);
    e.persist();
    this.setState(prevState => ({
      user: { ...prevState.user, [e.target.name]: e.target.value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateContact(this.state.user);
    this.props.history.push('/contacts');
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='First Name'
            name='firstName'
            value={this.state.user.firstName}
            onChange={this.updateFormData}
            required
          />
          <input
            placeholder='Last Name'
            name='lastName'
            value={this.state.user.lastName}
            onChange={this.updateFormData}
            required
          />
          <button>Add a contact</button>
        </form>
      </Wrapper>
    );
  }
}

const mstp = state => ({
  current: state.contact.current
});

export default connect(
  mstp,
  { updateContact }
)(EditContact);
