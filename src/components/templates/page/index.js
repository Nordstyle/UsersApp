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
            { 
              this.props.data && this.props.data.items && this.props.data.items.map(item => <Record key={ item.question_id } {...item} />)
            }
          </List>
        </Content>
      </div>
      
    );
  }
}

export default PageTemplate