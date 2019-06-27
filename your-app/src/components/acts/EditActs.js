import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateAct } from '../../actions/actActions';

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

class EditAct extends React.Component {
  state = {
    act: {
      act: ''
    }
  };

  componentDidMount() {
    this.setState({
      act: this.props.current
    });
  }

  updateFormData = e => {
    // console.log(e.target);
    e.persist();
    this.setState(prevState => ({
      act: { ...prevState.act, [e.target.name]: e.target.value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateAct(this.state.act);
    this.props.history.push('/acts');
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Act'
            name='act'
            value={this.state.act.act}
            onChange={this.updateFormData}
            required
          />
          <button>Edit Act</button>
        </form>
      </Wrapper>
    );
  }
}

const mstp = state => ({
  current: state.act.current
});

export default connect(
  mstp,
  { updateAct }
)(EditAct);
