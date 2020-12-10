import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useUserState } from '../context/UserProvider';
import { logoutPost } from '../utils/loginService.js';

const StyledLeftNav = styled.ul`
    margin: 0;
    padding: 0;
    transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)' };
    flex-flow: column nowrap;
    background-color: #53a5be;
    position: fixed;
    top: 0;
    right: 0;
    height: 25.31rem;
    width: 120px;
    padding-top: 3rem;
    color: #fff;
    transition: transform 0.3s ease-in-out;

    
    @media (min-width: 750px) {
        display: none;
    }
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
      color:#e6e0e0;
    }

    & :hover {
      color: #e6e0e0;
    }
  }
`;


const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: bolder;
  color: #333;
  font-size: 20px;
  font-weight: 700;


  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }
`;





export const LeftNav = ({open}) => {

  const { isLoggedIn, isAdmin, setUser, isSuperAdmin } = useUserState();

  const logout = async () => {
    await logoutPost();
    setUser(null); 
  };

    return (
            <StyledLeftNav open={open}>
                    <Title>
              <NavLink exact to="/" activeClassName="active">
                LG
              </NavLink>
            </Title>
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
          { ( isAdmin || isSuperAdmin )  && (
        <NavMenuItem>
        <NavLink exact to="/useremails" activeClassName="active">
          Inbox
        </NavLink>
      </NavMenuItem>
        )}
        {isSuperAdmin  && (
        <NavMenuItem>
        <NavLink exact to="/stats" activeClassName="active">
          Statistikk
        </NavLink>
      </NavMenuItem>
        )}
        {!isLoggedIn &&
          <NavMenuItem>
          <NavLink exact to="/registrer" activeClassName="active">
            Registrer
          </NavLink>
        </NavMenuItem>
        }
        {!isLoggedIn && (
          <NavMenuItem>
            <NavLink exact to="/login" activeClassName="active">
              LOGG INN
            </NavLink>
          </NavMenuItem>
        )}
        {isLoggedIn && (
          <NavMenuItem>
            <NavLink exact to="/login" activeClassName="active" onClick={logout}>
               LOGG UT
            </NavLink>
          </NavMenuItem>
        )}
          </StyledLeftNav>
    )
}

export default LeftNav;