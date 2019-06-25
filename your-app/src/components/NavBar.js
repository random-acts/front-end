import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AppLinks = styled.div``;

const LinksButton = styled(NavLink)``;

export default function Navigation() {
  return (
    <div className="appNav">
      <AppLinks>
        <LinksButton to="/" activeClassName="selected">
          Home
        </LinksButton>

        <LinksButton to="/contacts" activeClassName="selected">
          Contact
        </LinksButton>

        <LinksButton to="/login" activeClassName="selected">
          login
        </LinksButton>
      </AppLinks>
    </div>
  );
}
