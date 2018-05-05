import React, { Component } from 'react';
import HeaderContainer from '../../../containers/HeaderContainer';
import SignUpForm from './signUpForm.jsx';

class MainPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer {...this.props} />
        <SignUpForm />
      </div>
    );
  }
}

export default MainPage;
