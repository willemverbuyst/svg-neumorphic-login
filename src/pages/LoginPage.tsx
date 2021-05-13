import { ReactElement, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Main, Form, Input, Button, Links } from '../style';

const LoginPage = (): ReactElement => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <Main>
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button onClick={(e) => handleClick(e)}>Login</Button>
        <Links>
          <Llink to="/">Forgot password?</Llink> or{' '}
          <Llink to="/signup">Sign up</Llink>
        </Links>
      </Form>
    </Main>
  );
};

export const Llink = styled(Link)`
  text-decoration: none;
  color: #068bbf;
  font-size: 1.5rem;
`;

export default LoginPage;
