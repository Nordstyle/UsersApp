import React from 'react'

import { Heading, Content } from './styled'


class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Heading> 
          { this.props.title } 
        </Heading>
        <Content>
          { this.props.content }
        </Content>
      </div>
      
    );
  }
}

export default PageTemplate