import React from 'react';

import { FiHelpCircle } from 'react-icons/fi';

import ToolTip from '../Tooltip';

import { Container } from './styles';

interface HelpIconProps {
  message: string;
}

const HelpIcon: React.FC<HelpIconProps> = ({ message }) => {
  return (
    <Container>
      <ToolTip title={message}>
        <FiHelpCircle size={20} />
      </ToolTip>
    </Container>
  );
};

export default HelpIcon;
