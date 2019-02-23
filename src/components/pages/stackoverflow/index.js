import React from 'react';
import { connect } from 'react-redux';

import { fetchUserOverflowData } from '../../../store/actions';
import PageTemplate from '../../templates/page';

class SF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
  }

  componentDidMount() {
    this.getData();
    document.title = 'StackOverflow Page';
  }
  
  getData() {
    this.props.fetchUserOverflowData();
  }

  render() {
    if (this.props.hasErrored) return <PageTemplate title="Erorr, come to us later" />
    if (this.props.isLoading) return <PageTemplate title="Loading..." />

    return (
      <PageTemplate title="StackOverflow" data={ this.props.data } />
    );
  }
};

export default connect(
  store => ({ isLoading: store.usersOverflowData.isLoading, data: store.usersOverflowData.data }),
  { fetchUserOverflowData }
)(SF);