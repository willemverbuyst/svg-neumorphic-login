import { Link, NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  position: absolute;
  top: 5rem;
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 80vw;
  max-width: 55rem;
  border: none;
  outline: none;
  background: none;
  font-size: 1.8rem;
  padding: 2rem 2rem;
  color: inherit;
  margin-bottom: 3rem;
  border-radius: 3rem;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;

  &::placeholder {
    color: #068bbf;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  margin-bottom: 3rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 80vw;
  max-width: 55rem;
  height: 6rem;
  border-radius: 3rem;
  font-size: 2rem;
  font-family: inherit;
  color: #044d8c;
  background-color: #f3f3f3;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #fff;
  transition: 0.5s;

  &:hover {
    box-shadow: 2px 2px 5px #b1b1b1, -2px -2px 5px #fff;
  }
  &:active {
    box-shadow: inset 1px 1px 3px #cbced1, inset -1px -1px 3px #fff;
  }
`;

export const Links = styled.div`
  padding-top: 2rem;
`;

export const Llink = styled(Link)`
  text-decoration: none;
  color: #068bbf;
  font-size: 1.5rem;
`;

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

export const StyledLink = styled(NavLink)`
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

export const LogoLink = styled.div`
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

export const LoginLink = styled.div`
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
