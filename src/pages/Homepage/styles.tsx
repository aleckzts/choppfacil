import styled from 'styled-components';
import Modal from 'styled-react-modal';

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

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 480px;
  height: 240px;

  padding: 6px;

  background-color: #fff;

  span {
    font-size: 32px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 360px;
  margin-top: 32px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff9000;
    height: 48px;
    border-radius: 10px;
    border: 0;
    margin-top: 16px;
    padding: 0 16px;
    color: #312e38;
  }
`;
