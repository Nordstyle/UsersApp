import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Wrapper, Title, UserName, Avatar, Content, Link } from './styled';

const Main = (props) => (
  <div>
    <Wrapper>
      <Avatar src={ props.data.userAvatar } />
      <UserName> { props.data.userName} </UserName>
      <Title> { props.data.title } </Title>
      <Content> 
        { props.data.link ? <Link target='_blank' href={ props.data.link }> See detail </Link> : null }
      </Content>
    </Wrapper>
  </div>
);

export default withRouter(connect(
  store => ({ data: store.dataRow })
)(Main));