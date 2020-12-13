import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  margin-top: 16px;
  color: #312e38;
  width: 100%;
  max-width: 180px;

  font-weight: 500;
  transition: background-color 0.2s;

  a {
    flex: 1;
    width: 100%;
    height: 100%;

    text-decoration: none;
    text-align: center;
    color: #312e38;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
