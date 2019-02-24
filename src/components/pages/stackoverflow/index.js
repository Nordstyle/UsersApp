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
    console.log(this.props)
    if (this.props.data.error_message) return <PageTemplate title={ this.props.data.error_message } />
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