import React from 'react';
import { ModalProvider } from 'styled-react-modal';

import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider>
    <ToastProvider>{children}</ToastProvider>
  </ModalProvider>
);

export default AppProvider;
