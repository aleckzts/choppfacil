import React from 'react';
import { Content } from '../styles';
import { ExitText } from './styles';

const ExitPage: React.FC = () => {
  return (
    <Content>
      <ExitText>
        <strong>Este conteúdo não está liberado para você.</strong>
        <strong>
          O consumo de bebidas alcoólicas para menores de 18 anos é proibido.
        </strong>
      </ExitText>
    </Content>
  );
};

export default ExitPage;
