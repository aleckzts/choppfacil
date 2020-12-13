import styled from 'styled-components';

import frameOneBackground from '../../assets/prateleira.png';

export const FrameOne = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 360px;

  background: url(${frameOneBackground}) no-repeat center;
  background-size: cover;
`;

export const FrameTwo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  strong {
    margin: 16px 0;
  }
`;
