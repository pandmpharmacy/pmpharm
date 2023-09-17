import React from 'react';
import styled from 'styled-components';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <MenuButton onClick={toggleMenu}>
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

const MenuButton = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #333;
  transition: 0.4s;

  &:hover {
    background-color: #ff9900;
  }
`;

export default HamburgerMenu;
