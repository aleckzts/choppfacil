import styled, { css } from 'styled-components';

interface ContainerProps {
  visible: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* position: absolute; */
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;

  ${props =>
    props.visible &&
    css`
      visibility: visible;
    `}
`;
