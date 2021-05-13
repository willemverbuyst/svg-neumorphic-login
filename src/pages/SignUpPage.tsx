import { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';

const SignUpPage = (): ReactElement => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Main>
        <form>
          <div>
            <Input type="name" placeholder="full name" />
          </div>
          <div>
            <Input type="email" placeholder="email" />
          </div>
          <div>
            <Input type="password" placeholder="password" />
          </div>
          <div>
            <Button onClick={(e) => handleClick(e)}>Sign Up</Button>
          </div>
        </form>
      </Main>
    </div>
  );
};

const Main = styled.main`
  position: absolute;
  top: 5rem;
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
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

const Button = styled.button`
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

export default SignUpPage;
