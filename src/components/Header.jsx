import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import SVG from './SVG';

export default function Header() {
  return (
    <div>
      <SVG />
      <LogoLink>
        <StyledLink to="/">Home</StyledLink>
      </LogoLink>
      <LoginLink>
        <StyledLink to="/login">Login</StyledLink>
      </LoginLink>
    </div>
  );
}

const moveIn = keyframes`
  0% {
    left: 400px;
    box-shadow: none;
  }
  70% {
    left: 0.3rem;
    box-shadow: none;
  }
  100% {
    left: 2vw;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
  }
`;

const changeFontColor = keyframes`
  0% {
    color: #f3f3f3;
  }
  100% {
    color: #044d8c; 
  }
`;

const StyledLink = styled(NavLink)`
  animation: ${changeFontColor} 2s forwards ease-out;
  transition: 0.4s ease-in-out;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoLink = styled.div`
  width: 15vw;
  height: 15vw;
  position: absolute;
  top: 2vw;
  left: 2vw;
  background-color: #f3f3f3;
  border-radius: 50%;
  font-size: 4vw;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${moveIn} 2s forwards ease-out;
  z-index: 10;
`;

const LoginLink = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px solid #07b2d9;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
