import React from 'react';
import { List } from './../../list';
import { Record } from './../record';
import { Modal } from './../../modal';

import { Heading, Content } from './styled';


class PageTemplate extends React.Component {
  render() {
    const { title, data, userId } = this.props;
    return (
      <div>
        <Heading> 
          { title } 
        </Heading>
        <Content>
          <List>
            { 
              data && data.map(item => <Record key={ item.userId } {...item} />)
            }
          </List>
        </Content>
        <Modal isVisible={false}/>
      </div>      
    );
  }
}

export default PageTemplate