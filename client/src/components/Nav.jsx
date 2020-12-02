import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  max-height: 3rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 3px 9px 9px rgba(196, 199, 204, 0.6);
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 95%;
  list-style: none;
  padding: 0;
  justify-content: flex-end;
`;

const NavMenuItem = styled.li`
  padding: 0px 0px 0px 20px;
  display: flex;
  align-self: flex-end;

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 0px;
    text-decoration: none;

    &.active {
      color: #53a5be;
    }
  }
`;

const Title = styled.h1`
  display: flex;
  //padding: 20px;
  font-weight: bolder;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  //line-height: 3.456;
  //padding: 5px 0;
  text-decoration: none !important;

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    padding: 0px;
    text-decoration: none;
  }
`;



const Login = styled.p`
  width: 7rem;
  height: 3rem;
  text-align: center;
  background-color: #469fb9;
  color: white;
  margin: 0;

  & {
    font-size: 0.8em;
  }
`;

const Nav = () => (
  <StyledNav>
    <Title>
      <NavLink exact to="/" activeClassName="active">
        FG
      </NavLink>
    </Title>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontorer" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/fagartikler" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/login" activeClassName="active">
          <Login>LOGG INN</Login>
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
