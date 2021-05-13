import { ReactElement } from 'react';

import { LoginLink, LogoLink, StyledLink } from '../style';
import SVG from './SVG';

const Header = (): ReactElement => {
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
};

export default Header;
