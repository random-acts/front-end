import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #3884ff;

  font-size: 1.4rem;
  filter: drop-shadow(1px 2px 4px black);
`;

const MainNav = styled.nav`
  width: 1000px;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    padding: 2% 0%;
    color: #fff;
    cursor: pointer;
  }
`;

const HomeWrapper = styled.div`
  width: 60%;
  display: flex;
`;

const SecondaryWrap = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

const LinksButton = styled(NavLink)``;

export default function Navigation() {
  return (
    <Wrapper>
      <MainNav>
        <HomeWrapper>
          <NavLink to='/'>
            <i className='fas fa-home' />
          </NavLink>
        </HomeWrapper>

        <SecondaryWrap>
          <NavLink
            to='/contacts'
            activeStyle={{
              textDecoration: 'underline'
            }}
          >
            Contact
          </NavLink>

          <NavLink
            to='/login'
            activeStyle={{
              textDecoration: 'underline'
            }}
          >
            login
          </NavLink>
        </SecondaryWrap>
      </MainNav>
    </Wrapper>
  );
}
