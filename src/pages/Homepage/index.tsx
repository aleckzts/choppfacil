import React from 'react';
import ButtonLink from '../../components/ButtonLink';

import { Container, Content } from '../styles';

import { FrameOne, FrameTwo } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <FrameOne />
      <FrameTwo>
        <strong>
          Lorem ipsum vitae molestie scelerisque a augue sit donec netus
          suspendisse
        </strong>
        <ButtonLink to="/start">Começar</ButtonLink>
      </FrameTwo>
    </>
  );
};

export default Dashboard;
