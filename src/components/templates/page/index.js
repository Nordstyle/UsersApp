import React from 'react';
import { List } from './../../List';
import { Record } from './../record';

import { Heading, Content } from './styled'


class PageTemplate extends React.Component {
  render() {
    return (
      <div>
        <Heading> 
          { this.props.title } 
        </Heading>
        <Content>
          <List>
            <Record></Record>
          </List>
        </Content>
      </div>
      
    );
  }
}

export default PageTemplate