import React from 'react';

import { Wrapper, Block, Title, Choose, Button, Close } from './styled';

export const Modal = (props) => {
  const { isVisible } = props;
  
  if ( isVisible ) {
    return (
      <Wrapper>
        <Block>
          <Close>X</Close>
          <Title> Go to the specified entry? </Title>
          <Choose>
            <Button href="#" positive> Yes </Button>
            <Button href="#" negative> No </Button>
          </Choose>
        </Block>
      </Wrapper>
    ); 
  }

  return (``);
};