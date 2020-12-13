import styled, { css } from 'styled-components';

interface SwitchButtonProps {
  checked: boolean | undefined;
}

export const Container = styled.div`
  flex: 1;
  padding-top: 16px;
`;

export const SwitchTitle = styled.label`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  margin-left: 16px;
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 35px;
  background: #232129;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  margin-top: 8px;

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

export const CheckSwitchButton = styled.span<SwitchButtonProps>`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  transition: 0.2s;
  background: #d4d4d4;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${props =>
    props.checked &&
    css`
      left: calc(100% - 2px);
      transform: translateX(-100%);
      background: #fff;
    `}
`;
