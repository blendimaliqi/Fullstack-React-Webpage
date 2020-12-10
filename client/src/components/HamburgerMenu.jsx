import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';

// Tatt utgangspunkt fra denne videoen https://www.youtube.com/watch?v=GGkBwpxV7AI&ab_channel=FullStackMastery
const Hamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 750px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'black' : '#e6e0e0')};
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(45deg)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? 'translateX(10%0)' : 'translateX(100%)'};
      opacity: ${({ open }) => (open ? 1 : 0)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(-45deg)')};
    }
  }
`;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Hamburger
        open={isOpen}
        onClick={() => {
          console.log('CLICK');
          setIsOpen(!isOpen);
        }}
      >
        <div />
        <div />
        <div />
      </Hamburger>
      <LeftNav open={isOpen} />
    </>
  );
};

export default HamburgerMenu;
