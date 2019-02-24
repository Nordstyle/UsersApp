import React from 'react';
import { Item, Author, Avatar, Name, Title } from './styled'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCurrentRecord } from '../../../store/actions';
import { Modal } from './../../modal'; 

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  handleClick(data) {
    this.props.addCurrentRecord(data);
    this.setState({ modalIsOpen: true });
  }

  onCancel(e) {
    e.stopPropagation();
    this.setState({ modalIsOpen: false });
    this.props.addCurrentRecord({});
  }

  onConfirm(e) {
    e.stopPropagation();
    this.props.history.push('/detail');
  }

  render() {
    const { title, userAvatar, userName  } = this.props;
    console.log(this.state.modalIsOpen)

    return(
      <Item onClick={ e => this.handleClick({ title, userAvatar, userName }) }>
        <Title>
          { title }
        </Title>
        <Author>
          <Avatar src={ userAvatar } />
          <Name> { userName } </Name>
        </Author>
        { this.state.modalIsOpen && <Modal onCancel={ this.onCancel } onConfirm={ this.onConfirm } /> }
      </Item>
    );
  }
} 

Record.defaultProps = {
  title: '',
  owner: {
    display_name: '',
    profile_image: 'http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg'
  }
};

export default withRouter(connect(null, { addCurrentRecord })(Record));