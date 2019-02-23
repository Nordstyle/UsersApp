import React from 'react';
import { Item, Author, Avatar, Name, Title } from './styled'; 

export const Record = (props) => {
  const { title, owner: { display_name: name, profile_image: image }} = props;
  return(
    <Item>
      <Title>
        { title }
      </Title>
      <Author>
        <Avatar src={ image } />
        <Name> { name } </Name>
      </Author>
    </Item>
  );
};

Record.defaultProps = {
  title: '',
  owner: {
    display_name: '',
    profile_image: 'http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg'
  }
};