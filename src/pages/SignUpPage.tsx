import { ReactElement, MouseEvent } from 'react';
import { Main, Form, Input, Button } from '../style';

const SignUpPage = (): ReactElement => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Main>
      <Form>
        <Input type="name" placeholder="full name" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button onClick={(e) => handleClick(e)}>Sign Up</Button>
      </Form>
    </Main>
  );
};

export default SignUpPage;
