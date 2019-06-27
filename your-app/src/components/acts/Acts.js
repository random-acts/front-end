import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ActForm from './ActForm';
import ActCard from './ActCard';
import styled from 'styled-components';
import { getActs } from '../../actions/actActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    margin: 3% 0%;
    text-transform: uppercase;
    word-spacing: 36px;
    letter-spacing: 11px;
  }
`;

const Acts = props => {
  const {
    act: { acts, loading },
    getActs
  } = props;
  useEffect(() => {
    getActs();
    // eslint-disable-next-line
  }, [getActs]);

  if (loading || acts === null) {
    return <h2>Loading acts...</h2>;
  }

  return (
    <Wrapper>
      <h1>Acts</h1>
      <ActForm />
      {!loading && acts.length === 0 ? (
        <p>no acts...</p>
      ) : (
        acts.map(act => (
          <ActCard act={act} key={act.id} history={props.history} />
        ))
      )}
    </Wrapper>
  );
};

const mstp = state => ({
  act: state.act
});

export default connect(
  mstp,
  { getActs }
)(Acts);
