import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  margin-top: 16px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;

  font-weight: 500;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    background: ${shade(0.6, '#ff9000')};
  }

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
