import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #52a577;

  font-size: 1.4rem;
  filter: drop-shadow(1px 2px 4px black);
`;

const MainNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    padding: 2% 0%;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HomeWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SecondaryWrap = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function Navigation() {
  return (
    <Wrapper>
      <MainNav>
        <HomeWrapper>
          <NavLink to='/protected'>
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
            Contacts
          </NavLink>
          <NavLink
            to='/acts'
            activeStyle={{
              textDecoration: 'underline'
            }}
          >
            Acts
          </NavLink>

          <NavLink
            to='/login'
            activeStyle={{
              textDecoration: 'underline'
            }}
          >
            Login
          </NavLink>

          <NavLink
            to='/register'
            activeStyle={{
              textDecoration: 'underline'
            }}
          >
            Sign Up
          </NavLink>
        </SecondaryWrap>
      </MainNav>
    </Wrapper>
  );
}
