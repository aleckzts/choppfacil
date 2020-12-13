import React from 'react';

import { LoadingSpinner } from './styles';

interface LoadingType {
  size?: number;
  color?: string;
}

// from library react-awesome-spinners
const Loading: React.FC<LoadingType> = ({ color = '#312e38', size = 56 }) => (
  <LoadingSpinner color={color} size={size}>
    <div />
    <div />
    <div />
    <div />
  </LoadingSpinner>
);

Loading.defaultProps = {};

export default Loading;
