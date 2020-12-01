import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  display:flex;
  justify-content: flex-end;
  box-shadow: 0px 2px 2px rgba(196, 199, 204, 0.6);
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
      color: #53A5BE;
      
    }
  }
`;

const Title = styled.h1`
display: flex;
  padding: 20px;
  font-weight: bolder;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 3.456;
  padding: 5px 0;
  text-decoration: none;

  &.active {
    color: #007b5f;
  }

`;

const Login = styled.p `
  width: 7rem;
  height: 4.2em;
  padding: 14.5px 0px;
  text-align: center;
  background-color: #469FB9;
  color: white;
  font-size: 1em;

  & p {
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
        <NavLink  exact to="/login" activeClassName="active">
          <Login>
            <p>
            LOGG INN
            </p>
            
          </Login>
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
