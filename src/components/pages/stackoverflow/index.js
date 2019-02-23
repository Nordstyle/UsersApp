import React from 'react'
import { getUsers } from '../../../api'

import PageTemplate from '../../templates/page'

class sf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      modalIsOpen: false,
      isLoading: true,
      hasErrored: false,
      selectedId: null
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    document.title = 'StackOverflow Page';
  }
  
  getData() {
    this.setState({ isLoading: false });

    getUsers()
      .then(posts => this.setState({ posts }))
  }

  render() {
    if (this.state.hasErrored) return <PageTemplate title="Erorr, come to us later" />
    if (this.state.isLoading) return <PageTemplate title="Loading..." />

    return (
      <PageTemplate title="StackOverflow" content="text" />
    );
  }
}

export default sf