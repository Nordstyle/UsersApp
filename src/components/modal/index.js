import React from 'react';
import ReactDOM from 'react-dom';

import { Wrapper, Block, Title, Choose, Button, Close } from './styled';

export const Modal = (props) => {
  const { onConfirm, onCancel } = props;

  return ReactDOM.createPortal(
    <Wrapper>
      <Block>
        <Close onClick={ onCancel }>X</Close>
        <Title> Go to the specified entry? </Title>
        <Choose>
          <Button positive onClick={ onConfirm }> Yes </Button>
          <Button negative onClick={ onCancel }> No </Button>
        </Choose>
      </Block>
    </Wrapper>,
    document.querySelector('#modal-root')
  );
};