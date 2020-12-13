import React from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { Container } from './style';

const ButtonLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <Container>
      <Link to={to} {...props}>
        {children}
      </Link>
    </Container>
  );
};

export default ButtonLink;
