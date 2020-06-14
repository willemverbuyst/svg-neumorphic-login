import React from 'react';
import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

import SVG from './SVG';
export default function Header() {
  return (
    <div>
      <SVG />

      <Logo>
        <StyledLink to="/">Home</StyledLink>
      </Logo>

      <Link to="/login">Login</Link>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const moveIn = keyframes`
  0% {
    left: 400px;
    color: #f3f3f3;
    box-shadow: none;
  }
  70% {
    left: 0.1rem;
    color: #f3f3f3;
    box-shadow: none;
  }
  100% {
    left: 1.6rem;
    color: #044d8c;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
  }
`;

const Logo = styled.div`
  width: 12rem;
  height: 12rem;
  font-size: 3rem;
  background-color: #f3f3f3;
  border-radius: 50%;
  font-weight: 700;
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${moveIn} 2s forwards ease-out;
`;
