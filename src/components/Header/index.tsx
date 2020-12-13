import React from 'react';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <span>Slogan</span>
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;
