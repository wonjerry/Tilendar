import React, { Component } from 'react';
import Header from '../components/organisms/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  render() {
    const { currentUser, history } = this.props;
    return (
      <Header
        currentUser={ currentUser }
        history={history} />
    );
  }
}

export default connect((state) => ({
    currentUser: state.currentUser,
  }),{})(HeaderContainer);
