import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';
import { Content } from '../styles';

import { ButtonsBox, FrameOne, FrameTwo, StyledModal } from './styles';

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const exitApp = useCallback(() => {
    history.push('/exit');
  }, [history]);

  return (
    <>
      <Content>
        <FrameOne />
        <FrameTwo>
          <strong>
            Lorem ipsum vitae molestie scelerisque a augue sit donec netus
            suspendisse
          </strong>
          <ButtonLink to="/start">Começar</ButtonLink>
        </FrameTwo>

        <StyledModal
          isOpen={isOpen}
          // onBackgroundClick={toggleModal}
          // onEscapeKeydown={toggleModal}
        >
          <span>Você tem mais de 18 anos?</span>
          <ButtonsBox>
            <button type="submit" onClick={toggleModal}>
              Sim
            </button>
            <button type="submit" onClick={exitApp}>
              Não
            </button>
          </ButtonsBox>
        </StyledModal>
      </Content>
    </>
  );
};

export default HomePage;
