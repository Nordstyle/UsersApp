import React from 'react';
import { List } from './../../List';
import { Record } from './../record';

import { Heading, Content } from './styled';


class PageTemplate extends React.Component {
  render() {
    const { title, data } = this.props;
    return (
      <div>
        <Heading> 
          { title } 
        </Heading>
        <Content>
          <List>
            { 
              data && data.items && data.items.map(item => <Record key={ item.question_id } {...item} />)
            }
          </List>
        </Content>
      </div>
      
    );
  }
}

export default PageTemplate