import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Main = (props) => (
  <div>
    Detail page
  </div>
);

export default withRouter(connect(
  store => ({ data: store.dataRow })
)(Main));