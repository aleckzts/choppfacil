import React, { ButtonHTMLAttributes } from 'react';

import Loading from '../Loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? <Loading /> : children}
    </Container>
  );
};

export default Button;
