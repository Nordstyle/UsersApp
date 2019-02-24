import React from 'react';
import { connect } from 'react-redux';

import { fetchGithubRepos } from '../../../store/actions';
import PageTemplate from '../../templates/page';

class GH extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
    document.title = 'Github Page';
  }
  
  getData() {
    this.props.fetchGithubRepos();
  }

  render() {
    if (this.props.isError) return <PageTemplate title={`${this.props.data.message}  ${this.props.data.stack}`} />
    if (this.props.isLoading) return <PageTemplate title="Loading..." />

    return (
      <PageTemplate title="Github" data={ this.props.data } />
    );
  }
};

// export default GH
export default connect(
  store => ({ isLoading: store.usersGithubRepos.isLoading,  isError: store.usersGithubRepos.isError, data: store.usersGithubRepos.data }),
  { fetchGithubRepos }
)(GH);