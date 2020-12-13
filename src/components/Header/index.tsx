import React from 'react';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          {/* <span>Slogan</span> */}
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;
