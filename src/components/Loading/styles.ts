import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  size: number;
  color: string;
}

const motion1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const motion2 = keyframes`
   0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;
const motion3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LoadingSpinner = styled.div<LoadingProps>`
  display: inline-block;
  position: relative;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${props => props.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 6px;
    animation: ${motion1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 6px;
    animation: ${motion2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 26px;
    animation: ${motion2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 45px;
    animation: ${motion3} 0.6s infinite;
  }
`;
