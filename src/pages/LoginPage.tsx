import { MouseEvent, ReactElement } from 'react';

import { Button, Form, Input, Links, Llink, Main } from '../style';

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
          <Llink to="/">Forgot password?</Llink> or <Llink to="/signup">Sign up</Llink>
        </Links>
      </Form>
    </Main>
  );
};

export default LoginPage;
