import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

/**
 * Tatt utgangspunkt fra denne videoen https://www.youtube.com/watch?v=GGkBwpxV7AI&ab_channel=FullStackMastery
 * Styler tre divs for å få en hamburgermeny form. Bruker div sin nth-child 1,2 og 3 for
 * de ulike divsa og har forskjellig transform rotasjoner på disse
 * for å lage en animasjon med transition. Hamburgermenyen har en onclick med boolean som aktiverer en transiiton på 0.3 sekunder.
 * Hamburgermenyen viser seg til max 750px også blir den satt til usynlig, så fort den går 750px blir den satt til display: flex.
 *  */ 
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

/**
 * Har en boolean hook som holder på staten til hamburgermenyen om den er
 * trykket på eller ikke, noe som aktiverer LeftNav komponenten hvis den 
 * blir tyrkket på.
 */
export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Hamburger
        open={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div />
        <div />
        <div />
      </Hamburger>
      <RightNav open={isOpen} />
    </>
  );
};

export default HamburgerMenu;
