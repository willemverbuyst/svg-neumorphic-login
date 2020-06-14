import React from 'react';
import { Link } from 'react-router-dom';

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
    left: 2.4rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
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
  width: 18rem;
  height: 18rem;
  font-size: 4.5rem;
  background-color: #f3f3f3;
  border-radius: 50%;
  font-weight: 700;
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${moveIn} 2s forwards ease-out;
`;

const LoginLink = styled.div`
  width: 8rem;
  height: 8rem;
  font-size: 2rem;
  background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px solid #07b2d9;
  font-weight: 700;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
