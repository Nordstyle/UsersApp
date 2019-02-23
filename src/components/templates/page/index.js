import React from 'react'

import { Heading } from './styled'


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Страница'
    };
  }

  render() {
    return (
      <Heading> { this.state.title } </Heading>
    );
  }
}

export default page