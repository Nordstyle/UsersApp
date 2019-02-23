import React from 'react';
import { Author, Avatar, Name } from './styled'; 

export const Record = (props) => {
  const { title, owner: { display_name: name, profile_image: image }} = props;
  return(
    <tr>
      <td>
        { title }
      </td>
      <Author>
        <Avatar src={ image } />
        <Name> { name } </Name>
      </Author>
    </tr>
  );
};

Record.defaultProps = {
  title: '',
  owner: {
    display_name: '',
    profile_image: 'http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg'
  }
};